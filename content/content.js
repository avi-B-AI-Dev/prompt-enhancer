// PromptEnhancer - Content Script
// Finds the input field, injects the Enhance button with dropdown,
// scrapes chat history, and triggers enhancement

// ══════════════════════════════════════════════
// SECTION 1: Find the input field
// ══════════════════════════════════════════════

function findInputField() {
    var claudeInput = document.querySelector('[data-testid="chat-input"]');
    if (claudeInput) return claudeInput;
  
    var chatgptInput = document.querySelector('#prompt-textarea');
    if (chatgptInput) return chatgptInput;
  
    var geminiInput = document.querySelector('.ql-editor');
    if (geminiInput) return geminiInput;
  
    var generic = document.querySelector('[contenteditable="true"], textarea');
    if (generic) return generic;
  
    return null;
  }
  
  // ══════════════════════════════════════════════
  // SECTION 2: Get text from input field
  // ══════════════════════════════════════════════
  
  function getInputText(field) {
    if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
      return field.value.trim();
    }
    return field.textContent.trim();
  }
  
  // ══════════════════════════════════════════════
  // SECTION 3: Set text into input field
  // ══════════════════════════════════════════════
  
  function setInputText(field, text) {
    if (field.tagName === 'TEXTAREA' || field.tagName === 'INPUT') {
      field.value = text;
      field.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }
  
    // For contentEditable (Claude, ChatGPT)
    field.focus();
  
    // Try execCommand first (supports undo with Ctrl+Z)
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(field);
    selection.removeAllRanges();
    selection.addRange(range);
  
    var success = document.execCommand('insertText', false, text);
  
    if (!success) {
      // Fallback: direct replacement
      field.textContent = text;
      field.dispatchEvent(new InputEvent('input', { bubbles: true }));
    }
  }
  
  // ══════════════════════════════════════════════
  // SECTION 4: Load user settings from storage
  // ══════════════════════════════════════════════
  
  function loadSettings(callback) {
    chrome.storage.local.get(['pe_provider', 'pe_apikey', 'pe_model', 'pe_persona_name', 'pe_persona_role', 'pe_persona_company', 'pe_persona_instructions'], function(data) {
      var settings = null;

      if (data.pe_provider && data.pe_apikey && data.pe_apikey.length > 0) {
        settings = {
          provider: data.pe_provider,
          apiKey: data.pe_apikey,
          model: data.pe_model || null
        };
      }

      var persona = null;
      if (data.pe_persona_name || data.pe_persona_role || data.pe_persona_company || data.pe_persona_instructions) {
        persona = {
          name: data.pe_persona_name || '',
          role: data.pe_persona_role || '',
          company: data.pe_persona_company || '',
          instructions: data.pe_persona_instructions || ''
        };
      }

      callback(settings, persona);
    });
  }
  
  // ══════════════════════════════════════════════
  // SECTION 5: Scrape chat history
  // ══════════════════════════════════════════════
  
  function scrapeChatHistory() {
    var messages = [];
  
    // Claude
    var claudeMessages = document.querySelectorAll('[data-testid="user-message"], [data-testid="assistant-message"]');
    if (claudeMessages.length > 0) {
      claudeMessages.forEach(function(msg) {
        var role = msg.getAttribute('data-testid').indexOf('user') !== -1 ? 'User' : 'Assistant';
        var text = msg.textContent.trim().substring(0, 300);
        if (text.length > 10) {
          messages.push(role + ': ' + text);
        }
      });
    }
  
    // ChatGPT
    if (messages.length === 0) {
      var gptMessages = document.querySelectorAll('[data-message-author-role]');
      if (gptMessages.length > 0) {
        gptMessages.forEach(function(msg) {
          var role = msg.getAttribute('data-message-author-role') === 'user' ? 'User' : 'Assistant';
          var text = msg.textContent.trim().substring(0, 300);
          if (text.length > 10) {
            messages.push(role + ': ' + text);
          }
        });
      }
    }
  
    // Gemini
    if (messages.length === 0) {
      var geminiMessages = document.querySelectorAll('.conversation-container .message-content, .query-content, .response-content, [data-message-id]');
      if (geminiMessages.length > 0) {
        geminiMessages.forEach(function(msg) {
          var text = msg.textContent.trim().substring(0, 300);
          if (text.length > 10) {
            var index = Array.prototype.indexOf.call(geminiMessages, msg);
            var role = (index % 2 === 0) ? 'User' : 'Assistant';
            messages.push(role + ': ' + text);
          }
        });
      }
    }
  
    // Keep last 10 messages — recent context is most relevant, saves tokens
 // Keep last 10 messages — recent context is most relevant, saves tokens
 if (messages.length > 10) {
    messages = messages.slice(messages.length - 10);
  }

  return messages.length > 0 ? messages.join('\n\n') : '';
}
  
  
  // ══════════════════════════════════════════════
  // SECTION 6: Create and inject the button
  // ══════════════════════════════════════════════
  
  function injectButton() {
    if (document.getElementById('pe-enhance-btn')) return;
  
    // Find the send button on different platforms
  var sendButton = null;
  var sendWrapper = null;

  // Claude
  sendButton = document.querySelector('button[aria-label="Send message"]');
  if (sendButton) {
    sendWrapper = sendButton.closest('div.shrink-0.flex.items-center');
    if (!sendWrapper) {
      sendWrapper = sendButton.parentElement;
    }
  }

  // ChatGPT
  if (!sendButton) {
    sendButton = document.querySelector('button[data-testid="send-button"]');
    if (sendButton) {
      sendWrapper = sendButton.parentElement;
    }
  }

  // Gemini
  if (!sendButton) {
    sendButton = document.querySelector('button[aria-label="Send message"], .send-button, button[mattooltip="Send message"]');
    if (sendButton) {
      sendWrapper = sendButton.parentElement;
    }
  }

  // Generic fallback — any submit-like button near a text input
  if (!sendButton) {
    var inputField = findInputField();
    if (inputField) {
      var parent = inputField.closest('form') || inputField.parentElement.parentElement;
      sendButton = parent ? parent.querySelector('button[type="submit"], button:last-of-type') : null;
      if (sendButton) {
        sendWrapper = sendButton.parentElement;
      }
    }
  }

  if (!sendButton || !sendWrapper) return;
  
    // Create the button container
    var container = document.createElement('div');
    container.id = 'pe-enhance-btn';
    container.style.cssText = 'position:relative; display:flex; align-items:center; margin-right:4px;';
  
    // Main enhance button
    var mainBtn = document.createElement('button');
    mainBtn.type = 'button';
    mainBtn.textContent = '🪄 Enhance';
    mainBtn.style.cssText = 'background:#FF6B35; color:white; border:none; border-radius:8px 0 0 8px; padding:4px 10px; font-size:13px; font-weight:600; cursor:pointer; height:32px; display:flex; align-items:center; gap:4px; white-space:nowrap; transition:background 0.2s;';

    mainBtn.addEventListener('mouseenter', function() {
    mainBtn.style.background = '#E55A2B';
  });
  mainBtn.addEventListener('mouseleave', function() {
    mainBtn.style.background = '#FF6B35';
  });
  
    // Dropdown arrow button
    var arrowBtn = document.createElement('button');
    arrowBtn.type = 'button';
    arrowBtn.textContent = '▾';
    arrowBtn.style.cssText = 'background:#FF6B35; color:white; border:none; border-left:1px solid rgba(255,255,255,0.3); border-radius:0 8px 8px 0; padding:4px 6px; font-size:12px; cursor:pointer; height:32px; display:flex; align-items:center; transition:background 0.2s;';

  
   arrowBtn.addEventListener('mouseenter', function() {
    arrowBtn.style.background = '#E55A2B';
  });
  arrowBtn.addEventListener('mouseleave', function() {
    arrowBtn.style.background = '#FF6B35';
  });
  
    // Dropdown menu (hidden by default)
    var dropdown = document.createElement('div');
    dropdown.style.cssText = 'display:none; position:absolute; bottom:36px; right:0; background:#1a1a2e; border:1px solid #333; border-radius:8px; padding:4px; min-width:160px; box-shadow:0 4px 12px rgba(0,0,0,0.3); z-index:99999;';
  
    // Local option
    var localOption = document.createElement('button');
    localOption.type = 'button';
    localOption.textContent = '🪄 Local (instant)';
    localOption.style.cssText = 'display:block; width:100%; background:none; color:#ffffff; border:none; padding:8px 12px; font-size:13px; cursor:pointer; text-align:left; border-radius:6px; transition:background 0.15s;';
  
    localOption.addEventListener('mouseenter', function() {
      localOption.style.background = '#2a2a4a';
    });
    localOption.addEventListener('mouseleave', function() {
      localOption.style.background = 'none';
    });
  
    // AI option
    var aiOption = document.createElement('button');
    aiOption.type = 'button';
    aiOption.textContent = '🤖 AI (uses API)';
    aiOption.style.cssText = 'display:block; width:100%; background:none; color:#ffffff; border:none; padding:8px 12px; font-size:13px; cursor:pointer; text-align:left; border-radius:6px; transition:background 0.15s;';
  
    aiOption.addEventListener('mouseenter', function() {
      aiOption.style.background = '#2a2a4a';
    });
    aiOption.addEventListener('mouseleave', function() {
      aiOption.style.background = 'none';
    });
  
    // Add options to dropdown
    dropdown.appendChild(localOption);
    dropdown.appendChild(aiOption);
  
    // Toggle dropdown on arrow click
    arrowBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
  
      loadSettings(function(settings) {
        // Show or hide AI option based on whether API key exists
        if (settings) {
          aiOption.style.display = 'block';
        } else {
          aiOption.style.display = 'none';
        }
  
        if (dropdown.style.display === 'none') {
          dropdown.style.display = 'block';
        } else {
          dropdown.style.display = 'none';
        }
      });
    });
  
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function(e) {
      if (!container.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  
    // ── Enhancement trigger functions ──
  
    function runEnhancement(mode) {
      dropdown.style.display = 'none';
  
      var inputField = findInputField();
      if (!inputField) {
        console.log('PromptEnhancer: No input field found');
        return;
      }
  
      var text = getInputText(inputField);
      if (!text || text.length === 0) {
        console.log('PromptEnhancer: No text to enhance');
        return;
      }
  
      var chatHistory = (mode === 'ai') ? scrapeChatHistory() : '';
  
      // Show loading state
      var originalText = mainBtn.textContent;
      mainBtn.textContent = mode === 'ai' ? '🤖 Enhancing...' : '🪄 Enhancing...';
      mainBtn.style.opacity = '0.7';
      mainBtn.disabled = true;
  
      loadSettings(function(settings, persona) {
        console.log('PromptEnhancer: Settings:', settings, 'Persona:', persona);
        enhancePrompt(text, mode, settings, chatHistory, persona, function(result) {
          // Set the enhanced prompt into the input field
          setInputText(inputField, result);
  
          // Reset button
          mainBtn.textContent = originalText;
          mainBtn.style.opacity = '1';
          mainBtn.disabled = false;
  
          console.log('PromptEnhancer: Enhancement complete!');
        });
      });
    }
  
    // Main button click = local enhancement (default)
    mainBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      runEnhancement('local');
    });
  
    // Dropdown option clicks
    localOption.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      runEnhancement('local');
    });
  
    aiOption.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      runEnhancement('ai');
    });
  
    // ── Keyboard shortcut: Ctrl+Shift+E ──
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        runEnhancement('local');
      }
    });
  
    // Assemble the button
    container.appendChild(mainBtn);
    container.appendChild(arrowBtn);
    container.appendChild(dropdown);
  
    // Insert before the send button area
    sendWrapper.parentElement.insertBefore(container, sendWrapper);
  
    console.log('PromptEnhancer: Button injected!');
  }
  
  // ══════════════════════════════════════════════
  // SECTION 7: Watch for page load and inject
  // ══════════════════════════════════════════════
  
  var observer = new MutationObserver(function() {
    injectButton();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  injectButton();
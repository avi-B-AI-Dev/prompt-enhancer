// PromptEnhancer - Popup Script
// Handles tab switching, saving persona, and saving API settings

// ══════════════════════════════════════════════
// TAB SWITCHING
// ══════════════════════════════════════════════

var tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    // Remove active from all tabs and contents
    tabs.forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });

    // Activate clicked tab and its content
    tab.classList.add('active');
    var tabName = tab.getAttribute('data-tab');
    document.getElementById('tab-' + tabName).classList.add('active');
  });
});

// ══════════════════════════════════════════════
// LOAD SAVED DATA ON POPUP OPEN
// ══════════════════════════════════════════════

chrome.storage.local.get(['pe_persona_name', 'pe_persona_role', 'pe_persona_company', 'pe_persona_instructions', 'pe_provider', 'pe_apikey', 'pe_model'], function(data) {
  // Load persona
  if (data.pe_persona_name) document.getElementById('persona-name').value = data.pe_persona_name;
  if (data.pe_persona_role) document.getElementById('persona-role').value = data.pe_persona_role;
  if (data.pe_persona_company) document.getElementById('persona-company').value = data.pe_persona_company;
  if (data.pe_persona_instructions) document.getElementById('persona-instructions').value = data.pe_persona_instructions;

  // Load API settings
  if (data.pe_provider) document.getElementById('api-provider').value = data.pe_provider;
  if (data.pe_apikey) document.getElementById('api-key').value = data.pe_apikey;
  if (data.pe_model) document.getElementById('api-model').value = data.pe_model;
});

// ══════════════════════════════════════════════
// SAVE PERSONA
// ══════════════════════════════════════════════

document.getElementById('save-persona').addEventListener('click', function() {
  var name = document.getElementById('persona-name').value.trim();
  var role = document.getElementById('persona-role').value.trim();
  var company = document.getElementById('persona-company').value.trim();
  var instructions = document.getElementById('persona-instructions').value.trim();

  chrome.storage.local.set({
    pe_persona_name: name,
    pe_persona_role: role,
    pe_persona_company: company,
    pe_persona_instructions: instructions
  }, function() {
    var status = document.getElementById('persona-status');
    status.textContent = 'Persona saved!';
    status.className = 'status success';
    setTimeout(function() { status.textContent = ''; }, 2000);
  });
});

// ══════════════════════════════════════════════
// SAVE API SETTINGS
// ══════════════════════════════════════════════

document.getElementById('save-api').addEventListener('click', function() {
  var provider = document.getElementById('api-provider').value;
  var apiKey = document.getElementById('api-key').value.trim();
  var model = document.getElementById('api-model').value.trim();

  // Validate: if provider selected, key is required
  if (provider && !apiKey) {
    var status = document.getElementById('api-status');
    status.textContent = 'API key is required when a provider is selected.';
    status.className = 'status error';
    setTimeout(function() { status.textContent = ''; }, 3000);
    return;
  }

  chrome.storage.local.set({
    pe_provider: provider,
    pe_apikey: apiKey,
    pe_model: model
  }, function() {
    var status = document.getElementById('api-status');
    status.textContent = 'API settings saved!';
    status.className = 'status success';
    setTimeout(function() { status.textContent = ''; }, 2000);
  });
});
// PromptEnhancer - Enhancement Engine
// Part 1: Task type detection dictionary

var TASK_TYPES = {

    // ── COMMUNICATION ──
    email: {
      keywords: ['email', 'mail', 'send', 'draft', 'compose', 'inbox', 'subject line', 'newsletter'],
      tone: 'professional and polite',
      format: 'Keep it concise and natural. No AI cliches like "I hope this finds you well."'
    },
    reply: {
      keywords: ['reply', 'respond', 'answer', 'get back to', 'message back', 'follow up', 'response to'],
      tone: 'matching the tone of the original message',
      format: 'Keep similar length to the original. Be natural and direct.'
    },
    presentation: {
      keywords: ['presentation', 'slides', 'powerpoint', 'ppt', 'slide deck', 'pitch deck', 'keynote', 'present to'],
      tone: 'clear and engaging',
      format: 'Structure with clear slides. Use bullet points, not paragraphs. Include speaker notes.'
    },
    message: {
      keywords: ['slack', 'text', 'dm', 'message', 'whatsapp', 'teams message', 'chat message'],
      tone: 'casual and concise',
      format: 'Keep it short. Match the platform style. Be human.'
    },
  
    // ── WRITING ──
    essay: {
      keywords: ['essay', 'article', 'write about', 'paper', 'write up', 'composition', 'assignment', 'thesis'],
      tone: 'natural and humanized with varied sentence structure',
      format: 'Use flowing paragraphs. Mix short and long sentences. Avoid robotic transitions like Furthermore or Moreover.'
    },
    blog: {
      keywords: ['blog', 'blog post', 'post about', 'medium', 'substack', 'wordpress'],
      tone: 'conversational and engaging',
      format: 'Hook the reader in the first line. Use subheadings. Write like you talk. Include a call to action.'
    },
    story: {
      keywords: ['story', 'fiction', 'creative writing', 'narrative', 'short story', 'plot', 'character', 'scene', 'novel', 'screenplay', 'script', 'dialogue'],
      tone: 'vivid and immersive',
      format: 'Show dont tell. Use sensory details. Create tension. Develop characters through action and dialogue.'
    },
    speech: {
      keywords: ['speech', 'toast', 'wedding speech', 'graduation', 'best man', 'maid of honor', 'opening remarks', 'closing remarks', 'keynote speech'],
      tone: 'warm and personal',
      format: 'Start with a hook. Include personal anecdotes. Build to an emotional moment. End memorably.'
    },
    report: {
      keywords: ['report', 'document', 'documentation', 'white paper', 'case study', 'analysis report', 'business report', 'findings'],
      tone: 'formal and structured',
      format: 'Use clear sections with headings. Include executive summary. Support claims with data. Be objective.'
    },
  
    // ── WORK ──
    resume: {
      keywords: ['resume', 'cv', 'job application', 'cover letter', 'hiring', 'apply', 'job description', 'linkedin profile', 'portfolio', 'career'],
      tone: 'professional and results-driven',
      format: 'Use action verbs and quantify achievements. Tailor to the specific role. Use XYZ format where possible.'
    },
    plan: {
      keywords: ['plan', 'strategy', 'roadmap', 'schedule', 'timeline', 'project plan', 'organize', 'steps to', 'how to start', 'action plan', 'milestone'],
      tone: 'structured and actionable',
      format: 'Break into phases or steps. Include timelines and priorities. Be specific and practical.'
    },
    proposal: {
      keywords: ['proposal', 'pitch', 'business plan', 'project proposal', 'bid', 'rfp', 'business case', 'investment'],
      tone: 'persuasive and professional',
      format: 'Lead with the problem. Present the solution clearly. Include costs, timeline, and expected outcomes.'
    },
    meeting: {
      keywords: ['meeting', 'agenda', 'minutes', 'meeting notes', 'standup', 'recap', 'action items', 'follow up meeting'],
      tone: 'clear and concise',
      format: 'Use bullet points. List attendees, decisions made, and action items with owners and deadlines.'
    },
  
    // ── TECHNICAL ──
    code: {
      keywords: ['code', 'function', 'bug', 'fix', 'debug', 'implement', 'build', 'error', 'crash', 'component', 'api', 'database', 'deploy', 'test', 'refactor', 'algorithm', 'frontend', 'backend', 'fullstack', 'react', 'python', 'javascript', 'html', 'css', 'node', 'sql query'],
      tone: 'technical and direct',
      format: 'Include code examples. Be specific about the tech stack. Explain the reasoning behind the approach.'
    },
    data: {
      keywords: ['analyze', 'data', 'chart', 'graph', 'statistics', 'numbers', 'metrics', 'dashboard', 'excel', 'csv', 'sql', 'spreadsheet', 'pivot', 'visualization', 'trend'],
      tone: 'analytical and precise',
      format: 'Be specific about what to analyze. Suggest visualization types. Include methodology.'
    },
  
    // ── LEARNING ──
    explain: {
      keywords: ['explain', 'how does', 'what is', 'teach', 'describe', 'understand', 'meaning', 'difference between', 'why does', 'how do', 'tutorial', 'guide', 'learn'],
      tone: 'clear and accessible',
      format: 'Use analogies and examples. Break complex ideas into simple steps. Build from basics to advanced.'
    },
    compare: {
      keywords: ['compare', 'versus', 'vs', 'difference', 'better', 'which one', 'pros and cons', 'choose between', 'advantages'],
      tone: 'balanced and analytical',
      format: 'Present both sides fairly. Use clear criteria. Give a recommendation with reasoning.'
    },
    research: {
      keywords: ['research', 'find out', 'look up', 'investigate', 'study', 'deep dive', 'what do we know', 'evidence', 'sources'],
      tone: 'thorough and factual',
      format: 'Cover multiple perspectives. Cite types of sources. Distinguish facts from opinions. Note any controversies.'
    },
  
    // ── CREATIVE AND FUN ──
    brainstorm: {
      keywords: ['brainstorm', 'ideas', 'suggest', 'creative', 'options', 'alternatives', 'what could', 'help me think', 'come up with', 'generate ideas'],
      tone: 'open and exploratory',
      format: 'Generate diverse and unexpected ideas. Think outside the box. Mix practical with wild.'
    },
    caption: {
      keywords: ['caption', 'instagram caption', 'photo caption', 'witty', 'funny caption', 'clever', 'one liner', 'punchline', 'quirky'],
      tone: 'witty, fun, and personality-driven',
      format: 'Keep it short and punchy. Match the vibe of the photo or moment. Be original, not generic. Add personality.'
    },
    social: {
      keywords: ['tweet', 'post', 'linkedin post', 'twitter', 'social media', 'hashtag', 'thread', 'viral', 'tiktok', 'reel', 'x post'],
      tone: 'engaging and platform-appropriate',
      format: 'Match the platform style and character limits. Be attention-grabbing. Use hooks.'
    },
    naming: {
      keywords: ['name', 'brand name', 'company name', 'product name', 'username', 'title', 'headline', 'tagline', 'slogan', 'domain name'],
      tone: 'creative and memorable',
      format: 'Generate multiple options. Consider sound, meaning, and availability. Mix styles: playful, professional, abstract.'
    },
    rewrite: {
      keywords: ['make it', 'rewrite', 'rephrase', 'make this', 'tone change', 'funnier', 'more professional', 'more casual', 'quirky', 'sarcastic', 'formal', 'informal', 'simpler', 'shorter', 'longer', 'improve this', 'polish this', 'refine this', 'clean up', 'better version', 'enhance this', 'fix this message', 'improve my','make it', 'rewrite', 'rephrase', 'make this', 'tone change', 'funnier', 'more professional', 'more casual', 'quirky', 'sarcastic', 'formal', 'informal', 'simpler', 'shorter', 'longer'],
      tone: 'matching the requested style change',
      format: 'Keep the original meaning. Transform only the style, tone, or length as requested.'
    },
  
    // ── EDITING ──
    review: {
      keywords: ['review', 'feedback', 'critique', 'proofread', 'check', 'improve', 'edit', 'revise', 'grammar', 'spelling'],
      tone: 'constructive and specific',
      format: 'Point out what works and what needs improvement. Give specific actionable suggestions with examples.'
    },
    translate: {
      keywords: ['translate', 'translation', 'convert to', 'in spanish', 'in french', 'in hindi', 'in german', 'in japanese', 'in chinese', 'in arabic', 'language', 'localize'],
      tone: 'accurate and culturally appropriate',
      format: 'Preserve the original meaning and tone. Note cultural nuances. Provide transliteration if helpful.'
    },
    summary: {
      keywords: ['summarize', 'summary', 'tldr', 'recap', 'brief', 'key points', 'shorten', 'condense', 'cliff notes', 'overview'],
      tone: 'neutral and concise',
      format: 'Focus on the most important information. Cut the fluff. Be brief but complete.'
    },
  
    // ── DAILY LIFE ──
    recipe: {
      keywords: ['recipe', 'cook', 'bake', 'meal', 'dish', 'ingredients', 'dinner', 'lunch', 'breakfast', 'food', 'meal prep'],
      tone: 'friendly and practical',
      format: 'List ingredients clearly. Give step-by-step instructions. Include timing, servings, and helpful tips.'
    },
    travel: {
      keywords: ['travel', 'trip', 'itinerary', 'vacation', 'visit', 'things to do in', 'hotel', 'flight', 'destination', 'tourist', 'backpacking'],
      tone: 'enthusiastic and knowledgeable',
      format: 'Include specific places, times, and local tips. Consider budget and logistics. Organize by day or area.'
    },
    advice: {
      keywords: ['advice', 'should i', 'what would you', 'help me decide', 'opinion', 'guidance', 'recommend', 'suggestion', 'tips for', 'best way to'],
      tone: 'thoughtful and balanced',
      format: 'Consider multiple angles. Be honest about tradeoffs. Give a clear recommendation but respect their autonomy.'
    },
    complaint: {
      keywords: ['complaint', 'complain', 'refund', 'not working', 'bad service', 'return', 'disappointed', 'unacceptable', 'escalate', 'customer service'],
      tone: 'firm but professional',
      format: 'State the issue clearly. Include relevant details like dates and order numbers. Specify what resolution you want.'
    },
  
    // ── ACADEMIC ──
    math: {
      keywords: ['math', 'calculate', 'equation', 'formula', 'solve', 'algebra', 'calculus', 'geometry', 'probability', 'statistics', 'proof', 'derivative', 'integral', 'percentage', 'fraction'],
      tone: 'precise and step-by-step',
      format: 'Show every step of the work. Explain the reasoning behind each step. Verify the answer. Use proper notation.'
    },
    science: {
      keywords: ['science', 'physics', 'chemistry', 'biology', 'experiment', 'hypothesis', 'molecule', 'atom', 'cell', 'evolution', 'gravity', 'quantum', 'reaction', 'organism', 'ecosystem'],
      tone: 'accurate and educational',
      format: 'Use proper scientific terminology. Explain concepts clearly. Include real-world examples. Distinguish between established facts and theories.'
    },
    homework: {
      keywords: ['homework', 'assignment', 'classwork', 'worksheet', 'exam prep', 'study guide', 'quiz', 'test prep', 'practice problems', 'coursework'],
      tone: 'educational and supportive',
      format: 'Help understand the concept, dont just give answers. Show the method. Include practice examples. Explain common mistakes.'
    },
  
    // ── IMAGE AND DESIGN ──
    image: {
      keywords: ['image', 'generate image', 'picture', 'illustration', 'draw', 'create image', 'midjourney', 'dall-e', 'stable diffusion', 'ai art', 'generate a', 'visual', 'artwork', 'graphic'],
      tone: 'descriptive and visually specific',
      format: 'Be extremely detailed about style, mood, lighting, colors, composition, camera angle, and artistic medium. Specify what to include and exclude.'
    },
    design: {
      keywords: ['design', 'ui', 'ux', 'wireframe', 'mockup', 'layout', 'logo', 'brand', 'color scheme', 'typography', 'figma', 'canva', 'poster', 'flyer', 'banner'],
      tone: 'creative and detail-oriented',
      format: 'Specify dimensions, colors, fonts, and layout. Reference design styles or inspirations. Consider the target audience.'
    },
  
    // ── FALLBACK ──
    general: {
      keywords: [],
      tone: 'helpful and clear',
      format: 'Be thorough but concise. Use natural language. Structure the response logically.'
    }
  };
  
  // Part 2: Detect what type of task the user is asking for

function detectTaskType(text) {
    var lowerText = text.toLowerCase();
  
    var bestMatch = 'general';
    var bestScore = 0;
  
    var taskNames = Object.keys(TASK_TYPES);
  
    for (var i = 0; i < taskNames.length; i++) {
      var taskName = taskNames[i];
      var task = TASK_TYPES[taskName];
      var score = 0;
  
      for (var j = 0; j < task.keywords.length; j++) {
        var keyword = task.keywords[j];
  
        if (lowerText.indexOf(keyword) !== -1) {
          score = score + keyword.length;
        }
      }
  
      if (score > bestScore) {
        bestScore = score;
        bestMatch = taskName;
      }
    }
  
    console.log('PromptEnhancer: Detected task type:', bestMatch, '(score:', bestScore + ')');
    return bestMatch;
  }

  // Part 3: Detect audience and build the enhanced prompt

function detectAudience(text) {
    var lowerText = text.toLowerCase();
  
    if (lowerText.indexOf('boss') !== -1 || lowerText.indexOf('manager') !== -1 || lowerText.indexOf('director') !== -1 || lowerText.indexOf('ceo') !== -1 || lowerText.indexOf('cto') !== -1 || lowerText.indexOf('cfo') !== -1 || lowerText.indexOf('supervisor') !== -1 || lowerText.indexOf('lead') !== -1 || lowerText.indexOf('head of') !== -1 || lowerText.indexOf('vp') !== -1 || lowerText.indexOf('vice president') !== -1 || lowerText.indexOf('president') !== -1 || lowerText.indexOf('founder') !== -1 || lowerText.indexOf('executive') !== -1 || lowerText.indexOf('principal') !== -1 || lowerText.indexOf('dean') !== -1 || lowerText.indexOf('professor') !== -1 || lowerText.indexOf('teacher') !== -1 || lowerText.indexOf('instructor') !== -1 || lowerText.indexOf('advisor') !== -1 || lowerText.indexOf('mentor') !== -1 || lowerText.indexOf('senior') !== -1 || lowerText.indexOf('hr') !== -1 || lowerText.indexOf('recruiter') !== -1 || lowerText.indexOf('hiring manager') !== -1 || lowerText.indexOf('interviewer') !== -1 || lowerText.indexOf('landlord') !== -1 || lowerText.indexOf('judge') !== -1 || lowerText.indexOf('officer') !== -1 || lowerText.indexOf('doctor') !== -1 || lowerText.indexOf('lawyer') !== -1) {
      return 'senior';
    }
  
    if (lowerText.indexOf('client') !== -1 || lowerText.indexOf('customer') !== -1 || lowerText.indexOf('vendor') !== -1 || lowerText.indexOf('stakeholder') !== -1 || lowerText.indexOf('investor') !== -1 || lowerText.indexOf('sponsor') !== -1 || lowerText.indexOf('contractor') !== -1 || lowerText.indexOf('freelancer') !== -1 || lowerText.indexOf('agency') !== -1 || lowerText.indexOf('supplier') !== -1 || lowerText.indexOf('consultant') !== -1) {
      return 'external';
    }
  
    if (lowerText.indexOf('team') !== -1 || lowerText.indexOf('colleague') !== -1 || lowerText.indexOf('coworker') !== -1 || lowerText.indexOf('peer') !== -1 || lowerText.indexOf('classmate') !== -1 || lowerText.indexOf('roommate') !== -1 || lowerText.indexOf('ta ') !== -1 || lowerText.indexOf('ra ') !== -1 || lowerText.indexOf('lab partner') !== -1 || lowerText.indexOf('teammate') !== -1 || lowerText.indexOf('cohort') !== -1 || lowerText.indexOf('batch mate') !== -1) {
      return 'peer';
    }
  
    if (lowerText.indexOf('friend') !== -1 || lowerText.indexOf('buddy') !== -1 || lowerText.indexOf('bro') !== -1 || lowerText.indexOf('mom') !== -1 || lowerText.indexOf('dad') !== -1 || lowerText.indexOf('family') !== -1 || lowerText.indexOf('sister') !== -1 || lowerText.indexOf('brother') !== -1 || lowerText.indexOf('wife') !== -1 || lowerText.indexOf('husband') !== -1 || lowerText.indexOf('girlfriend') !== -1 || lowerText.indexOf('boyfriend') !== -1 || lowerText.indexOf('cousin') !== -1 || lowerText.indexOf('uncle') !== -1 || lowerText.indexOf('aunt') !== -1 || lowerText.indexOf('grandma') !== -1 || lowerText.indexOf('grandpa') !== -1 || lowerText.indexOf('neighbor') !== -1 || lowerText.indexOf('crush') !== -1) {
      return 'personal';
    }
  
    if (lowerText.indexOf('intern') !== -1 || lowerText.indexOf('report') !== -1 || lowerText.indexOf('junior') !== -1 || lowerText.indexOf('mentee') !== -1 || lowerText.indexOf('student') !== -1 || lowerText.indexOf('trainee') !== -1 || lowerText.indexOf('new hire') !== -1 || lowerText.indexOf('fresher') !== -1) {
      return 'subordinate';
    }
  
    return 'unknown';
  }
  
  function buildEnhancedPrompt(text, taskType, persona) {
    var task = TASK_TYPES[taskType];
    var audience = detectAudience(text);
  
    // Build audience instruction
    var audienceInstruction = '';
    if (audience === 'senior') {
      audienceInstruction = 'The recipient is someone in a position of authority (manager, professor, executive, etc.). Be respectful, professional, and polite. Do not be overly casual.';
    } else if (audience === 'external') {
      audienceInstruction = 'The recipient is an external professional contact (client, customer, investor, etc.). Be formal, helpful, and represent yourself professionally.';
    } else if (audience === 'peer') {
      audienceInstruction = 'The recipient is a colleague, classmate, or peer. Be friendly, direct, and collaborative.';
    } else if (audience === 'personal') {
      audienceInstruction = 'The recipient is a friend or family member. Be warm, casual, and genuine.';
    } else if (audience === 'subordinate') {
      audienceInstruction = 'The recipient is someone junior (intern, trainee, mentee, etc.). Be encouraging, clear, and supportive without being condescending.';
    }
  
    // Build persona section
    var personaSection = '';
    if (persona) {
     if (persona.name) {
      personaSection = personaSection + 'You are helping ' + persona.name;
      if (persona.role) personaSection = personaSection + ', a ' + persona.role;
      if (persona.company) personaSection = personaSection + ' at ' + persona.company;
      personaSection = personaSection + '.\n';
     }
     if (persona.instructions) {
      personaSection = personaSection + 'ADDITIONAL CONTEXT: ' + persona.instructions + '\n';
     }
    personaSection = personaSection + '\n';
    }
    // Build context section from chat history
    // Remind the chat AI to use conversation context
    var contextSection = '\n\nIf this is part of an ongoing conversation, refer to the previous messages above for full context. Apply any relevant details like project names, tech stack, names, preferences, or constraints that were mentioned earlier.';
  
    // Humanization instructions for writing tasks
    var humanize = '\n\nCRITICAL WRITING RULES: Write like a real human, not like AI. Vary your sentence lengths — mix short punchy sentences with longer flowing ones. Use contractions naturally (dont, cant, Im). Never use these AI cliches: "I hope this finds you well", "Furthermore", "Moreover", "In conclusion", "It is worth noting", "Delve", "Leverage", "Utilize", "Firstly", "Secondly", "In todays world", "It goes without saying". Never start more than one paragraph with "I". Never use exclamation marks excessively. The writing should feel like a thoughtful person wrote it, not a language model.';
  
    // File attachment awareness
    var fileAwareness = '\n\nIf I have attached any files, documents, or images, use them as the primary source of information and reference them directly in your response.';
  
    var enhanced = '';
  
    // ── COMMUNICATION ──
  
    if (taskType === 'email') {
      enhanced = 'You are an expert email writer who crafts concise, natural emails that sound genuinely human.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Write a clear subject line that summarizes the purpose.\n';
      enhanced = enhanced + '- Get to the point in the first sentence — no filler openings.\n';
      enhanced = enhanced + '- Keep it concise: 3-5 sentences for simple requests, no more than 2 short paragraphs for complex ones.\n';
      enhanced = enhanced + '- End with a clear next step or call to action.\n';
      enhanced = enhanced + '- Use a natural sign-off that matches the relationship.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'reply') {
      enhanced = 'You are an expert communicator who writes natural, thoughtful replies.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Match the tone and energy of the original message.\n';
      enhanced = enhanced + '- Address every point raised in the original message.\n';
      enhanced = enhanced + '- Keep a similar length — dont write a novel in response to a short message.\n';
      enhanced = enhanced + '- Be direct and genuine, not formulaic.\n';
      enhanced = enhanced + '- If the original message asked questions, answer each one clearly.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'presentation') {
      enhanced = 'You are an expert presentation designer and storytelling specialist.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Structure with a clear narrative arc: hook, problem, solution, evidence, conclusion.\n';
      enhanced = enhanced + '- Write concise bullet points for each slide — no paragraphs on slides.\n';
      enhanced = enhanced + '- Include speaker notes with what to say for each slide.\n';
      enhanced = enhanced + '- Suggest visual elements: charts, diagrams, images for each slide.\n';
      enhanced = enhanced + '- Aim for the 10-20-30 rule: ~10 slides, ~20 minutes, 30pt font minimum.\n';
      enhanced = enhanced + '- Start with an attention-grabbing opening slide.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'message') {
      enhanced = 'You are a communication expert who writes natural, concise messages.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Keep it short — this is a chat message, not an email.\n';
      enhanced = enhanced + '- Match the platform style (Slack is more casual, Teams can be slightly more formal).\n';
      enhanced = enhanced + '- Get to the point immediately.\n';
      enhanced = enhanced + '- Use a natural, conversational tone.\n';
      enhanced = enhanced + '- If asking for something, make the request crystal clear.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    // ── WRITING ──
  
    else if (taskType === 'essay') {
      enhanced = 'You are an expert writer who creates compelling, well-structured essays that read as genuinely human-written.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start with a hook that grabs attention — a surprising fact, a question, or a bold statement.\n';
      enhanced = enhanced + '- Build your argument with specific examples, data, and evidence.\n';
      enhanced = enhanced + '- Use transitions that flow naturally between paragraphs.\n';
      enhanced = enhanced + '- Include counterarguments and address them thoughtfully.\n';
      enhanced = enhanced + '- End with a thought-provoking conclusion, not a generic summary.\n';
      enhanced = enhanced + '- Vary paragraph lengths — some short for impact, some longer for depth.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'blog') {
      enhanced = 'You are a successful blogger and content strategist who writes engaging, shareable posts.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Write a headline that makes people want to click.\n';
      enhanced = enhanced + '- Hook the reader in the first 2 sentences — if they are bored, they leave.\n';
      enhanced = enhanced + '- Use subheadings to break up the text and make it scannable.\n';
      enhanced = enhanced + '- Write like you talk — conversational, not academic.\n';
      enhanced = enhanced + '- Include practical takeaways the reader can act on.\n';
      enhanced = enhanced + '- End with a call to action: comment, share, subscribe, or try something.\n';
      enhanced = enhanced + '- Aim for 800-1500 words unless I specify otherwise.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'story') {
      enhanced = 'You are a talented fiction writer and storyteller.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Show, dont tell — use actions, dialogue, and sensory details instead of exposition.\n';
      enhanced = enhanced + '- Create vivid characters with distinct voices and motivations.\n';
      enhanced = enhanced + '- Build tension and conflict — every scene needs stakes.\n';
      enhanced = enhanced + '- Use specific, concrete details instead of vague descriptions.\n';
      enhanced = enhanced + '- Write dialogue that sounds like real people talking, not speeches.\n';
      enhanced = enhanced + '- Create a satisfying arc: setup, rising action, climax, resolution.\n';
      enhanced = enhanced + '- Engage multiple senses: sight, sound, smell, touch, taste.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'speech') {
      enhanced = 'You are an expert speechwriter who creates memorable, heartfelt speeches.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start with a strong hook: a story, a joke, or a powerful statement.\n';
      enhanced = enhanced + '- Include 2-3 personal anecdotes that are specific and relatable.\n';
      enhanced = enhanced + '- Write for the ear, not the eye — use short sentences, natural pauses, and rhythm.\n';
      enhanced = enhanced + '- Build to an emotional peak, then land with a memorable closing line.\n';
      enhanced = enhanced + '- Include timing notes (aim for the appropriate length for the occasion).\n';
      enhanced = enhanced + '- Write it so it sounds natural when spoken aloud, not like reading a document.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'report') {
      enhanced = 'You are an expert business writer and analyst who produces clear, professional reports.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start with an executive summary that covers the key findings in 3-4 sentences.\n';
      enhanced = enhanced + '- Use clear section headings and logical organization.\n';
      enhanced = enhanced + '- Support every claim with data, evidence, or specific examples.\n';
      enhanced = enhanced + '- Include actionable recommendations, not just observations.\n';
      enhanced = enhanced + '- Use charts, tables, or bullet points where they improve clarity.\n';
      enhanced = enhanced + '- End with clear next steps and who is responsible for each.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    // ── WORK ──
  
    else if (taskType === 'resume') {
      enhanced = 'You are an expert resume writer and career coach who specializes in getting candidates hired at top companies.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '1. ANALYSIS: Compare the resume against the job description. Identify what aligns well, what is missing, and where improvements are needed.\n';
      enhanced = enhanced + '2. REWRITE: Rewrite the resume tailored to the specific role. Follow these rules:\n';
      enhanced = enhanced + '   - Use the XYZ format for bullet points: "Accomplished [X] as measured by [Y] by doing [Z]"\n';
      enhanced = enhanced + '   - Quantify results with numbers, percentages, dollar amounts, or scale wherever possible\n';
      enhanced = enhanced + '   - Mirror keywords and phrases from the job description\n';
      enhanced = enhanced + '   - Use strong, active past tense verbs\n';
      enhanced = enhanced + '   - Keep it concise — every word should earn its place\n';
      enhanced = enhanced + '3. GAPS AND SUGGESTIONS: List any skill or experience gaps between the resume and the job description, and suggest how to address each one through the cover letter, interview talking points, or reframing existing experience.\n';
      enhanced = enhanced + '4. PROFESSIONAL SUMMARY: Write 2 versions of a professional summary tailored to this role — one confident and results-driven, one more collaborative and team-focused.\n\n';
      enhanced = enhanced + 'Format the output with clear section headers so I can easily navigate it.\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'plan') {
      enhanced = 'You are an experienced project manager and strategic planner.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Break the plan into clear phases with specific milestones.\n';
      enhanced = enhanced + '- Include estimated timelines for each phase.\n';
      enhanced = enhanced + '- List specific action items, not vague goals.\n';
      enhanced = enhanced + '- Identify potential risks and how to mitigate them.\n';
      enhanced = enhanced + '- Prioritize: what must happen first vs what can wait.\n';
      enhanced = enhanced + '- Include resource requirements and cost estimates where relevant.\n';
      enhanced = enhanced + '- Define clear success criteria — how will you know each phase is done.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'proposal') {
      enhanced = 'You are an expert business strategist who writes compelling, winning proposals.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Lead with the problem or opportunity — make the reader care immediately.\n';
      enhanced = enhanced + '- Present the solution clearly with specific deliverables.\n';
      enhanced = enhanced + '- Include a realistic timeline with key milestones.\n';
      enhanced = enhanced + '- Provide cost estimates or pricing tiers.\n';
      enhanced = enhanced + '- Address potential objections proactively.\n';
      enhanced = enhanced + '- Include relevant case studies, credentials, or social proof.\n';
      enhanced = enhanced + '- End with clear next steps and a compelling call to action.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'meeting') {
      enhanced = 'You are an expert meeting facilitator and note-taker.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Use clear bullet points for easy scanning.\n';
      enhanced = enhanced + '- Include: attendees, date/time, key discussion points.\n';
      enhanced = enhanced + '- List every decision that was made with clear ownership.\n';
      enhanced = enhanced + '- List action items with: what needs to be done, who owns it, and the deadline.\n';
      enhanced = enhanced + '- Note any open questions or items that need follow-up.\n';
      enhanced = enhanced + '- Keep it concise — meeting notes should be quick to read.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    // ── TECHNICAL ──
  
    else if (taskType === 'code') {
      enhanced = 'You are a senior software engineer and expert debugger.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Identify the root cause before jumping to solutions.\n';
      enhanced = enhanced + '- Provide working, tested code with clear comments explaining the logic.\n';
      enhanced = enhanced + '- Consider edge cases and error handling.\n';
      enhanced = enhanced + '- If the tech stack or framework is mentioned in our conversation, use that specifically.\n';
      enhanced = enhanced + '- Keep existing functionality intact — only modify what is necessary.\n';
      enhanced = enhanced + '- Explain WHY the solution works, not just what to do.\n';
      enhanced = enhanced + '- If there are multiple approaches, briefly mention the tradeoffs.\n';
      enhanced = enhanced + '- Follow best practices and coding conventions for the relevant language.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'data') {
      enhanced = 'You are a senior data analyst and visualization expert.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start by understanding the data structure and what questions we are trying to answer.\n';
      enhanced = enhanced + '- Clean and validate the data before analyzing — note any issues found.\n';
      enhanced = enhanced + '- Use appropriate statistical methods and explain why you chose them.\n';
      enhanced = enhanced + '- Suggest the best visualization types for each finding.\n';
      enhanced = enhanced + '- Highlight key insights, trends, outliers, and anomalies.\n';
      enhanced = enhanced + '- Provide actionable conclusions, not just observations.\n';
      enhanced = enhanced + '- Include the actual code (Python/SQL/Excel formulas) for the analysis.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    // ── LEARNING ──
  
    else if (taskType === 'explain') {
      enhanced = 'You are an expert teacher who explains complex topics in simple, intuitive ways.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start with a simple one-sentence explanation a 10-year-old would understand.\n';
      enhanced = enhanced + '- Then build up to the full detailed explanation layer by layer.\n';
      enhanced = enhanced + '- Use at least 2 real-world analogies to make abstract concepts concrete.\n';
      enhanced = enhanced + '- Include specific examples that illustrate the concept in action.\n';
      enhanced = enhanced + '- Address common misconceptions about the topic.\n';
      enhanced = enhanced + '- If relevant, explain why this matters — what is the practical application.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'compare') {
      enhanced = 'You are an expert analyst who provides balanced, thorough comparisons.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Define clear comparison criteria upfront.\n';
      enhanced = enhanced + '- Present pros and cons for each option fairly and specifically.\n';
      enhanced = enhanced + '- Include real-world use cases and scenarios for each option.\n';
      enhanced = enhanced + '- Use a comparison table or matrix for easy scanning.\n';
      enhanced = enhanced + '- Consider: cost, performance, ease of use, scalability, community, and long-term viability.\n';
      enhanced = enhanced + '- Give your clear recommendation at the end with specific reasoning.\n';
      enhanced = enhanced + '- If I have mentioned specific needs or context in our conversation, factor those into the recommendation.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'research') {
      enhanced = 'You are a thorough researcher and knowledge synthesizer.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Cover the topic comprehensively from multiple angles and perspectives.\n';
      enhanced = enhanced + '- Distinguish between established facts, expert opinions, and emerging theories.\n';
      enhanced = enhanced + '- Note any controversies, debates, or areas of uncertainty.\n';
      enhanced = enhanced + '- Include key statistics, studies, or data points where relevant.\n';
      enhanced = enhanced + '- Organize findings logically with clear sections.\n';
      enhanced = enhanced + '- Suggest further reading or resources for deeper exploration.\n';
      enhanced = enhanced + '- Note the recency of information — flag anything that may be outdated.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    // ── CREATIVE AND FUN ──
  
    else if (taskType === 'brainstorm') {
      enhanced = 'You are a creative director and innovation consultant.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Generate at least 10 diverse ideas ranging from safe to wild.\n';
      enhanced = enhanced + '- Think across different categories: conventional, unconventional, combined, inverted.\n';
      enhanced = enhanced + '- For each idea, include a one-line explanation of why it could work.\n';
      enhanced = enhanced + '- Dont self-censor — include some deliberately bold or unusual ideas.\n';
      enhanced = enhanced + '- Group ideas by theme or approach if natural.\n';
      enhanced = enhanced + '- Highlight your top 3 picks and explain why.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'caption') {
      enhanced = 'You are a social media expert who writes viral, personality-driven captions.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Give me 5-7 caption options ranging from witty to heartfelt to bold.\n';
      enhanced = enhanced + '- Keep each one short and punchy — under 2 lines max.\n';
      enhanced = enhanced + '- Make them sound like a real person with personality, not a brand or AI.\n';
      enhanced = enhanced + '- Include subtle humor, clever wordplay, or unexpected angles.\n';
      enhanced = enhanced + '- No generic captions like "Living my best life" or "Grateful for moments like these."\n';
      enhanced = enhanced + '- Suggest 2-3 relevant hashtags per caption if appropriate.\n';
      enhanced = enhanced + '- Label each option with a vibe tag: (witty), (bold), (heartfelt), (quirky), (minimal).\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'social') {
      enhanced = 'You are a social media strategist who creates engaging, platform-optimized content.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Match the style and conventions of the specific platform mentioned.\n';
      enhanced = enhanced + '- Start with a hook that stops the scroll.\n';
      enhanced = enhanced + '- Keep within character limits if applicable (Twitter/X: 280 chars, LinkedIn: 3000 chars).\n';
      enhanced = enhanced + '- Sound authentic and human, not corporate or AI-generated.\n';
      enhanced = enhanced + '- Include a call to action if appropriate.\n';
      enhanced = enhanced + '- Suggest hashtags only if the platform uses them.\n';
      enhanced = enhanced + '- Provide 2-3 variations with different angles.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'naming') {
      enhanced = 'You are a branding expert and naming specialist.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Generate 15-20 name options across different styles: descriptive, abstract, playful, professional, compound words, invented words.\n';
      enhanced = enhanced + '- For each name, include a one-line rationale for why it works.\n';
      enhanced = enhanced + '- Consider: memorability, pronunciation ease, spelling simplicity, domain availability potential.\n';
      enhanced = enhanced + '- Avoid names that are too similar to existing well-known brands.\n';
      enhanced = enhanced + '- Group options by style or vibe.\n';
      enhanced = enhanced + '- Highlight your top 5 picks and explain why they stand out.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
   else if (taskType === 'rewrite') {
    enhanced = 'You are an expert editor who refines and transforms writing while preserving the authors original voice.\n\n';
    enhanced = enhanced + 'TASK: ' + text + '\n\n';
    if (audienceInstruction) {
      enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
    }
    enhanced = enhanced + 'INSTRUCTIONS:\n';
    enhanced = enhanced + '- The user has provided their OWN text that they wrote. Respect their voice and intent.\n';
    enhanced = enhanced + '- Do NOT rewrite from scratch — refine and enhance what they already have.\n';
    enhanced = enhanced + '- Keep their key points, structure, and personal style intact.\n';
    enhanced = enhanced + '- Fix grammar, clarity, and flow issues without making it sound like a different person wrote it.\n';
    enhanced = enhanced + '- If a specific tone is requested (more professional, more casual, funnier, etc.), adjust the tone while keeping the core message.\n';
    enhanced = enhanced + '- If the audience is specified (senior, client, friend), adjust formality and politeness to match.\n';
    enhanced = enhanced + '- If making it shorter, preserve the most important points and cut only filler.\n';
    enhanced = enhanced + '- If making it longer, add depth and detail without padding.\n';
    enhanced = enhanced + '- Show the improved version first, then briefly list what you changed and why.\n\n';
    enhanced = enhanced + 'TONE: ' + task.tone + '\n';
    enhanced = enhanced + 'FORMAT: ' + task.format;
    enhanced = enhanced + humanize;
    enhanced = enhanced + fileAwareness;
    enhanced = enhanced + contextSection;
  }
  
    // ── EDITING ──
  
    else if (taskType === 'review') {
      enhanced = 'You are an expert editor and writing coach who gives honest, actionable feedback.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start with what works well — acknowledge the strengths.\n';
      enhanced = enhanced + '- Then identify specific areas that need improvement.\n';
      enhanced = enhanced + '- For each issue, provide a concrete example of how to fix it.\n';
      enhanced = enhanced + '- Check for: clarity, grammar, tone consistency, logical flow, redundancy.\n';
      enhanced = enhanced + '- Rate the overall quality (weak/fair/good/strong/excellent) with justification.\n';
      enhanced = enhanced + '- Provide a revised version with your suggested changes applied.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'translate') {
      enhanced = 'You are an expert translator and linguistics specialist.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Provide an accurate translation that preserves the original meaning, tone, and intent.\n';
      enhanced = enhanced + '- Note any cultural nuances or phrases that dont translate directly.\n';
      enhanced = enhanced + '- If the text has idioms or slang, provide the cultural equivalent rather than a literal translation.\n';
      enhanced = enhanced + '- Include transliteration (pronunciation guide) if the target language uses a different script.\n';
      enhanced = enhanced + '- If multiple valid translations exist, show the most common one and mention alternatives.\n';
      enhanced = enhanced + '- Flag any words or phrases where context could change the translation.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'summary') {
      enhanced = 'You are an expert at distilling complex information into clear, concise summaries.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Start with a one-sentence TL;DR that captures the core point.\n';
      enhanced = enhanced + '- Follow with 3-5 key takeaways as bullet points.\n';
      enhanced = enhanced + '- Include any critical numbers, dates, or facts.\n';
      enhanced = enhanced + '- Note what was omitted from the summary in case the reader wants more detail.\n';
      enhanced = enhanced + '- Keep the summary to 20% or less of the original length.\n';
      enhanced = enhanced + '- Maintain the original tone and intent without editorializing.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    // ── DAILY LIFE ──
  
    else if (taskType === 'recipe') {
      enhanced = 'You are a professional chef and recipe developer.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- List all ingredients with exact measurements, grouped by component if the recipe has multiple parts.\n';
      enhanced = enhanced + '- Provide clear step-by-step instructions that a beginner could follow.\n';
      enhanced = enhanced + '- Include prep time, active cook time, total time, and serving size.\n';
      enhanced = enhanced + '- Add pro tips for better results at critical steps.\n';
      enhanced = enhanced + '- Note difficulty level (easy/medium/hard).\n';
      enhanced = enhanced + '- Suggest common substitutions for dietary restrictions (vegetarian, gluten-free, dairy-free).\n';
      enhanced = enhanced + '- Include storage instructions and how long leftovers last.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'travel') {
      enhanced = 'You are an experienced travel advisor and local expert.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Include specific place names, areas, and approximate costs in local currency.\n';
      enhanced = enhanced + '- Share insider tips that only locals or experienced travelers would know.\n';
      enhanced = enhanced + '- Organize by day or by area for easy navigation.\n';
      enhanced = enhanced + '- Include practical logistics: how to get between spots, best times to visit, booking tips.\n';
      enhanced = enhanced + '- Mention what to avoid: tourist traps, scams, overpriced areas.\n';
      enhanced = enhanced + '- Consider budget level, weather, and season.\n';
      enhanced = enhanced + '- Suggest must-try local food and where to find it.\n';
      enhanced = enhanced + '- Include emergency info: local emergency number, nearest hospital, embassy location.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'advice') {
      enhanced = 'You are a thoughtful advisor who gives balanced, practical guidance.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Consider the situation from multiple angles before giving advice.\n';
      enhanced = enhanced + '- Be honest about tradeoffs — every option has downsides.\n';
      enhanced = enhanced + '- Give a clear recommendation but explain your reasoning so I can decide.\n';
      enhanced = enhanced + '- Include both short-term and long-term consequences.\n';
      enhanced = enhanced + '- Share relevant frameworks or mental models for thinking about this kind of decision.\n';
      enhanced = enhanced + '- If you need more context to give good advice, list the specific questions you need answered.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'complaint') {
      enhanced = 'You are an expert consumer advocate who writes effective, professional complaints.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- State the issue clearly and factually in the opening line.\n';
      enhanced = enhanced + '- Include all relevant details: dates, order numbers, names of people spoken to, amounts.\n';
      enhanced = enhanced + '- Describe what happened chronologically.\n';
      enhanced = enhanced + '- Reference any company policies, warranties, or consumer rights that apply.\n';
      enhanced = enhanced + '- Specify exactly what resolution you want (refund, replacement, apology, etc.).\n';
      enhanced = enhanced + '- Set a reasonable deadline for response.\n';
      enhanced = enhanced + '- Be firm but never rude — professional complaints get better results.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + humanize;
      enhanced = enhanced + contextSection;
    }
  
    // ── ACADEMIC ──
  
    else if (taskType === 'math') {
      enhanced = 'You are an expert mathematician and patient teacher.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Show every single step of the solution clearly.\n';
      enhanced = enhanced + '- Explain the reasoning behind each step in plain language.\n';
      enhanced = enhanced + '- Use proper mathematical notation and formatting.\n';
      enhanced = enhanced + '- Verify the answer by checking it or using an alternative method.\n';
      enhanced = enhanced + '- If there are multiple approaches, show the simplest one first, then mention alternatives.\n';
      enhanced = enhanced + '- If applicable, explain when and why this method is used in real life.\n';
      enhanced = enhanced + '- Highlight common mistakes students make with this type of problem.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'science') {
      enhanced = 'You are an expert scientist and engaging science communicator.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Use proper scientific terminology but always explain it in accessible terms.\n';
      enhanced = enhanced + '- Include real-world examples and practical applications.\n';
      enhanced = enhanced + '- Distinguish between established scientific consensus and ongoing research.\n';
      enhanced = enhanced + '- If relevant, include the historical context of how this knowledge was discovered.\n';
      enhanced = enhanced + '- Address common misconceptions about the topic.\n';
      enhanced = enhanced + '- Use diagrams or structured explanations for complex processes.\n';
      enhanced = enhanced + '- Connect the concept to everyday life where possible.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'homework') {
      enhanced = 'You are a patient, knowledgeable tutor who helps students truly understand concepts.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Help me understand the concept, dont just give the answer.\n';
      enhanced = enhanced + '- Explain the underlying method or principle first.\n';
      enhanced = enhanced + '- Walk through the solution step by step.\n';
      enhanced = enhanced + '- Include 1-2 similar practice problems I can try on my own.\n';
      enhanced = enhanced + '- Point out common mistakes and how to avoid them.\n';
      enhanced = enhanced + '- If the topic connects to other concepts I should know, mention them briefly.\n';
      enhanced = enhanced + '- Adjust the explanation to match my level based on how I asked the question.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    // ── IMAGE AND DESIGN ──
  
    else if (taskType === 'image') {
      enhanced = 'You are an expert AI art prompt engineer who creates detailed, vivid image generation prompts.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'Create a highly detailed image generation prompt that specifies:\n';
      enhanced = enhanced + '- SUBJECT: What is in the image, described precisely with specific details\n';
      enhanced = enhanced + '- STYLE: Art style and medium (oil painting, photograph, digital art, watercolor, 3D render, anime, etc.)\n';
      enhanced = enhanced + '- MOOD: The emotional feel and atmosphere (dramatic, serene, mysterious, joyful, etc.)\n';
      enhanced = enhanced + '- LIGHTING: Type, direction, and quality of light (golden hour, studio lighting, neon, moody, etc.)\n';
      enhanced = enhanced + '- COMPOSITION: Camera angle, framing, depth of field, perspective\n';
      enhanced = enhanced + '- COLORS: Dominant palette and color relationships\n';
      enhanced = enhanced + '- DETAILS: Textures, environment, background elements, small details that add richness\n';
      enhanced = enhanced + '- EXCLUDE: Things that should NOT appear in the image (negative prompt)\n';
      enhanced = enhanced + '- QUALITY TAGS: Include technical quality keywords like "highly detailed, 8k, professional"\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + contextSection;
    }
  
    else if (taskType === 'design') {
      enhanced = 'You are a senior UI/UX designer and creative director.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Specify exact dimensions, color codes (hex), and font choices.\n';
      enhanced = enhanced + '- Describe the layout structure: grid, hierarchy, spacing.\n';
      enhanced = enhanced + '- Reference specific design styles or inspirations.\n';
      enhanced = enhanced + '- Consider the target audience and what appeals to them visually.\n';
      enhanced = enhanced + '- Include accessibility considerations: contrast ratios, font sizes, color-blind friendly.\n';
      enhanced = enhanced + '- Suggest a visual hierarchy: what should the eye see first, second, third.\n';
      enhanced = enhanced + '- If this is a UI design, consider interaction patterns and user flow.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }
  
    // ── FALLBACK for any unmatched type ──
    else {
      enhanced = 'You are an expert assistant specialized in this type of task.\n\n';
      enhanced = enhanced + 'TASK: ' + text + '\n\n';
      if (audienceInstruction) {
        enhanced = enhanced + 'AUDIENCE: ' + audienceInstruction + '\n\n';
      }
      enhanced = enhanced + 'INSTRUCTIONS:\n';
      enhanced = enhanced + '- Be thorough, specific, and actionable.\n';
      enhanced = enhanced + '- Structure your response logically with clear sections.\n';
      enhanced = enhanced + '- Include specific examples where relevant.\n';
      enhanced = enhanced + '- Anticipate follow-up questions and address them proactively.\n\n';
      enhanced = enhanced + 'TONE: ' + task.tone + '\n';
      enhanced = enhanced + 'FORMAT: ' + task.format;
      if (taskType !== 'code' && taskType !== 'data' && taskType !== 'math' && taskType !== 'science') {
        enhanced = enhanced + humanize;
      }
      enhanced = enhanced + fileAwareness;
      enhanced = enhanced + contextSection;
    }

    // Add persona — only for task types where identity matters
    if (persona) {
      var identityTasks = ['email', 'reply', 'message', 'presentation', 'resume', 'plan', 'proposal', 'meeting', 'report', 'blog', 'speech', 'social', 'complaint'];
      var needsIdentity = false;
      for (var i = 0; i < identityTasks.length; i++) {
        if (taskType === identityTasks[i]) {
          needsIdentity = true;
          break;
        }
      }

      var personaText = '';

      if (needsIdentity && persona.name) {
        personaText = 'You are helping ' + persona.name;
        if (persona.role) personaText = personaText + ', a ' + persona.role;
        if (persona.company) personaText = personaText + ' at ' + persona.company;
        personaText = personaText + '.\n';
      }

      if (persona.instructions) {
        personaText = personaText + 'USER PREFERENCES: ' + persona.instructions + '\n';
      }

      if (personaText) {
        enhanced = personaText + '\n' + enhanced;
      }
    }
  
    return enhanced;
  }

 // Part 4: AI-powered enhancement using multiple providers
// Supports: Gemini, OpenAI, Claude, Ollama
// User provides their own API key, chooses their provider and model

var DEFAULT_MODELS = {
    gemini: 'gemini-2.0-flash',
    openai: 'gpt-4o-mini',
    claude: 'claude-sonnet-4-20250514',
    ollama: 'llama3'
  };
  
  function callGemini(systemPrompt, userMessage, apiKey, model, callback) {
    var modelName = model || DEFAULT_MODELS.gemini;
  
    var requestBody = {
      contents: [
        {
          parts: [
            { text: systemPrompt + '\n\n' + userMessage }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048
      }
    };
  
    var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + modelName + ':generateContent?key=' + apiKey;
  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
    .then(function(response) {
      if (!response.ok) {
        return response.json().then(function(errData) {
          throw new Error(errData.error ? errData.error.message : 'API returned status ' + response.status);
        });
      }
      return response.json();
    })
    .then(function(data) {
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
        callback(null, data.candidates[0].content.parts[0].text);
      } else {
        callback('No response generated. The model may have blocked the request.', null);
      }
    })
    .catch(function(error) {
      callback(error.message, null);
    });
  }
  
  function callOpenAI(systemPrompt, userMessage, apiKey, model, callback) {
    var modelName = model || DEFAULT_MODELS.openai;
  
    var requestBody = {
      model: modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 2048
    };
  
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(requestBody)
    })
    .then(function(response) {
      if (!response.ok) {
        return response.json().then(function(errData) {
          throw new Error(errData.error ? errData.error.message : 'API returned status ' + response.status);
        });
      }
      return response.json();
    })
    .then(function(data) {
      if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
        callback(null, data.choices[0].message.content);
      } else {
        callback('No response generated from OpenAI.', null);
      }
    })
    .catch(function(error) {
      callback(error.message, null);
    });
  }
  
  function callClaude(systemPrompt, userMessage, apiKey, model, callback) {
    var modelName = model || DEFAULT_MODELS.claude;
  
    var requestBody = {
      model: modelName,
      temperature: 0.7,
      max_tokens: 2048,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userMessage }
      ]
    };
  
    fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify(requestBody)
    })
    .then(function(response) {
      if (!response.ok) {
        return response.json().then(function(errData) {
          throw new Error(errData.error ? errData.error.message : 'API returned status ' + response.status);
        });
      }
      return response.json();
    })
    .then(function(data) {
      if (data.content && data.content[0] && data.content[0].text) {
        callback(null, data.content[0].text);
      } else {
        callback('No response generated from Claude.', null);
      }
    })
    .catch(function(error) {
      callback(error.message, null);
    });
  }
  
  function callOllama(systemPrompt, userMessage, serverUrl, model, callback) {
    var baseUrl = serverUrl || 'http://localhost:11434';
    var modelName = model || DEFAULT_MODELS.ollama;
  
    var requestBody = {
      model: modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      stream: false,
      options: {
        temperature: 0.7
      }
    };
  
    fetch(baseUrl + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Ollama server returned status ' + response.status + '. Make sure Ollama is running.');
      }
      return response.json();
    })
    .then(function(data) {
      if (data.message && data.message.content) {
        callback(null, data.message.content);
      } else {
        callback('No response from Ollama. Make sure the model is downloaded.', null);
      }
    })
    .catch(function(error) {
      callback(error.message, null);
    });
  }
  
  function getSystemPrompt() {
    var prompt = 'You are the worlds best prompt engineer. Your ONLY job is to take a short, vague, or lazy prompt from a user and transform it into the most detailed, effective, expert-level prompt possible that will get dramatically better results from any AI.\n\n';
    prompt = prompt + 'RULES:\n';
    prompt = prompt + '1. PRESERVE the users original intent completely — never change what they are asking for.\n';
    prompt = prompt + '2. ADD: expert role assignment, specific instructions, tone guidance, format requirements, and edge cases to consider.\n';
    prompt = prompt + '3. If the task involves writing (emails, essays, posts, messages, etc.), include humanization instructions: vary sentence lengths, use contractions naturally, avoid AI cliches like "Furthermore", "Moreover", "I hope this finds you well", "Delve", "Leverage", "Utilize", "In todays world".\n';
    prompt = prompt + '4. If there is conversation context provided, weave ALL relevant details into the enhanced prompt so the AI has full context without needing to re-read the conversation.\n';
    prompt = prompt + '5. If the prompt mentions or implies attached files (resume, document, image, spreadsheet, etc.), include instructions to use those files as the primary source of information.\n';
    prompt = prompt + '6. Detect who the audience is (boss, professor, client, friend, etc.) and adjust the tone and formality accordingly.\n';
    prompt = prompt + '7. If the user is asking to IMPROVE, REFINE, or POLISH existing text they wrote, instruct the AI to keep their voice and style — enhance what they have, do not rewrite from scratch.\n';
    prompt = prompt + '8. If the user mentions a specific company, role, platform, framework, or tool, include specific knowledge and best practices for that target.\n';
    prompt = prompt + '9. Output ONLY the enhanced prompt. No explanations, no meta-commentary, no "Here is your enhanced prompt:" prefix, no markdown formatting around it. Just the raw prompt text, ready to paste and use.\n';
    prompt = prompt + '10. The enhanced prompt should be comprehensive but not bloated — every sentence must add value. Remove any fluff.\n';
    return prompt;
  }
  
  function enhanceWithAI(text, chatHistory, settings, callback) {
    var systemPrompt = getSystemPrompt();
  
    var contextInfo = '';
    if (chatHistory && chatHistory.length > 0) {
      contextInfo = '\n\nCONVERSATION CONTEXT (previous messages in this chat):\n' + chatHistory;
    }
  
    var userMessage = 'USER TYPED THIS PROMPT:\n"' + text + '"' + contextInfo + '\n\nTransform this into the best possible prompt. Output ONLY the enhanced prompt.';
  
    var provider = settings.provider;
    var apiKey = settings.apiKey;
    var model = settings.model;
  
    console.log('PromptEnhancer: Calling ' + provider + ' with model ' + (model || DEFAULT_MODELS[provider]) + '...');
  
    if (provider === 'gemini') {
      callGemini(systemPrompt, userMessage, apiKey, model, callback);
    } else if (provider === 'openai') {
      callOpenAI(systemPrompt, userMessage, apiKey, model, callback);
    } else if (provider === 'claude') {
      callClaude(systemPrompt, userMessage, apiKey, model, callback);
    } else if (provider === 'ollama') {
      callOllama(systemPrompt, userMessage, apiKey, model, callback);
    } else {
      callback('Unknown provider: ' + provider + '. Supported: gemini, openai, claude, ollama.', null);
    }
  }
  
  // ══════════════════════════════════════════════
  // MAIN FUNCTION — the ONLY function the rest of the extension calls
  // ══════════════════════════════════════════════
  // mode = 'local' or 'ai'
  // settings = { provider: 'gemini'/'openai'/'claude'/'ollama', apiKey: '...', model: '...' }
  // If mode is 'ai' but no valid settings, falls back to local automatically
  
  function enhancePrompt(text, mode, settings, chatHistory, persona, callback) {
    if (!text || text.trim().length === 0) {
      callback('Type something first, then click Enhance!');
      return;
    }
  
    var cleanText = text.trim();
  
    if (mode === 'ai') {
      if (!settings || !settings.provider || !settings.apiKey || settings.apiKey.length === 0) {
        console.log('PromptEnhancer: AI mode selected but no API key configured. Using local engine.');
        var taskType = detectTaskType(cleanText);
        var enhanced = buildEnhancedPrompt(cleanText, taskType, persona);
        callback(enhanced);
        return;
      }
  
      console.log('PromptEnhancer: Using AI enhancement (' + settings.provider + ')');
  
      enhanceWithAI(cleanText, chatHistory, settings, function(error, result) {
        if (error) {
          console.log('PromptEnhancer: AI failed (' + error + '), falling back to local engine');
          var taskType = detectTaskType(cleanText);
          var enhanced = buildEnhancedPrompt(cleanText, taskType, persona);
          callback(enhanced);
        } else {
          console.log('PromptEnhancer: AI enhancement successful!');
          callback(result);
        }
      });
    } else {
      console.log('PromptEnhancer: Using local engine');
      var taskType = detectTaskType(cleanText);
      console.log('PromptEnhancer: Detected task type: ' + taskType);
      var enhanced = buildEnhancedPrompt(cleanText, taskType, persona);
      callback(enhanced);
    }
  }
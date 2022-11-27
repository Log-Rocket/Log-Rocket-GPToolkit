const OpenAI = require('openai-api')

async function sendQuery(operation, prompt, key) {

  //Create a new OpenAi instance with provided key but default to env for development
  const openai = new OpenAI(key ? key : process.env.OPENAI_API_KEY);
  var gptResponse;

  switch(operation) {
    
    // [Brainstorm] Model for generating an elevator pitch or new business idea
    case 'brainstorm':
      gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: prompt,
        maxTokens: 70,
        temperature: 0.85,
        topP: 1.0,
        presencePenalty: 1,
        frequencyPenalty: 1,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ["###"]
      });
      break;

    // [Sandbox] Model for testing out new sandbox prompts 
    case 'sandbox':
      gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: prompt,
        maxTokens: 100,
        temperature: 0.0,
        topP: 1.0,
        presencePenalty: 1,
        frequencyPenalty: 1,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ["###"]
      });
      break;
    
    // [Idea To Code] Model for generating code from a rough text description
    case 'ideaToCode':
      gptResponse = await openai.complete({
        engine: 'code-davinci-002',
        prompt: prompt,
        maxTokens: 256,
        temperature: 0.1,
        topP: 1.0,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ["# Create"]
      });
      break;
    
    // [Transpiler] Model for translating a code snippet into a different language
    case 'transpileCode':
      gptResponse = await openai.complete({
        engine: 'code-davinci-002',
        prompt: prompt,
        maxTokens: 256,
        temperature: 0,
       
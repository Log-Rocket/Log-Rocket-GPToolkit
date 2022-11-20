const OpenAI = require('openai-api')

async function sendQuery(operation, prompt, key) {

  //Create a new OpenAi instance with provided key but default to env for development
  const openai = new OpenAI(key ? key : process.env.OPENAI_API_KEY);
  var gptResponse;

  switch(operation) {
    
    // [Brainstorm] Model for generating an elevator pitch or new business idea
   
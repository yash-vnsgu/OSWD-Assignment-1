// movieBot.js

function getResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    return "Hello! 🎬 I'm MovieBot. Ask me about movies, actors, or recommendations!";
  } else if (msg.includes("recommend")) {
    return "I recommend watching 'Inception' or 'The Shawshank Redemption'.";
  } else if (msg.includes("latest")) {
    return "The latest popular movies are 'Oppenheimer' and 'Dune: Part Two'.";
  } else if (msg.includes("actor")) {
    return "Leonardo DiCaprio and Robert Downey Jr. are top actors!";
  } else if (msg.includes("bye") || msg.includes("exit")) {
    return "Goodbye! Have a great movie night!";
  } else {
    return "Sorry, I can only help with movie-related queries. Try asking about recommendations, latest releases, or actors.";
  }
}

module.exports = { getResponse };

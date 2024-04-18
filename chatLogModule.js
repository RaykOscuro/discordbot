module.exports = (client) => {
  client.on("messageCreate", (message) => {
    console.log(message.content);
  });
};

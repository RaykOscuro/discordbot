/**
 * A module that exports a function to handle the 'messageCreate' event
 * of the Discord client. This module logs the content of each message
 * created.
 *
 * @param {Client} client - The Discord client.
 */
module.exports = (client) => {
  /**
   * Event handler for when a message is created.
   * Logs the content of the message.
   *
   * @param {Message} message - The created message.
   */
  client.on("messageCreate", (message) => {
    // Log the content of the message
    console.log(message.content);
  });
};

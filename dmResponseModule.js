/**
 * A module to handle the 'messageCreate' event for a Discord client.
 * It sends a thank you message to the user who sent a DM.
 *
 * @param {Client} client - The Discord client instance.
 */
module.exports = (client) => {
  /**
   * Event handler for the 'messageCreate' event.
   *
   * @param {Message} message - The message object representing the created message.
   */
  client.on("messageCreate", async (message) => {
    // Ignore messages sent by the client itself
    if (message.author == client.user) return;

    // Check if the message was sent in a DM channel
    if (message.channel.constructor.name == "DMChannel") {
      // Send a thank you message to the user
      await message.channel.send("Thank you for sending me a DM. This is an automatic reply. Have a nice day!");
    }
  });
};

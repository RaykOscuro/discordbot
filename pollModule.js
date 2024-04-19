const { EmbedBuilder } = require("discord.js");

/**
 * Exports a function that handles the event when a message is created.
 *
 * @param {Client} client - The Discord.js client.
 */
module.exports = (client) => {
  // Array of emoji options for the poll
  const options = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];

  /**
   * Event handler for when a message is created.
   *
   * @param {Message} message - The created message.
   */
  client.on("messageCreate", async (message) => {
    // Check if the message starts with "!poll "
    if (message.content.startsWith("!poll ")) {
      // Split the message content to get the poll options
      const input = message.content.slice(6);
      const input_split = input.split("|");

      // Check if there are at least two options
      if (input_split.length < 3) {
        message.channel.send("You need to have at least two options.");
        return;
      }

      // Check if there are more than 10 options
      if (input_split.length > 11) {
        message.channel.send("You can't have more than 10 options.");
        return;
      }

      // Get the username of the message author
      const username = message.author.displayName;

      // Create an EmbedBuilder for the poll
      const embed = new EmbedBuilder()
        .setTitle(
          username + (username.slice(-1) === "s" ? "'" : "'s") + " poll"
        )
        .addFields(
          { name: "Question", value: input_split[0] },
          {
            name: "Options",
            value: input_split
              .slice(1)
              .map((x, idx) => `${options[idx]} ${x}`)
              .join("\n"),
          }
        );

      // Send the embed with the poll options and add reactions for voting
      message.channel.send({ embeds: [embed] }).then((sentMessage) => {
        for (let i = 0; i < input_split.length - 1; i++) {
          sentMessage.react(options[i]);
        }
      });
    }
  });
};

/**
 * Main entry point of the Discord bot.
 *
 * This script initializes the Discord client, registers event handlers,
 * and logs in with the bot's token from the environment variables.
 */
require("dotenv").config();

// Import required modules
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const chatLogModule = require("./chatLogModule");
const dmResponseModule = require("./dmResponseModule");
const pollModule = require("./pollModule");

// Create a new Discord client instance
const client = new Client({
  // List of intents required for the bot to function
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  // List of partials required for the bot to function
  partials: [Partials.Channel],
});

// Event handler for when the bot is ready
client.on("ready", () => {
  // Log the bot's login information
  console.log(`Logged in as ${client.user.tag}`);
});

// Register event handlers for chat log module
chatLogModule(client);
// Register event handlers for poll module
pollModule(client);
// Register event handlers for DM response module
dmResponseModule(client);

// Log in the bot with the token from the environment variables
client.login(process.env.CLIENT_TOKEN);

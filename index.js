require("dotenv").config();
const { Client } = require("discord.js");
const { GatewayIntentBits, Partials } = require("discord.js");
const chatLogModule = require("./chatLogModule");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

chatLogModule(client);

client.login(process.env.CLIENT_TOKEN);

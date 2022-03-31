const client = require("../index");
const chalk = require("chalk");

client.on("ready", () =>
    console.log(`${chalk.cyan(client.user.tag)} is up and ready to go!`)
);


const client = require("../index");

client.on("interactionCreate", async (interaction) => {
  // Slash Command Handling
  if (interaction.isCommand()) {
    await interaction.deferReply({ ephemeral: false }).catch(() => {});

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return interaction.followUp({ content: "An error has occured " });

    const argsJson = {}
    var cur;

    for (let option of interaction.options.data) {
     cur = option.name
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) argsJson[cur] = x.value
        });
      } else if (option.value) argsJson[cur] = option.value;
    }
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );

    cmd.run(client, interaction, argsJson);
  }

  // Context Menu Handling
  if (interaction.isContextMenu()) {
    await interaction.deferReply({ ephemeral: false });
    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);
  }

  // Autocomplete Handling
  if (interaction.isAutocomplete()) {
    // gets the item to get choices for
    const focusedOption = interaction.options.getFocused(true);

    // Gets the autocomplete options from command file
    const { autocomplete } = client.slashCommands.get(interaction.commandName);

    //Put the choices into an array
    const choices = autocomplete[focusedOption.name].choices

    //Make the array into a ApplicationCommandOptionChoice object
    const final = choices.map(choice => ({ name: choice, value: choice}))
    
    // Send the choices to the api
    await interaction.respond(final)
    
  }
	
});
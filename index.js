const { builtinModules } = require("module");
const fetch = require("node-fetch");
const Channel = require("./src/Channel.js");
/**
 * A class representing the holodex api
 * @param {String} key holodex api key
 */
class holodex {
    constructor(key) {
        this.key = key;
        this.baseUrl = "https://holodex.app/api/v2";
        this.headers = {
            "Content-Type": "application/json",
            "X-APIKEY": this.token
        };
        this.fetch = fetch;
    }

    /**
     * Get a channel by id
     * @param {String} channelId 
     * @returns {Channel} The channel object
     */
    getChannel = async (channelId) => {
        let data = await this.fetch(`${this.baseUrl}/channels/${channelId}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => {
               throw Error(err) 
        });

        console.log(data);

        return new Channel(data)
    }
}

module.exports.holodex = holodex;

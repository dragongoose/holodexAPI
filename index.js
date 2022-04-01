const { builtinModules } = require("module");
const fetch = require("node-fetch");
const Channel = require("./src/Channel.js");
/**
 * A class representing the holodex api
 * @param {Object} options a object containing the api key
 * @example { apiKey: 'your api key' }
 */
class holodex {
    constructor(options) {
        if(!options || !options.apiKey) {
            throw new Error('You must provide an api key');
        }
        this.key = options.apiKey;
        this.baseUrl = "https://holodex.net/api/v2";
        this.headers = {
            "Content-Type": "application/json",
            "X-APIKEY": this.key
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
        .then((data) => {
            if(data.status === 403) {
                throw new Error("Invalid API key (Unauthorized)");
            }

            if(data.status != 200) {
                throw new Error(data.statusText);
            }

            return data.json();
        })

        return new Channel(data)
    }
}

module.exports.holodex = holodex;

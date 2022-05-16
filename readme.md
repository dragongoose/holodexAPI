# holodexAPI - development

**Development Branch**

holodexAPI is a wrapper for the [holodex](https://holodex.net/) API, written in TypeScript.

[![GitHub issues](https://img.shields.io/github/issues/dragongoose/holodexAPI?style=for-the-badge)](https://github.com/dragongoose/holodexAPI/issues)
[![GitHub forks](https://img.shields.io/github/forks/dragongoose/holodexAPI?style=for-the-badge)](https://github.com/dragongoose/holodexAPI/network)
[![GitHub stars](https://img.shields.io/github/stars/dragongoose/holodexAPI?style=for-the-badge)](https://github.com/dragongoose/holodexAPI/stargazers)
[![GitHub license](https://img.shields.io/github/license/dragongoose/holodexAPI?style=for-the-badge)](https://github.com/dragongoose/holodexAPI/blob/master/LICENSE)

## Documentation

You can view the docs [here](https://dragongoose.github.io/holodexAPI/index.html)

## Installation

Use [NPM](https://npmjs.com) to install holodex-api.

```bash
npm i holodex-api
```

## Example

Also view [examples](https://github.com/dragongoose/holodexAPI/tree/master/src/examples)

```typescript
import {holodex} from 'holodex-api';

const client = new holodex({
    apiKey: 'APIKEY',
})

client.getChannel('UCoSrY_IQQVpmIRZ9Xf-y93g').then(channel => {
  console.log(channel.name); // 'Gawr Gura Ch. hololive-EN'
  console.log(channel.englishName); // 'Gawr Gura'
  console.log(channel.type); // 'vtuber'
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Testing

If you are going to working with a local copy, you are going to be using the test script a lot.
To setup the test script, set the HOLODEX_API_KEY environment variable to your api key.
In this example, we will use DOTENV, which the project already uses.

In the root dir, make a .env file.
```bash
HOLODEX_API_KEY="API_KEY"
```

Thats it!

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)

# holodexAPI

holodexAPI is a wrapper for the [holodex](https://holodex.net/) API, written in TypeScript.

## Installation

Use [NPM](https://npmjs.com) to install foobar.

```bash
npm i holodexAPI
```

## Example

Also view [examples](https://github.com/dragongoose/holodexAPI/tree/master/src/examples)

```typescript
import {holodex} from 'holodexAPI';

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

## License
[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
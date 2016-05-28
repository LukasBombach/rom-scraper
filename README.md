# rom-scraper
Rom Metadata Scraper, currently scraping The Games DB.

This Project is WIP. If you are on npmjs.com check out this project on
https://github.com/LukasBombach/rom-scraper for the latest version. By now you can
already scrape basic rom meta data from *The Games DB* (http://thegamesdb.net/).

## Installation

```
npm install rom-scraper
```

## Current API examples:

```javascript
import { TheGamesDb } from 'rom-scraper';

TheGamesDb
  .search({ name: 'Secret of Mana', platform: 'Super Nintendo (SNES)' })
  .then(results => {
    console.log(results);
  });

TheGamesDb
  .getGame({ name: 'Secret of Mana', platform: 'Super Nintendo (SNES)' })
  .then(data => {
    console.log(data);
  });
```
## Current API description:

`TheGamesDb.search` and `TheGamesDb.getGame` will take 2 _optional_ parameters,
the name of the game and and the platform's name. The `name` can be anything you
search for, the `platform` must be any of the
[names listed here](http://wiki.thegamesdb.net/index.php/GetPlatformsList#Example_Response:).

Both functions will return a `Promise`. The data the example calls above return
can be seen here:

* [Results for TheGamesDb.search](https://gist.github.com/LukasBombach/65e629c99178c6244e620199ca203be7)
* [Results for TheGamesDb.getGame](https://gist.github.com/LukasBombach/3d49cf8fdd9b602f453923278e80db20)

## Development / Contribution / Feature Requests

For any of these, please create a pull request / issue on GitHub. I am developing
this because I need this for another project and I will implement features as I
need them or when I have time to make this feature complete. But I am happy to add
features if you need it and if I have the time.

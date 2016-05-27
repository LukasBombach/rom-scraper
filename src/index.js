/**
 *  This file is for development purposes only right now.
 *  todo expose classes etc for AMD, CommonJs etc. here
 */

import Scraper from './scraper';
import TheGamesDb from './scrapers/thegamesdb';

const name = 'Secret of Mana';
const platform = Scraper.PLATFORMS.SNES;

TheGamesDb.getGame({ name, platform }).then(rom => {
  console.log(rom.getData()); // eslint-disable-line no-console
});

// TheGamesDb.search({ name }).then(results => {
//   console.log(results); // eslint-disable-line no-console
// });

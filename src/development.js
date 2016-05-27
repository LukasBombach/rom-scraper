/**
 *  This file is for development purposes only right now.
 */
import Scraper from './scraper';
import { TheGamesDb } from './index';

const name = 'Secret of Mana';
const platform = Scraper.PLATFORMS.SNES;

TheGamesDb.getGame({ name, platform }).then(rom => {
  console.log(rom.getData()); // eslint-disable-line no-console
});

// TheGamesDb.search({ name }).then(results => {
//   console.log(results); // eslint-disable-line no-console
// });

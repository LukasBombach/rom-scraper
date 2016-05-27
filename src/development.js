/**
 *  This file is for development purposes only right now.
 */
import Scraper from './scraper';
import { TheGamesDb } from './index';

const name = 'Secret of Mana';
const platform = Scraper.PLATFORMS.SNES;

TheGamesDb.getGame({ name, platform }).then(data => {
  console.log(JSON.stringify(data)); // eslint-disable-line no-console
});

TheGamesDb.search({ name, platform }).then(results => {
  console.log(JSON.stringify(results)); // eslint-disable-line no-console
});

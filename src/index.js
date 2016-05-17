import Scraper from './scraper';
import TheGamesDb from './scrapers/thegamesdb';

const name = 'Secret of Mana';
const platform = Scraper.PLATFORMS.SNES;

TheGamesDb.getGame({ name, platform }).then(game => {
  // eslint-disable no-console
  console.log(game);
});

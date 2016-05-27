import xml2json from 'xml2json';
import fetch from 'node-fetch';
import queryString from 'query-string';
import Scraper from '../scraper';
import Rom from '../rom';

export default class TheGamesDb extends Scraper {

  /**
   *
   * @param requestBody
   * @returns {Rom}
   * @private
   */
  static _rom(requestBody) {
    return new Rom({
      title: requestBody.GameTitle,
      alternateTitles: [requestBody.AlternateTitles.title],
      releaseDate: new Date(requestBody.ReleaseDate),
      description: requestBody.Overview,
      genres: requestBody.Genres.genre,
      players: parseInt(requestBody.Players, 10),
      coop: requestBody['Co-op'] === "Yes",
      publisher: requestBody.Publisher,
      developer: requestBody.Developer,
      foreignIds: { theGamesDb: requestBody.id },
      videos: [{ url: requestBody.Youtube }],
      images: TheGamesDb._romInfoImages(requestBody),
    });
  }

  /**
   *
   * @param Images
   * @returns {{boxart: Array, banner: Array, logo: Array, fanart: Array, screenshot: Array}}
   * @private
   */
  static _romInfoImages({ Images }) {
    return {
      boxart: TheGamesDb._romInfoBoxArt(Images),
      banner: TheGamesDb._romInfoImage(Images.banner),
      logo: TheGamesDb._romInfoImage(Images.clearlogo),
      fanart: TheGamesDb._romInfoImageOrig(Images.fanart),
      screenshot: TheGamesDb._romInfoImageOrig(Images.screenshot),
    };
  }

  /**
   *
   * @param images
   * @returns {Array}
   * @private
   */
  static _romInfoImage(images) {
    const _images = Array.isArray(images) ? images : [images];
    return _images.map(({ width, height, $t }) => ({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      url: TheGamesDb._romInfoImageUrl($t),
    }));
  }

  /**
   *
   * @param images
   * @returns {Array}
   * @private
   */
  static _romInfoImageOrig(images) {
    const _images = Array.isArray(images) ? images : [images];
    return _images.map(({ original: { width, height, $t } }) => ({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      url: TheGamesDb._romInfoImageUrl($t),
    }));
  }

  /**
   *
   * @param boxart
   * @returns {Array}
   * @private
   */
  static _romInfoBoxArt({ boxart }) {
    const boxArt = Array.isArray(boxart) ? boxart : [boxart];
    return boxArt.map(({ width, height, side, $t }) => ({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      side,
      url: TheGamesDb._romInfoImageUrl($t),
    }));
  }

  /**
   *
   * @param path
   * @returns {string}
   * @private
   */
  static _romInfoImageUrl(path) {
    return `${TheGamesDb._ART_BASE_URL}${path}`;
  }

  /**
   *
   * @returns {string}
   * @private
   */
  static get _BASE_URL() {
    return 'http://thegamesdb.net/api/';
  }

  /**
   *
   * @returns {string}
   * @private
   */
  static get _ART_BASE_URL() {
    return 'http://thegamesdb.net/banners/';
  }

  /**
   *
   * @param {string} platform
   * @return {string}
   * @private
   */
  static _platform(platform) {
    const map = {
      [Scraper.PLATFORMS.SNES]: 'Super Nintendo (SNES)',
    };
    return map[platform];
  }

  /**
   *
   * @param method
   * @param params
   * @returns {Promise}
   * @private
   */
  static _api(method, params = {}) {
    const options = { method: 'GET' };
    const url = `${TheGamesDb._BASE_URL}${method}.php?${queryString.stringify(params)}`;
    console.info('fetching', url);
    return fetch(url, options);
  }

  /**
   *
   * @param {Response} res
   * @returns {Promise}
   * @private
   */
  static _body(res) {
    return res.text()
        .then(xml => xml2json.toJson(xml))
        .then(jsonString => JSON.parse(jsonString))
        .then(json => json.Data.Game);
  }

  /**
   *
   * @param name
   * @param platform
   * @returns {Promise.<Array>}
   */
  static search({ name, platform }) {
    const _platform = TheGamesDb._platform(platform);
    const request = TheGamesDb._api('GetGamesList', { name, platform: _platform });
    return request.then(TheGamesDb._body);
  }

  /**
   *
   * @param name
   * @param platform
   * @returns {Promise.<Object>}
   */
  static getGame({ name, platform }) {
    return TheGamesDb.search({ name, platform })
        .then(games => TheGamesDb._api('GetGame', { id: games[0].id }))
        .then(TheGamesDb._body)
        .then(TheGamesDb._rom);
  }

}

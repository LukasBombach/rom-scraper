import xml2js from 'xml2js';
import fetch from 'node-fetch';
import queryString from 'query-string';
import Scraper from '../scraper';
import Rom from '../rom';

const parser = new xml2js.Parser({ explicitArray: false });

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
    return _images.map(({ $: { width, height }, _ }) => ({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      url: TheGamesDb._romInfoImageUrl(_),
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
    return _images.map(({ original: { $: { width, height }, _ } }) => ({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      url: TheGamesDb._romInfoImageUrl(_),
    }));
  }

  /**
   *
   * @param boxart
   * @returns {Array}
   * @private
   */
  static _romInfoBoxArt({ boxart }) {
    const _boxart = Array.isArray(boxart) ? boxart : [boxart];
    return _boxart.map(({ $: { width, height }, _, side }) => ({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      side,
      url: TheGamesDb._romInfoImageUrl(_),
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
    return map[platform] || platform;
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
    // console.info('fetching', url);
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
        // .then(xml => ltx.parse(xml))
        // .then(xml => xml2json.toJson(xml))
        // .then(jsonString => JSON.parse(jsonString))
        .then(TheGamesDb._parseBody)
        .then(json => json.Data.Game);
  }

  /**
   *
   * @param {string} xml
   * @returns {Promise}
   * @private
   */
  static _parseBody(xml) {
    return new Promise((resolve, reject) => parser.parseString(xml, (err, res) => {
      err ? reject(err) : resolve(res);
    }));
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
        .then(TheGamesDb._rom)
        .then(rom => rom.getData());
  }

}

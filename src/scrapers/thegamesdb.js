import xml2json from 'xml2json';
import fetch from 'node-fetch';
import queryString from 'query-string';
import Scraper from '../scraper';

export default class TheGamesDb extends Scraper {

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
        .then(TheGamesDb._body);
  }

}

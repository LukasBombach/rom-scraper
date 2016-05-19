export default class Scraper {

  static get PLATFORMS() {
    return {
      SNES: 'SNES',
    };
  }

  /**
   *
   * @param name
   * @param platform
   */
  static search({ name, platform }) {
    throw new Error('Method "search" has not been implemented.');
  }

  /**
   * @param name
   * @param platform
   */
  static getGame({ name, platform }) {
    throw Scraper.notImplementedError('getGame');
  }

  /**
   *
   * @param methodName
   * @returns {Error}
   */
  static notImplementedError(methodName) {
    const error = `Method "${methodName}" has not been implemented. `;
    const advice = 'Please override it in your class.';
    return new Error(error + advice);
  }

}

export default class Rom {

  /**
   *
   * @param {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}} data
   */
  constructor(data) {
    this._data = {};
    this.addData(data);
  }

  /**
   * todo schema validator
   * todo deep merge
   * @param {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}} data
   */
  addData(data) {
    Object.assign(this._data, Rom._clean(data));
  }

  /**
   *
   * @returns {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}}
   */
  getData() {
    return this._data;
  }

  /**
   *
   * @param data
   * @returns {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}}
   * @private
   */
  static _clean(data) {
    return {
      title: data.title,
      alternateTitles: data.alternateTitles,
      releaseDate: data.releaseDate,
      description: data.description,
      genres: data.genres,
      players: data.players,
      coop: data.coop,
      publisher: data.publisher,
      developer: data.developer,
      foreignIds: data.foreignIds,
      videos: data.videos,
      images: data.images,
    };
  }

}

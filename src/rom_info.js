export default class RomInfo {

  static get schema() {
    const resourceSchema = {

    };
    return {
      title: 'string',
      platform: 'string',
      alternateTitles: { type: ['string'], req: false },
      releaseDate: { type: /\d{2}\/\d{2}\/\d{4}/, req: false },
      description: { type: 'string', req: false },
      genres: { type: ['string'], req: false },
      players: { type: 'number', req: false },
      coop: { type: 'boolean', req: false },
      publisher: { type: 'string', req: false },
      developer: { type: 'string', req: false },
      images: { type: [resourceSchema], req: false },
      videos: { type: [resourceSchema], req: false },
    }
  }

  constructor(data) {
    this._data = this.clean(data);
  }

  clean(data) {
    return {

    }
  }

}

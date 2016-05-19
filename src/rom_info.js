export default class RomInfo {

  static get schema() {
    const imageSchema = {
      type: /(boxart-front|boxart-back|logo|banner|marquee|screenshot|fanart)/i,
      original: 'string',
      width: { type: 'number', req: false },
      height: { type: 'number', req: false },
    };
    const videoSchema = {
      type: /(attract|ingame|intro)/i,
      original: 'string',
      width: { type: 'number', req: false },
      height: { type: 'number', req: false },
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
      images: { type: [imageSchema], req: false },
      videos: { type: [videoSchema], req: false },
    };
  }

  constructor(data) {
    this._data = this.clean(data);
  }

  clean(data) {
    return {

    }
  }

}

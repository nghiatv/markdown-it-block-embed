'use strict';

const VideoServiceBase = require('./VideoServiceBase');


class VineService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 600, height: 600, embed: 'simple' };
  }

  extractVideoID(reference) {
    let match = reference.match(/^http(?:s?):\/\/(?:www\.)?vine\.co\/v\/([a-zA-Z0-9]{1,13}).*/);
    return match && match[1].length === 11 ? match[1] : reference;
  }

  getVideoUrl(videoID) {
    return '//vine.co/v/' + videoID + '/embed/' + this.options.embed;
  }

}


module.exports = VineService;
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  findOne(params, populate) {
    const customParams = {
      status: 'published',
      ...params
    }
    return strapi.query('article').findOne(customParams, populate);
  },
  find(params, populate) {
    console.log(params);
    const customParams = {
      status: 'published',
      _sort: 'publishedAt:DESC',
      ...params
    }
    return strapi.query('article').find(customParams, populate);
  },
};

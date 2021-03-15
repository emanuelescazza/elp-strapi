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
  async find(params, populate) {
    let category;
    if (params?.hasOwnProperty('category_name')) {
      const el = await strapi.query('category').findOne({ slug: params['category_name'] }, populate);
      category = el?._id;
      delete params['category_name'];
    }
    const customParams = {
      status: 'published',
      _sort: 'publishedAt:DESC',
      ...params
    };
    if (category) customParams['category'] = category.toString();
    return strapi.query('article').find(customParams, populate);
  },

  async count(params, populate) {
    let category;
    if (params?.hasOwnProperty('category_name')) {
      const el = await strapi.query('category').findOne({ slug: params['category_name'] }, populate);
      category = el?._id;
      delete params['category_name'];
    }
    const customParams = {
      ...params
    };
    if (category) customParams['category'] = category.toString();
    return strapi.query('article').count(customParams);
  },

  findAllSlugs(params, populate) {
    const customParams = {
      status: 'published',
      _limit: '-1'
    }
    return strapi.query('article').find(customParams, populate);
  },
};

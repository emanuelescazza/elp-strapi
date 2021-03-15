const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.article.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  async findAllSlugs(ctx) {
    // const entity = await strapi.services.article.findOne({ slug });
    const entity = await strapi.services.article.findAllSlugs();
    const les = entity.map(el => el.slug);
    return sanitizeEntity(les, { model: strapi.models.article });
    // return entity
  },
};

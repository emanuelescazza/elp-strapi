'use strict';


/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async contatti(ctx) {
    const result = await strapi.plugins['email'].services.email.send({
      to: 'manu.scazza@hotmail.it',
      from: 'no-reply@elp.it',
      // cc: 'helenedarroze@strapi.io',
      // bcc: 'ghislainearabian@strapi.io',
      // replyTo: 'annesophiepic@strapi.io',
      subject: 'Test',
      text: 'Hello world!',
      html: 'Hello world!',
    });
    console.log(result);
    return result;
  }
};

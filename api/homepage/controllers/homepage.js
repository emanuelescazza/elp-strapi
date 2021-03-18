'use strict';


/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async contatti(ctx) {
    const { categoria, messaggio } = ctx.request.body;
    const result = await strapi.plugins['email'].services.email.send({
      // cc: 'alessiapompamea@hotmail.it',
      to: env('MAIL_TO', 'manu.scazza@hotmail.it'),
      subject: 'PARLA CON NOI',
      text: `Messaggio nella categoria ${categoria}:\n\n${messaggio}`,
      html: `<p>Messaggio nella categoria <strong>${categoria}</strong>:</p>
              <br /><p>${messaggio}</p>`,
    });
    return JSON.stringify({ result: "OK" });
  }
};

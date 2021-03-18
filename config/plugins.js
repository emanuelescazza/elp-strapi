module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'gruppoelpconsulting@gmail.com',
      defaultReplyTo: 'gruppoelpconsulting@gmail.com',
      testAddress: 'gruppoelpconsulting@gmail.com',
    },
  },
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});

// module.exports = ({ env }) => ({

//   email: {
//     provider: 'sendmail',
//     settings: {
//       defaultFrom: 'myemail@protonmail.com',
//       defaultReplyTo: 'myemail@protonmail.com',
//     },
//   },

// });
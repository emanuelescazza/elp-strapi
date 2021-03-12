module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: ['articles', 'categories', 'article', 'category']
    }
  }
});
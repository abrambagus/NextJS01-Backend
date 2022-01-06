module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ffdb1dfa57a551e4e8c8554320dc1ad0'),
  },
});

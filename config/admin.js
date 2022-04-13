module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6610e3c4d59e222ad6a2c3f5ce4540d2'),
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "admin_roia"),
      user: env("DATABASE_USERNAME", "roia_usesr"),
      password: env("DATABASE_PASSWORD", "Uq5rp39!"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

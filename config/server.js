module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://api.vigilant-bartik.20-113-35-85.plesk.page",
  app: {
    keys: env.array("APP_KEYS"),
  },
});

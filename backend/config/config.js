module.exports = {
  development: {
    username: 'postgres',
    password: 'skillsmatch',
    database: 'postgres',
    host: 'skillsmatch.cjkwoye4kdui.us-east-1.rds.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    "ssl": true,
    "sslmode": "require",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false // This option is required if you are using a self-signed certificate
      }
    }
  },
  // Add configurations for other environments (e.g., production, test) if needed
};

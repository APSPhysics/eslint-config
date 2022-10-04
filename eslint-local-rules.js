const { noPublicSecrets } = require("./rules/no-public-secrets");

module.exports = {
  "no-public-secrets": noPublicSecrets,
};

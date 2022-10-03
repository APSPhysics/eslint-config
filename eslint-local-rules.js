const { noPublicSecrets } = require("./rules/no-public-secrets");

console.log(noPublicSecrets);
module.exports = {
  "no-public-secrets": noPublicSecrets,
};

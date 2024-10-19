module.exports = {
  "packageRules": [
    {
      "matchDatasources": ["docker"],
      "matchPackageNames": ["caddy"],
      "groupName": "Caddy Server updates",
      "enabled": true
    }
    {
      "matchPackageNames": ["java"],
      "replacementName": "eclipse-temurin",
      "replacementVersion": "11"
    }
  ],
};

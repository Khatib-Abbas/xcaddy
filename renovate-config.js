module.exports = {
  "extends": ["config:recommended"],
  "dockerfile": {
    "fileMatch": ["Dockerfile"],
    "enabled": true
  },
  "repositories": [
    "https://github.com/Khatib-Abbas/xcaddy" // specify the path to the directory or repository here
  ],
  "packageRules": [
    {
      "matchDatasources": ["docker"],
      "matchPackageNames": ["caddy"],
      "groupName": "Caddy Server updates",
      "enabled": true
    }
  ],
  "schedule": ["before 5am on Monday"],
  "labels": ["dependencies", "caddy"],
  "assignees": ["@Khatib-Abbas"]
};

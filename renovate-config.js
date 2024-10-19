module.exports = {
  "extends": [
    "config:base"
  ],
  "dockerfile": {
    "fileMatch": ["Dockerfile"],
    "enabled": true,
    "managers": ["dockerfile"]
  },
  "packageRules": [
    {
      "matchDatasources": ["docker"],
      "matchPackageNames": ["caddy"],
      "groupName": "Caddy Server updates",
      "enabled": true
    }
  ],
  "schedule": ["before 5am on Monday"], // Vérifier les mises à jour chaque lundi matin avant 5h
  "labels": ["dependencies", "caddy"],
  "assignees": ["@Khatib-Abbas"] // Remplacez par votre nom d'utilisateur GitHub
};

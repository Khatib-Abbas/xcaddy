{
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  platform: "github",
  repositories: ["Khatib-Abbas/xcaddy"],
  "packageRules": [
    {
      "matchPackageNames": ["java"],
      "replacementName": "eclipse-temurin",
      "replacementVersion": "11"
    }
  ]
}

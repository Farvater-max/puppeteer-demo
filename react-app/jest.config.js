module.exports = {
    testTimeout: 120000,
    reporters: [
      "default",
      ["jest-html-reporters", {
        "filename": "index.html",
        "expand": true,
        "openReport": false
      }]
    ],
    verbose: true,
    roots: [
      "./src/test"
    ]
  }
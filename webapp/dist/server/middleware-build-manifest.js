self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/404": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/404.js"
    ],
    "/[locale]/[[...path]]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/[locale]/[[...path]].js"
    ],
    "/[locale]/auth/login": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/[locale]/auth/login.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];
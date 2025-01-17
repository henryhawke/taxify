module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-typescript': {
          allowNamespaces: true,
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
          optimizeConstEnums: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allowNamespaces: true,
        allowDeclareFields: true,
        isTSX: true,
      },
    ],
  ],
}

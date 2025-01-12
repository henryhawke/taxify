module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
      },
    ],
  ],
}

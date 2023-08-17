export default {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          node: "current"
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
        importSource: "jsx",
        throwIfNamespace: false,
      }
    ]
  ],
}

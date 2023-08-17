export default [
  {
    name: "menus",
    value: [
      {
        url: "${APP.homepage}",
        key: "home",
        label: "Home",
      },
      {
        url: "${APP.homepage}/list",
        key: "list",
        label: "List",
      },
    ]
  },
  {
    name: "active",
    value: "home",
    expose: true,
  }
]

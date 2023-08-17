import { APP, CTX, PATH_NAME } from "next-jsx/runtime";

export default [
  {
    name: 'menus',
    value: [
      {
        url: '${APP.homepage}',
        key: 'home',
        label: 'Home',
      },
      {
        url: '${APP.homepage}/list',
        key: 'list',
        label: 'List',
      },
    ],
  },
  {
    name: 'active',
    value: CTX.menus.find(menu => menu.url === PATH_NAME)?.key,
    onChange: {
      action: 'history.push',
      args: [
        CTX.menus.find((menu) => CTX.active === menu.key)
          .url,
        { notify: false },
      ],
    }
  },
  {
    name: "sayHello",
    value: "Hello !!",
  },
  {
    name: "asyncValue",
    resolve: {
      useProvider: "basic.http-request",
      args: [
        "/x/y/z"
      ],
      lazy: true
    }
  }
];

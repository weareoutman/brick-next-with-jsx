// Homepage context
export default [
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

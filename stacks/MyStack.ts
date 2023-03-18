import { StackContext, Api, NextjsSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  const site = new NextjsSite(stack, "site", {
    path: "tutorial",
  })
  stack.addOutputs({
    ApiEndpoint: api.url,
    URL: site.url || "localhost:3000"
  });
}

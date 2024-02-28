import Fastify from "fastify";
import proxy from "@fastify/http-proxy";

export const fastify = Fastify({
  logger: true,
});

export const startServer = () => {
  fastify.register(proxy, {
    upstream: "http://my-api.example.com",
    prefix: "/api", // optional
    http2: false, // optional,
    preHandler: (request: any, reply, done) => {
      const proxyTarget = request.headers["X-Proxy-Target"]; // 从请求头中获取代理的 URL
      if (proxyTarget) {
        request.url = proxyTarget; // 修改请求的 url 属性为代理的 URL
      }
      done();
    },
  });

  fastify.listen({ port: 5273 }, (err, address) => {
    if (err) throw err;
    console.log("BFF服务已启动");
  });
};

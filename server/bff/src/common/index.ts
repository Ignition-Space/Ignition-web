
import Fastify from 'fastify'

export const fastify = Fastify({
  logger: true
})

export const startServer = () => {
  fastify.listen({ port: 5273 }, (err, address) => {
    if (err) throw err
    console.log("BFF服务已启动")
  })
}
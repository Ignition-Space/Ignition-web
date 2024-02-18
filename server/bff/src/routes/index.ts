import { fastify } from '../common'

fastify.post('/rpc/:url', (request: any, reply) => {
  const proxyUrl = request.params?.url
  reply.send({ hello: 'world', proxyUrl })
})

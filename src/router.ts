import { FastifyError, FastifyInstance, FastifyPluginOptions } from "fastify"
import fp from "fastify-plugin"
import clientPlugin from "./plugins/client/client.plugin"

const router = (fastify: FastifyInstance, { prefix }: FastifyPluginOptions, done: (err?: FastifyError) => void) => {
	fastify.register(clientPlugin, { prefix: prefix + "/client" })
	done()
}

export default fp(router)

import { FastifyError, FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify"
import prisma from "../../lib/prisma"
import fp from "fastify-plugin"

const ClientPlugin = (fastify: FastifyInstance, { prefix }: FastifyPluginOptions, done: (err?: FastifyError) => void) => {
	fastify.get(prefix + "/:client_id", async (request: FastifyRequest, reply: FastifyReply) => {
		let { client_id } = request.params as { client_id: string }
		let truc = parseInt(client_id)

		if (!client_id) return reply.status(400).send({ status: "BAD_REQUEST", message: "missing client_id" })

		const client_profile = await prisma.client
			.findUnique({
				where: {
					// @ts-ignore
					client_id: truc,
				},
			})
			.then((result) => result)
			.catch((err) => console.error(err.message))

		if (!client_profile) {
			return reply.status(404).send({ status: "NOT_FOUND", message: "client_id not found" })
		}

		return reply.status(200).send({
			status: "OK",
			result: [client_profile],
		})
	})

	done()
}

export default fp(ClientPlugin)

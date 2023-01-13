import { build } from "./app"

export default async function start() {
	const server = build()
	server.listen({ host: "0.0.0.0", port: 3000 }, (err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		console.log(server.printRoutes())
		console.log(`Server listening at ${address}`)
	})
}

start()

import { Type } from "@sinclair/typebox"

let ClientSchema = {
	getById: {
		schema: {
			response: {
				200: {
					type: "object",
					properties: {
						status: Type.String(),
						result: Type.Array(
							Type.Object({
								client_id: Type.Integer(),
								total_spend: Type.Number(),
								score: Type.Integer(),
								level: Type.String(),
							})
						),
					},
				},
			},
		},
	},
}

export default ClientSchema

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typebox_1 = require("@sinclair/typebox");
let ClientSchema = {
    getById: {
        schema: {
            response: {
                200: {
                    type: "object",
                    properties: {
                        status: typebox_1.Type.String(),
                        result: typebox_1.Type.Array(typebox_1.Type.Object({
                            client_id: typebox_1.Type.Integer(),
                            total_spend: typebox_1.Type.Number(),
                            score: typebox_1.Type.Integer(),
                            level: typebox_1.Type.String(),
                        })),
                    },
                },
            },
        },
    },
};
exports.default = ClientSchema;

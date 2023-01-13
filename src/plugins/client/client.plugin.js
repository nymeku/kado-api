"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../lib/prisma"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const ClientPlugin = (fastify, { prefix }, done) => {
    fastify.get(prefix + "/:client_id", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        let { client_id } = request.params;
        let truc = parseInt(client_id);
        if (!client_id)
            return reply.status(400).send({ status: "BAD_REQUEST", message: "missing client_id" });
        const client_profile = yield prisma_1.default.client
            .findUnique({
            where: {
                // @ts-ignore
                client_id: truc,
            },
        })
            .then((result) => result)
            .catch((err) => console.error(err.message));
        if (!client_profile) {
            return reply.status(404).send({ status: "NOT_FOUND", message: "client_id not found" });
        }
        return reply.status(200).send({
            status: "OK",
            result: [client_profile],
        });
    }));
    done();
};
exports.default = (0, fastify_plugin_1.default)(ClientPlugin);

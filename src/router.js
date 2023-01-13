"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const client_plugin_1 = __importDefault(require("./plugins/client/client.plugin"));
const router = (fastify, { prefix }, done) => {
    fastify.register(client_plugin_1.default, { prefix: prefix + "/client" });
    done();
};
exports.default = (0, fastify_plugin_1.default)(router);

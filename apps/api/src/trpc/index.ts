import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify"
import { trpc } from "./instance"
import { createContext } from "./context"
import { FastifyInstance, FastifyPluginCallback } from "fastify"

export * from "@trpc/server"

const router = trpc.router({
  hello: trpc.procedure.query(async ({ ctx }) => {
    return "Hello, world!"
  }),
})

export type AppRouter = typeof router

interface TRPCPluginOptions {}

export const trpcPlugin: FastifyPluginCallback<TRPCPluginOptions> = (
  fastify: FastifyInstance
) => {
  return fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router,
      createContext,
    } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
  })
}

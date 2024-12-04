import * as trpc from "@trpc/server"
import * as trpcFastify from "@trpc/server/adapters/fastify"

export type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createContext = async (
  opts: trpcFastify.CreateFastifyContextOptions
) => {
  const { req } = opts
  return {
    req,
  }
}

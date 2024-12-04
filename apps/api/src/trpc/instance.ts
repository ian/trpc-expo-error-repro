import { initTRPC } from "@trpc/server"
import { SuperJSON } from "superjson"

import { Context } from "./context"

export const trpc = initTRPC.context<Context>().create({
  transformer: SuperJSON,
})

export const createRouter = trpc.router
export const middleware = trpc.middleware
export const publicProcedure = trpc.procedure

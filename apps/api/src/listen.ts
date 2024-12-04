import Fastify from "fastify"

import cookies from "@fastify/cookie"
import cors from "@fastify/cors"
import healthcheck from "fastify-healthcheck"

import { trpcPlugin as trpc } from "./trpc"

const fastify = Fastify({})

const host = process.env.HOST ?? "0.0.0.0"
const port = parseInt(process.env.PORT || "4000")

fastify.register(cors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
})

fastify.register(cookies, {
  secret: process.env.SESSION_SECRET,
  hook: "onRequest",
  parseOptions: {},
})

fastify.register(healthcheck)
fastify.register(trpc)

if (Boolean(process.env.HTTP_DEBUG)) {
  fastify.addHook("preHandler", async (req, res) => {
    console.log("👾 " + req.protocol + "://" + req.hostname + req.url)
  })
}

fastify.listen({ host, port }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`fastify listening at ${address}`)
})

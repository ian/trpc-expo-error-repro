import { Slot } from "expo-router"
import React, { useMemo } from "react"
import { SuperJSON } from "superjson"
import { QueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister"
import { httpLink, loggerLink } from "@trpc/client"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { trpc } from "@/lib/trpc"
import { Config } from "@/lib/config"

function App() {
  return (
    <TRPCProvider>
      <Slot />
    </TRPCProvider>
  )
}

export default App

export const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
})

function TRPCProvider(props: { children: React.ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(), [])
  const trpcClient = useMemo(() => {
    const links = [
      httpLink({
        url: `${Config.HOST_URL}/trpc`,
      }),
    ]

    return trpc.createClient({
      transformer: SuperJSON,
      links,
    })
  }, [])

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <PersistQueryClientProvider
        onSuccess={() =>
          queryClient
            .resumePausedMutations()
            .then(() => queryClient.invalidateQueries())
        }
        persistOptions={{ persister }}
        client={queryClient}
      >
        {props.children}
      </PersistQueryClientProvider>
    </trpc.Provider>
  )
}

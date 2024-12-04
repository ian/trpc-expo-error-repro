import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import { trpc } from "@/lib/trpc"

export default function HelloWorldScreen() {
  const { data, isLoading, error } = trpc.hello.useQuery()

  console.log({ data, isLoading, error })

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        },
      ]}
    >
      <View>
        <Text
          style={[
            {
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            },
          ]}
        >
          Hello, world.
        </Text>
        <Text style={[{ textAlign: "center", fontSize: 24, color: "black" }]}>
          See console for data and error output.
        </Text>
      </View>
    </SafeAreaView>
  )
}

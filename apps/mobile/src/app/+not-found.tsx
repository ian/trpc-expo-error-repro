import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { router, useFocusEffect } from "expo-router"
import { setStatusBarStyle } from "expo-status-bar"

export default function NotFoundScreen({ navigation }: any) {
  useFocusEffect(() => {
    setStatusBarStyle("dark")
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  linkContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  linkText: {
    color: "white",
  },
})

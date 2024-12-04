export const EXPO_ENV = process.env.EXPO_PUBLIC_EXPO_ENV || "production"
export const IS_PROD = EXPO_ENV === "preview" || EXPO_ENV === "production"

const getHostUrl = () => {
  return "http://localhost:4000"
}

const config = {
  EXPO_ENV,
  IS_PROD,
  HOST_URL: getHostUrl(),
}

console.log("\n", "[CONFIG]", JSON.stringify(config, null, 2), "\n")

export const Config = config

export default config

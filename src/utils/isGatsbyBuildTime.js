// to avoid gatsby build error, where window is undefined
const isGatsbyBuildTime = typeof window === "undefined"

export default isGatsbyBuildTime

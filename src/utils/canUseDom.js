// to avoid gatsby build error, where window is undefined
const canUseDom = typeof window !== "undefined"

export default canUseDom

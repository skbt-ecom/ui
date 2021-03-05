import requiredValidator from "./required"

if (process.env.NODE_ENV !== "production") {
  console.error('⚠️ Deprecation "requiredValidator". Use the "validators/required.js" instead')
}

export { requiredValidator }

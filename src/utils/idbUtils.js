import { get, getMany, set, setMany, clear, del } from "idb-keyval"

export function getIDBValue(key) {
  return get(key)
}

export function getManyIDBValues(keys) {
  return getMany(keys)
}

export function setIDBValue(key, data) {
  return set(key, data)
}

export function setManyIDBValues(entries) {
  return setMany(entries)
}

export function clearIDBData() {
  clear()
}

export function deleteIDBValue(key) {
  del(key)
}

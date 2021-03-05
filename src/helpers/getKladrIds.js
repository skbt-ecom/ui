export default function getKladrIds(kladrId) {
  if (Array.isArray(kladrId)) {
    return kladrId.map((v) => ({ kladr_id: v }))
  }

  return [{ kladr_id: kladrId }]
}

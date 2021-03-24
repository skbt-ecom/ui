const socialStatuses = [
  "Индивидуальный предприниматель",
  "Рабочий, служащий по найму",
  "Владелец предприятия",
  "Неработающий пенсионер",
  "Работающий пенсионер",
  "Студент",
  "Иное",
]

const SOCIAL_STATUSES = socialStatuses.map((label, value) => ({
  value,
  label,
}))
console.log(SOCIAL_STATUSES)
export default SOCIAL_STATUSES

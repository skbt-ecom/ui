let regions = [
  ['22', 'Алтайский край'],
  ['28', 'Амурская область'],
  ['29', 'Архангельская область'],
  ['30', 'Астраханская область'],
  ['31', 'Белгородская область'],
  ['32', 'Брянская область'],
  ['33', 'Владимирская область'],
  ['34', 'Волгоградская область'],
  ['35', 'Вологодская область'],
  ['36', 'Воронежская область'],
  ['79', 'Еврейская автономная область'],
  ['75', 'Забайкальский край'],
  ['37', 'Ивановская область'],
  ['38', 'Иркутская область'],
  ['39', 'Калининградская область'],
  ['40', 'Калужская область'],
  ['41', 'Камчатский край'],
  ['07', 'Кабардино-Балкарская Республика'],
  ['09', 'Карачаево-Черкесская Республика'],
  ['42', 'Кемеровская область'],
  ['43', 'Кировская область'],
  ['44', 'Костромская область'],
  ['23', 'Краснодарский край'],
  ['24', 'Красноярский край'],
  ['45', 'Курганская область'],
  ['46', 'Курская область'],
  ['48', 'Липецкая область'],
  ['49', 'Магаданская область'],
  [['50', '77'], 'Москва и Московская область'],
  ['51', 'Мурманская область'],
  ['83', 'Ненецкий автономный округ'],
  ['52', 'Нижегородская область'],
  ['53', 'Новгородская область'],
  ['54', 'Новосибирская область'],
  ['55', 'Омская область'],
  ['56', 'Оренбургская область'],
  ['57', 'Орловская область'],
  ['59', 'Пермский край'],
  ['58', 'Пензенская область'],
  ['25', 'Приморский край'],
  ['60', 'Псковская область'],
  ['01', 'Республика Адыгея'],
  ['04', 'Республика Алтай'],
  ['02', 'Республика Башкортостан'],
  ['03', 'Республика Бурятия'],
  ['08', 'Республика Калмыкия'],
  ['10', 'Республика Карелия'],
  ['11', 'Республика Коми'],
  ['12', 'Республика Марий Эл'],
  ['13', 'Республика Мордовия'],
  ['14', 'Республика Саха(Якутия)'],
  ['16', 'Республика Татарстан'],
  ['19', 'Республика Хакасия'],
  ['61', 'Ростовская область'],
  ['62', 'Рязанская область'],
  ['63', 'Самарская область'],
  [['78', '47'], 'Санкт-Петербург и Ленинградская область'],
  ['64', 'Саратовская область'],
  ['65', 'Сахалинская область'],
  ['66', 'Свердловская область'],
  ['67', 'Смоленская область'],
  ['26', 'Ставропольский край'],
  ['68', 'Тамбовская область'],
  ['69', 'Тверская область'],
  ['70', 'Томская область'],
  ['71', 'Тульская область'],
  ['72', 'Тюменская область'],
  ['18', 'Удмуртская Республика'],
  ['73', 'Ульяновская область'],
  ['27', 'Хабаровский край'],
  ['86', 'Ханты-Мансийский округ'],
  ['74', 'Челябинская область'],
  ['21', 'Чувашская Республика'],
  ['87', 'Чукотский автономный округ'],
  ['76', 'Ярославская область'],
  ['89', 'Ямало-Ненецкий автономный округ'],
];

const REGIONS = regions.map(([kladr_id, value]) => ({
  kladr_id,
  value,
  label: value,
}));

export default REGIONS;
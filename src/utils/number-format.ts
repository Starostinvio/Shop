export default function numberFormat(
  value: number,
  locale = "ru-RU",
  options = {}
) {
  if (value) {
    const integerValue = Math.floor(value);

    return new Intl.NumberFormat(locale, options).format(integerValue);
  }
}

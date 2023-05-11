import moment from 'moment';

export function extractPriceValue(price: string): number {
  const valueString = price.replace(/^\D+/g, ''); // remove currency symbol from start of string
  const value = parseFloat(valueString);
  return isNaN(value) ? 0 : value;
}

export function buildFilterString(
  title: string | null,
  price: string | null,
  date: Date | null,
) {
  let filter = '';
  if (title) {
    filter += `title == "${title}"`;
  }
  if (price) {
    const priceValue = extractPriceValue(price);
    if (filter.length > 0) {
      filter += ' AND ';
    }
    filter += `amount == ${priceValue}`;
  }
  if (date) {
    if (filter.length > 0) {
      filter += ' AND ';
    }
    filter += 'date >= $0 AND date < $1';
  }
  return filter;
}

export function formatDate(
  date: Date | null | undefined,
  format: string = 'DD.MM.YYYY',
): string {
  return date ? moment(date).format(format) : '';
}

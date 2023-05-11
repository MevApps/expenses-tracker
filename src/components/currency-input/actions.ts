export const formatText = (text: string) => {
  if (text === '$' || text === '') {
    return '';
  }
  if (text.charAt(0) !== '$') {
    return `$${text}`;
  }
  return text;
};

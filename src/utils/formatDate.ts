const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt').format(new Date(date));

export default formatDate;

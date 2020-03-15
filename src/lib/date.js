export const getDate = (dateString, type = 'full') => {
  const date = new Date(dateString);
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hour = date
    .getHours()
    .toString()
    .padStart(2, '0');
  const minutes = date
    .getMinutes()
    .toString()
    .padStart(2, '0');
  const seconds = date
    .getSeconds()
    .toString()
    .padStart(2, '0');

  const dateFormatted = `${day}/${month}/${year}`;
  const hoursFormatted = `${hour}:${minutes}:${seconds}`;

  switch (type) {
    case 'full':
      return `${dateFormatted} - ${hoursFormatted}`;
    case 'date':
      return dateFormatted;
    case 'hours':
      return `${hoursFormatted}`;
  }
};

export default function dateFormatted(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0${d.getMonth() + 1}`;
  const day = d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`;

  return `${day}/${month}/${year}`;
}

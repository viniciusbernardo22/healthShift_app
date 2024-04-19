function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

function formatTime(time) {
  const hour = time.getHours().toString().padStart(2, '0');
  const minute = time.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
}

export function formatDateTimeRange(startDateString, endDateString) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  const formattedStartDate = formatDate(startDate);
  const formattedStartTime = formatTime(startDate);
  const formattedEndTime = formatTime(endDate);

  return `${formattedStartDate} das ${formattedStartTime} às ${formattedEndTime}h`;
}

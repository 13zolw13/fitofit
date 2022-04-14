function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export const formatMinutesToHours = (totalMinutes: number) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
};

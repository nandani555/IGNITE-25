function calculateAgeAndDay(birthdateStr) {
  const birth = new Date(birthdateStr);
  const today = new Date();

  // Zero-out time for both dates to ensure accuracy
  birth.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Compute day-of-week string
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayOfWeek = days[birth.getDay()];

  // Compute age differences
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let daysDiff = today.getDate() - birth.getDate();

  if (daysDiff < 0) {
    months--;
    const prevMonth = (today.getMonth() + 11) % 12;
    const year = prevMonth === 11 ? today.getFullYear() - 1 : today.getFullYear();
    daysDiff += new Date(year, prevMonth + 1, 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years, 
    months, 
    days: daysDiff, 
    dayOfWeek
  };
}

countHours = (year, holidays) => {
  let extraHours = 0;
  holidays.forEach((day) => {
    if (new Date(`${day}/${year}`).getDay() % 6 !== 0) extraHours += 2;
  });
  return extraHours;
};

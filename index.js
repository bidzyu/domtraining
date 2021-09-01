function createCalendar(elem, year, month) {
  const calendar = document.createElement('table');
  const daysList = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const thisDate = new Date(year, month - 1); //дата с первым днем этого месяца

  const dateHeader = document.createElement('caption');
  const monthsList = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  dateHeader.textContent = `${
    monthsList[thisDate.getMonth()]
  } ${thisDate.getFullYear()}`;
  calendar.append(dateHeader); // дата над календарем

  const daysweek = document.createElement('tr');
  calendar.append(daysweek);

  for (let i = 0; i < daysList.length; i++) {
    // дни недели в заголовке
    const day = document.createElement('th');
    day.textContent = daysList[i];
    daysweek.append(day);
  }

  const lastDayDate = new Date(year, month, 0); //дата с последним днем этого месяца
  const lastDay = lastDayDate.getDate(); // число последнего дня месяца
  const firstDayWeekday = dateDay(thisDate); // день недели с которого начинается месяц
  const weeksCount = Math.ceil((firstDayWeekday + lastDay) / 7); // нужное кол-во строк

  let currentDay = 1; // число с которого начнем заполнять таблицу

  for (let i = 0; i < weeksCount; i++) {
    const week = document.createElement('tr'); //создаем строку

    for (let j = 0; j < daysList.length; j++) {
      const day = document.createElement('td'); //создаем ячейку

      if (i === 0 && j < firstDayWeekday) {
        // если месяц еще не начался заполняем пустыми ячейками
        week.append(day);
        continue;
      }
      if (i === weeksCount - 1 && currentDay > lastDay) {
        // если месяц закончился дозаполняем строку пустыми ячейками
        week.append(day);
        continue;
      }

      day.textContent = currentDay; // добавляем в ячейку текущее число
      currentDay += 1;
      week.append(day);
    }

    calendar.append(week); //добавляем в календарь неделю
  }

  function dateDay(date) {
    let day = date.getDay();
    return day ? day - 1 : 6;
  } // получаем день недели с 0 до 6 (с пн до вс)

  elem.append(calendar);
}

createCalendar(document.getElementById('calendar'), 2021, 9);

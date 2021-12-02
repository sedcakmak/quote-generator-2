// changeImage() HTMLde 32. satirda ama buttona getirilecek
// showTime()
// generateQuote()

function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let session = "AM";

  let days = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];

  let dayName = days[date.getDay()];


  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  let time = dayName + " " + h + ":" + m + " " + session;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

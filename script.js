// ===========================
// Яндекс Карта
// ===========================
function initYandexMap() {
  var myMap = new ymaps.Map("map", {
    center: [36.7337, 34.511093],
    zoom: 15,
    controls: ["zoomControl", "fullscreenControl"],
  });

  var placemark = new ymaps.Placemark(
    [36.7337, 34.511093],
    {
      hintContent: "Ваши апартаменты здесь!",
      balloonContent: "ЖК Sunset Pearl, 3 минуты до пляжа",
    },
    { preset: "islands#redHomeIcon" },
  );

  myMap.geoObjects.add(placemark);
}

if (typeof ymaps !== "undefined") {
  ymaps.ready(initYandexMap);
}

const dateError = document.getElementById("date-error");

const dateRange = flatpickr("#date-in", {
  mode: "range",
  locale: "ru",
  minDate: "today",
  dateFormat: "d.m.Y",
  onChange: function () {
    dateError.style.display = "none";
    dateRange.input.classList.remove("input-error");
  },
});

const phone = document.getElementById("phone");

phone.addEventListener("input", function () {
  if (!this.value.startsWith("+")) {
    this.value = "+" + this.value.replace(/\+/g, "");
  }
});

const guestsInput = document.getElementById("guests");
const guestsError = document.getElementById("guests-error");

guestsInput.addEventListener("input", function () {
  guestsError.style.display = "none";
  guestsInput.classList.remove("input-error");
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  let hasError = false;

  if (dateRange.selectedDates.length !== 2) {
    dateError.style.display = "block";
    dateRange.input.classList.add("input-error");
    dateRange.open();
    hasError = true;
  }

  if (!guestsInput.value.trim() || !/\d/.test(guestsInput.value)) {
    guestsError.style.display = "block";
    guestsInput.classList.add("input-error");
    hasError = true;
  }

  if (hasError) {
    e.preventDefault();
  }
});

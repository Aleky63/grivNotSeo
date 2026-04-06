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
} else {
  document.getElementById("map").innerHTML =
    '<div style="background:#e2e8f0; border-radius:30px; height:100%; display:flex; align-items:center; justify-content:center;">⚠️ Карта загружается...</div>';
}
// ---

const dateIn = flatpickr("#date-in", {
  locale: "ru",
  minDate: "today",
  dateFormat: "d.m.Y",
  onChange: function (selectedDates) {
    dateOut.set("minDate", selectedDates[0]);
  },
});
const dateOut = flatpickr("#date-out", {
  locale: "ru",
  minDate: "today",
  dateFormat: "d.m.Y",
});

const phone = document.getElementById("phone");

phone.addEventListener("input", function () {
  if (!this.value.startsWith("+")) {
    this.value = "+" + this.value.replace(/\+/g, "");
  }
});

function searchCity(city) {
  let apiKey = "bb36b4b68f1o80faf1de69ed24adt430";
  let apiUrl = `https:/api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function passengerTemplate({
  avatar,
  firstName,
  lastName,
  airline,
  flightNumber,
  departureAirport,
  departureAirportCode,
  arrivalAirport,
  arrivalAirportCode,
  departureDateTime,
  arrivalDateTime,
  airplaneType,
  ...passenger
}) {
  const template = `
    <aside class="passenger">
    <div class="passenger-info">
      <header>
        <h2>${firstName + " " + lastName}</h2>
      </header>
      <div class="profile">
      <img src="${avatar}" alt="picture of an airplane" />
        <div class="bio">
          <ul>
            <li>Airline: ${airline}</li>
            <li>Flight Number: ${flightNumber}</li>
            <li>Departure Airport: ${departureAirport}</li>
            <li>Departure Airport Code: ${departureAirportCode}</li>
            <li>Arrival Airport: ${arrivalAirport}</li>
            <li>Arrival Airport Code: ${arrivalAirportCode}</li>
            <li>Departure Date/Time: ${departureDateTime}</li>
            <li>Arrival Date/Time: ${arrivalDateTime}</li>
            <li>Airplane Type: ${airplaneType}</li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
    `;

  const element = document.createRange().createContextualFragment(template)
    .children[0];

  return element;
}

export { passengerTemplate };

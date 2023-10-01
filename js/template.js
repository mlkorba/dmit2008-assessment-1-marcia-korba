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
            <li><span class="heading">Airline:</span> ${airline}</li>
            <li><span class="heading">Flight Number:</span> ${flightNumber}</li>
            <li><span class="heading">Airplane Type:</span> ${airplaneType}</li>
            <li><span class="heading">Departure Airport:</span> ${departureAirport}</li>
            <li><span class="heading">Departure Airport Code:</span> ${departureAirportCode}</li>
            <li><span class="heading">Departure Date/Time:</span> ${departureDateTime}</li>
            <li><span class="heading">Arrival Airport:</span> ${arrivalAirport}</li>
            <li><span class="heading">Arrival Airport Code:</span> ${arrivalAirportCode}</li>
            <li><span class="heading">Arrival Date/Time:</span> ${arrivalDateTime}</li>
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

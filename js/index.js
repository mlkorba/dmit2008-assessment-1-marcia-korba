import { passengerTemplate } from "./template"


let passengerList = []

async function getPassengerData(url) {
    const response = await fetch(url) // recieve the response body
    passengerList = [ ... await response.json()] // parsing data in JSON objects
        renderPassenger(passengerList)
}

getPassengerData('/db/passengers.json')


// function renderPassenger (passengers){
//     const container = document.createElement('div')

//        passengers.forEach((passenger)=>{
//          container.append(passengerTemplate(passenger))

//        })

//        document.querySelector('#cards').append(container)

// }

function renderPassenger(passengers) {
  const container = document.createElement('div');

  const fragment = document.createDocumentFragment();

  passengers.forEach((passenger) => {
      fragment.appendChild(passengerTemplate(passenger));
  });

  container.appendChild(fragment);

  const cardsContainer = document.querySelector('#cards');
  cardsContainer.appendChild(container);
}

//Vuelos
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
  ];
  
 
// Mostrar todos los vuelos
const ShowAllFlights = () => {
  const allFlightsText = flights.map(flight => `ID: ${flight.id}, Origen: ${flight.from}, Destino: ${flight.to}, Coste: ${flight.cost}€, Escala: ${flight.layover ? 'Sí' : 'No'}`).join("\n");
  alert(`Estos son todos los vuelos:\n\n${allFlightsText}`);
}


 //Bienvenida y nombre de usuario
  const WelcomeAndGetUserName = () => {
      let UserName = prompt("¡Bienvenid@ a ISDI Coders Airlines! ¿Cómo te llamas?");
      alert("Hola " + UserName + " ¡Bienvenid@ a ISDI Coders Airlines!");
  }

//Admin añadir vuelos
const addFlight = () => {
  if (flights.length >= 15) {
    alert("Lo siento, no se pueden agregar más vuelos.");
    return;
  }
  
  const newFlight = {
    id: flights.length,
    to: prompt("Ingresa el destino del vuelo:"),
    from: prompt("Ingresa el origen del vuelo:"),
    cost: parseInt(prompt("Ingresa el coste del vuelo:")),
    layover: confirm("¿Este vuelo realiza escala?")
  };
  
  flights.push(newFlight);
  alert("El vuelo ha sido añadido correctamente.");
  ShowAllFlights();
}

//Admin eliminar vuelos
const deleteFlight = () => {
  
  const flightIdToDelete = parseInt(prompt("Ingresa el ID del vuelo a eliminar:"));
  const flightIndexToDelete = flights.findIndex(flight => flight.id === flightIdToDelete);
  
  if (flightIndexToDelete === -1) {
    alert("No se encontró ningún vuelo con ese ID.");
    return;
  }
  
  flights.splice(flightIndexToDelete, 1);
  alert("El vuelo ha sido eliminado.");
  ShowAllFlights();
}

//User función
const searchFlightsByPrice = () => {
  
  const maxCost = parseInt(prompt("Ingresa el precio máximo que estás dispuesto a pagar:"));
  const matchingFlights = flights.filter(flight => flight.cost <= maxCost);
  
  if (matchingFlights.length === 0) {
    alert("Lo siento, no hay vuelos disponibles en tu rango de precios.");
    return;
  }
  
  const matchingFlightsText = matchingFlights.map(flight => `El vuelo con origen ${flight.from} y destino ${flight.to} cuesta ${flight.cost}€.`).join("\n\n");
  alert(matchingFlightsText);
}



//Admin o user
   const GetAdminOrUser = () => {
	let keepGoing = true;
		while (keepGoing) {
	let Choice = prompt("¿Eres admin o user?");
   if (Choice === "admin") {
 	const Admin = prompt("¿Quieres añadir o eliminar vuelos?");
	if (Admin === "añadir") {
	addFlight();
	}
	else if (Admin === "eliminar") {
	deleteFlight();												
	}
   }
   if (Choice === "user") {
	searchFlightsByPrice();
   }
	keepGoing = confirm("¿Quieres realizar otra operación?");
}
   alert("¡Gracias por visitar ISDI Coders Airlines! ¡Hasta otra!");
}



WelcomeAndGetUserName();
GetAdminOrUser();
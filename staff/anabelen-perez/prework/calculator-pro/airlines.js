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
  
  
 //Bienvenida y nombre de usuario
  const WelcomeAndGetUserName = () => {
      let UserName = prompt("¡Bienvenid@ a ISDI Coders Airlines! ¿Cómo te llamas?");
      alert("Hola " + UserName + " ¡Bienvenid@ a ISDI Coders Airlines!");
  }
  
  
 // Muestra los vuelos de hoy
  const ShowFlightsToday = () => {
  let FlightsToday = "Los vuelos disponibles para hoy son: \n\n ";
  for (let i=0; i < flights.length; i++) { 
      let LayoverMessage = flights[i].layover ? "realiza escala" : "no realiza ninguna escala";
  FlightsToday += "El vuelo con origen: " + flights[i].from + ", y destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y " + LayoverMessage + ".\n";
}
alert(FlightsToday);
  }



  
  // Calculo del coste medio
  const ShowCost = () => {
  let totalCost = 0;
  for (let i = 0; i < flights.length; i++) {
    totalCost += flights[i].cost;
  }
  let averageCost = totalCost / flights.length;
  alert("El coste medio de los vuelos es de " + averageCost.toFixed(2) + "€.");
  }
  
  
  // Cuenta cuántos vuelos realizan escalas
  const ShowFlightsLayover = () => {
  let numberFlightsLayover = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].layover) {
      numberFlightsLayover++;
    }
  }
  alert("Hay " + numberFlightsLayover + " vuelos que realizan escalas.");
}
  
  // Muestra los destinos de los ultimos 5 vuelos
  const LastFiveFlights = () => {
  let LastFlightsText = "Los destinos de los últimos 5 vuelos del día son:\n\n";
  for (let i = flights.length - 5; i < flights.length; i++) {
    LastFlightsText += flights[i].to + "\n";
  }
  alert(LastFlightsText);
}
  
  //Todo junto
WelcomeAndGetUserName();
ShowFlightsToday();
ShowCost();
ShowFlightsLayover();
LastFiveFlights();
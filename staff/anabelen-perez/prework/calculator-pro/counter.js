//ARCHIVO JS

// Obtenemos los elementos del DOM
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Definimos el valor máximo del contador
const maxCount = 10;

// Función para incrementar el contador
const incrementCount = () => {
  let count = parseInt(countElement.textContent);
  if (count < maxCount) {
    count++;
    countElement.textContent = count;
    decrementButton.disabled = false;
  }
  if (count === maxCount) {
    incrementButton.disabled = true;
  }
};

// Función para decrementar el contador
const decrementCount= () => {
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    count--;
    countElement.textContent = count;
    incrementButton.disabled = false;
  }
  if (count === 0) {
    decrementButton.disabled = true;
  }
};

// Función para reiniciar el contador
const resetCount = () => {
  countElement.textContent = '0';
  decrementButton.disabled = true;
  incrementButton.disabled = false;
};

// Asignamos los eventos a los botones
incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);
resetButton.addEventListener('click', resetCount);
index.html
// ARCHIVO HTML
<Contador html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Contador</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <h1>Contador</h1>
      <p id="count">0</p>
      <div class="buttons">
        <button id="increment">Incrementar</button>
        <button id="decrement" disabled>Decrementar</button>
        <button id="reset">Reiniciar</button>
      </div>
    </div>
    <script src="counter.js"></script>
  </body>
</html>
style.css
//ARCHIVO CSS
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

h1 {
  text-align: center;
  margin-top: 0;
}

p {
  font-size: 48px;
  text-align: center;
  margin: 0;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
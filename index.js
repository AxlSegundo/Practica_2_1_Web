const express = require('express');
const app = express();
const port = 8000;

// Función para generar un objeto JSON con valores aleatorios
function generateRandomJSON() {
  return {
    number: Math.random(),
    text: Math.random().toString(36).substring(7)
  };
}

// Ruta para devolver un objeto JSON con valores aleatorios - Método GET
app.get('/random-json', (req, res) => {
  const randomJSON = generateRandomJSON();
  res.json(randomJSON);
});

// Ruta para devolver un objeto JSON con valores aleatorios - Método POST
app.post('/random-json', (req, res) => {
  const randomJSON = generateRandomJSON();
  res.json(randomJSON);
});
// Ruta para la raíz ("/") - Método GET devuelve texto plano
app.get('/', (req, res) => {
  res.send('Buenas buenas');
  res.status(200).send('Código 200 exitoso');
});

// Ruta definida por ti ("/mi-ruta") - Método POST devuelve texto plano
app.post('/mi_ruta', (req, res) => {
  res.send('Hola');
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

const app = require('./config/custom-express');

// Definindo a porta
const port = process.env.PORT || 3000;

// Iniciando servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const app = require('./config/custom-express');

const port = process.env.PORT || 3000;


// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

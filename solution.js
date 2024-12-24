const express = require('express');
const app = express();
// parse requests of content-type - application/json
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
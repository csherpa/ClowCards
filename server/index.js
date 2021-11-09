// TODO
const { app } = require('./app');
const db = require('./db');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});

const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());


app.get('/', (req, res) => res.send('Hello World!'));


app.use('/items', itemsRouter);


app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});


app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

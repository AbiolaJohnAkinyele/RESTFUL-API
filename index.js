const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Root route
app.get('/', (req, res) => res.send('Hello World!'));

// Routes
app.use('/items', itemsRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

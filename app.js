const express = require('express');
const app = express();
const port = 3000;
const body_parser = require('body-parser');
const path = require('path');

const zoneRouter = require('./Router/zone_router');
const wardRouter = require('./Router/ward_router');
const streetRouter = require('./Router/street_router');

app.use(body_parser.json());

app.use('/zone', zoneRouter);
app.use('/ward', wardRouter);
app.use('/street', streetRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

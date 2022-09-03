const express = require('express');
const routerApi = require('./routes/index');
const app = express();
const { logErrors, errorHandler, boomErrorHandler, sequelizeErrorHandler } = require('./middlewares/errorHandler');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
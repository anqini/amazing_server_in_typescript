import express from "express";
const app: express.Application = express();
import bodyParser from "body-parser";
import cors from "cors";

require('./startup/db')();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// const category = require('./routes/category');
// const search = require('./routes/search');
// const detail = require('./routes/detail');

// app.use('/api/category', category);
// app.use('/api/search', search);
// app.use('/api/detail', detail);

const port: number = Number(process.env.PORT) || 5001;
app.listen(port, () => console.log(`Server started on port ${port}`));
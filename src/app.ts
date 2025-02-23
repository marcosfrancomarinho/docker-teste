import express from 'express';
import { routers } from './routers/Routers';
const app = express();

app.use(routers);

app.listen(8080, () => console.log('server online.'));

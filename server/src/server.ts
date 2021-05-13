import express from 'express';
import io from 'socket.io';
import serverConfig from './serverConfig';
import api from "./routes/fromRoute";

const PORT = 8080 || serverConfig.port
const app = express();

app.use(express.json());
app.use('/form', api);

app.get('/', ((req, res) => {
    res.send('hello')
}));

app.listen(PORT, ()=>console.log(`server is running on ${PORT}`));

import express from 'express';
import {createServer} from "http";
import { Server } from 'socket.io';
import cors from 'cors';
import serverConfig from './serverConfig';
import api from "./routes/fromRoute";
import {getAllFromDatabase, updateFormInDatabase} from "./utilityFunctions";
import Form from "./models/form";


const PORT = 8080 || serverConfig.port
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ['http://localhost:3000', 'https://localhost:3000']
    }
});
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', api);

app.get('/', ((req, res) => {
    res.send('hello')
}));
io.on('connection', async socket => {
    //todo::
    // create admin panel
    // rename fiels to checkbox


    const formsArray = await getAllFromDatabase();
    socket.emit('connected', formsArray)

    socket.on('edit', async ({formId, update}:{formId:string, update: Form}) => {
        await updateFormInDatabase(formId, update);
        const updatedForm = await getAllFromDatabase();
        io.emit('connected', updatedForm)
    })

})

httpServer.listen(PORT, ()=>console.log(`server is running on ${PORT}`));


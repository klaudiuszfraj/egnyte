import express from 'express';
import {createServer} from "http";
import { Server } from 'socket.io';
import cors from 'cors';
import serverConfig from './serverConfig';
import api from "./routes/fromRoute";

//temp database
import db from "./db";
import Form from "./models/form";
const firestore = db.firestore();
//

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
app.use('/form', api);

app.get('/', ((req, res) => {
    res.send('hello')
}));
io.on('connection', socket => {
    //todo::
    // send forms from database,
    // rename api,
    // firestore function so separate file,
    // create edit socket
    // create admin panel
        (async () => {
            const forms = await firestore.collection('forms');
            const data = await forms.get();
            const formsArray:Form[] = []
            data.forEach(doc => {
                const form = new Form(
                    doc.data().timestamp,
                    doc.data().fields,
                    doc.id,
                )
                if (formsArray){
                }
                formsArray.push(form);
            })
            socket.emit('connected', formsArray)
        })()

    socket.on('edit', ({data}) => {
        console.log(`edited`, data)
    })

})

httpServer.listen(PORT, ()=>console.log(`server is running on ${PORT}`));


import express from 'express';

const app =express();

const add = (a:number,b:number) => a+b;

app.get('/', ((req, res) => {
    req.hostname = 'dfdf';
    console.log(add(5, 3));
    res.send('hello')
}));

app.listen(5000, ()=>console.log('server is running'))

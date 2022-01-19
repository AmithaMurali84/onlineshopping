import express from 'express';
import mongoose from 'mongoose';
import process from 'process';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
dotenv.config();
const app=express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/mycart', {
 useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/',(req, res) => 
{
    res.send('Server is ready to..');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
    next(err);
  });
const port = process.env.PORT || 5000;
app.listen( port, ()=>
{
console.log(`Serve at http://localhost:${port}`);
});
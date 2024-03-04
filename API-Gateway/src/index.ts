import express, { Application } from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import proxy from 'express-http-proxy'


const app: Application = express()
const PORT: number = Number(process.env.PORT || 8000);
const corsOptions = {
    origin:'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/auth',proxy('http://localhost:3001/'))


app.listen(PORT, () => console.log(`Gateway Running at ${PORT}`))




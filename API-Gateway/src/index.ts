import express, { Application } from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app: Application = express()
const PORT: number = Number(process.env.PORT || 8000);
app.use(cors())
app.use(express.json());
app.use(cookieParser());


app.listen(PORT, () => console.log(`Gateway Running at ${PORT}`))




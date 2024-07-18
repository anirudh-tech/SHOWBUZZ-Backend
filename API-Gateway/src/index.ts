import express, { Application } from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import proxy from 'express-http-proxy'


const app: Application = express()
const PORT: number = Number(process.env.PORT || 8000);
const corsOptions = {
    origin:'https://showbuzzz.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/auth',proxy('https://showbuzz-auth-service-latest.onrender.com/'))
app.use('/theatre',proxy('https://showbuzz-theatre-service-latest.onrender.com/'))
app.use('/movie',proxy('https://showbuzz-movie-service-latest.onrender.com/'))
app.use('/user',proxy('https://showbuzz-user-service-latest.onrender.com/'))
app.use('/payment',proxy('https://showbuzz-payment-service-latest.onrender.com/'))
app.use('/chat',proxy('https://showbuzz-chat-service-latest.onrender.com/'))


app.listen(PORT, () => console.log(`Gateway Running at ${PORT}`))




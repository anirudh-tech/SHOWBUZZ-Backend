import express,{Application, NextFunction, Request, Response} from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { adminRoutes } from "../infrastructure/routes/adminRoutes";
import { dependencies } from "../config/dependencies";
import cors from 'cors'

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3003

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
  origin:'https://showbuzzz.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}


app.use(cors(corsOptions));

app.use(()=>{
  console.log("Reached inside Movie Service");
})

app.use("/movie", adminRoutes(dependencies));

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
      const errorResponse = {
      errors: [{ message: err?.message || 'Something went wrong' }],
    };
    return res.status(500).json(errorResponse);
  })
  app.use('*', (req, res) => {
    res.send(req.url);
  });

  app.listen(PORT, () => {
    console.log(`connected to movie service at ${PORT}`) 
}) 


export default app; 

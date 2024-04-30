import express,{Application, NextFunction, Request, Response} from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { userRoutes } from "../infrastructure/routes/userRoutes";
import { dependencies } from "../config/dependencies";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3004

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('hellooo')
  next();
})

app.use("/", userRoutes(dependencies));

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

  app.listen(PORT, () => {
    console.log(`connected to user service at ${PORT}`) 
}) 

export default app; 

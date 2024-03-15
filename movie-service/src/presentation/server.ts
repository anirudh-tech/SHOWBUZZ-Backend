import express,{Application, NextFunction, Request, Response} from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { adminRoutes } from "../infrastructure/routes/adminRoutes";
import { dependencies } from "../config/dependencies";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3003

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/", adminRoutes(dependencies));

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
    console.log(`connected to movie service at ${PORT}`) 
}) 

export default app; 

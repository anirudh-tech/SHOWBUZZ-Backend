import express,{Application, NextFunction, Request, Response} from "express"
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import { authRoutes } from "../infrastructure/routes/authRoutes";
import { dependencies } from "../config/dependencies";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use("/auth", authRoutes(dependencies));

app.use((
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err);
      const errorResponse = {
      errors: [{ message: 'Something went wrong',err }],
    };
  
    return res.status(500).json(errorResponse);
  })

  app.listen(PORT, () => {
    console.log(`connected to admin service at ${PORT}`)
})

export default app;

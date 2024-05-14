import express,{Application, NextFunction, Request, Response} from "express"
import dotenv from "dotenv";
import http from "http";
import cookieParser from "cookie-parser";
import { chatRoutes } from "../infrastructure/routes/chatRoutes";
import { dependencies } from "../config/dependencies";
import connectSocketIo from "../infrastructure/socket/connection";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3006

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('hellooo')
  next();
})

const server = http.createServer(app);

connectSocketIo(server);
app.use("/", chatRoutes(dependencies));

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

  server.listen(PORT, () => {
    console.log(`connected to user service at ${PORT}`) 
}) 

export default app; 

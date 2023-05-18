import express from 'express';
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)

const PORT = 8800
app.listen(PORT,()=>{
  console.log(`${PORT} is listening!`);
})

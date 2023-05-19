import express from 'express';
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express();
app.use(express.json());
app.use(cookieParser())

// upload image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// create routes
app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/users",userRoutes)

// listen on PORT
const PORT = 8800
app.listen(PORT,()=>{
  console.log(`${PORT} is listening!`);
})

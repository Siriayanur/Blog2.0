const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/post.js')
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const categoryRoutes = require('./routes/categories.js');
const multer = require('multer');
const path = require('path');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));
const storage = multer.diskStorage({
    destination: (req, file, cb) =>
    {
        cb(null, 'images');
    },
    filename: (req, file, cb) =>
    {
        //In postman give customised name eg:'hello.jpg'
        cb(null, req.body.name)
    }
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) =>
{
    res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(console.log('connected to db')).catch(e => console.log(e));



app.listen(5000, () => {
    console.log('Server running at port 5000');
})
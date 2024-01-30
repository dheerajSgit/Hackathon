import express from 'express'
import connectDB from './db/index.js'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'


dotenv.config()

const app = express()
app.use(express.json())

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    }
)}).catch(() => {
    console.log('Server Connect failure!!!');
})


// routes
app.use('/api/auth', authRoutes)





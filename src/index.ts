import 'reflect-metadata'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'

import indexRouter from './routes/index.routes'

const app = express()
createConnection()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(indexRouter)

app.listen(4000, () => {
    console.log('server on port 4000')
})
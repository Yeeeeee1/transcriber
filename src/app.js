import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import { handle404, logErrors, handleErrors } from './handleErrors.js'
import limiter from './rateLimit.js'
/** The Express app */

const app = express()
app.use(cors())
// app.use(limiter)
app.set('trust proxy', 1)
// Redirect the root URL to the github repository
app.use(routes)
app.use(express.static('/Users/razar/HomeProject/quotes_web/build/web'));
app.use(handle404)
app.use(logErrors)
app.use(handleErrors)


export default app

import api from './api'
import * as dotenv from 'dotenv'

dotenv.config()

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 3333;

api.listen(port, async () => {
    console.log(`🍺 Server is running on http://localhost:${port}`)
})
const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(
    '/.netlify/functions/graphql',
    createProxyMiddleware({
        target: 'http://localhost:9000/.netlify/functions/graphql',
    })
)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})


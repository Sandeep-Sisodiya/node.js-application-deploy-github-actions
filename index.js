import express from 'express';

const app  = express();
const port = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World'
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

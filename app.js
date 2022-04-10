const express = require('express')

const creating = require('./routes/creating')
const reading = require('./routes/reading')
const updating = require('./routes/updating')
const deleting = require('./routes/deleting')

const app = express()
const port = 3000

app.use(express.json())

app.use(creating)
app.use(reading)
app.use(updating)
app.use(deleting)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'InvitaTech Test API' })
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.delete('/clients/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM clients WHERE client_id = ${id}`

    connection.query(sql, (error) => {
        if (!error) {
            res.status(200).json({ message: 'Data deleted successfully!' })
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

router.delete('/addresses/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM addresses WHERE address_id = ${id}`

    connection.query(sql, (error) => {
        if (!error) {
            res.status(200).json({ message: 'Data deleted successfully!' })
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

module.exports = router
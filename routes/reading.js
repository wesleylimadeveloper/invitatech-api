const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.get('/clients', (req, res) => {
    const sql = `SELECT client_id, client_name, client_gender, DATE_FORMAT(client_birth, '%d/%m/%Y') as client_birth FROM clients`

    connection.query(sql, (error, results) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

router.get('/clients/:id', (req, res) => {
    const { id } = req.params
    const sql = `SELECT client_id, client_name, client_gender, DATE_FORMAT(client_birth, '%d/%m/%Y') as client_birth FROM clients WHERE client_id = ?`

    connection.query(sql, [id], (error, results) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

router.get('/addresses/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT * FROM addresses WHERE client_id = ?'

    connection.query(sql, [id], (error, results) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

router.get('/addresses/address/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT * FROM addresses WHERE address_id = ?'

    connection.query(sql, [id], (error, results) => {
        if (!error) {
            res.status(200).json(results)
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

module.exports = router
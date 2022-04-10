const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.post('/clients', (req, res) => {
    const { name, birth, gender } = req.body
    const sql = `INSERT INTO clients(client_name, client_birth, client_gender) VALUES(?, ?, ?)`
    
    connection.query(sql, [name, birth, gender], (error) => {
        if (!error) {
            res.status(200).json({ message: 'Data registered successfully!' })
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

router.post('/addresses', (req, res) => {
    const { client_id, cep, public_area, number, complement, district, uf } = req.body
    const sql = `INSERT INTO addresses(client_id, cep, public_area, number, complement, district, uf) VALUES(?, ?, ?, ?, ?, ?, ?)`
    
    connection.query(sql, [client_id, cep, public_area, number, complement, district, uf], (error) => {
        if (!error) {
            res.status(200).json({ message: 'Data registered successfully!' })
        } else {
            res.status(400).json({ message: `${error}` })
        }
    })
})

module.exports = router
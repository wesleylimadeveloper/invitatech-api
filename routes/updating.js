const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.put('/clients/:id', (req, res) => {
    const { id } = req.params
    const { name, birth, gender } = req.body
    const sql = 'UPDATE clients SET client_name = ?, client_birth = ?, client_gender = ? WHERE client_id = ?'

    connection.query(sql, [name, birth, gender, id], (error) => {
        if (!error) {
            res.status(200).json({ message: 'Data updated successfully!' })
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

router.put('/addresses/:id', (req, res) => {
    const { id } = req.params
    const { cep, public_area, number, complement, district, uf } = req.body
    const sql = 'UPDATE addresses SET cep = ?, public_area = ?, number = ?, complement = ?, district = ?, uf = ? WHERE address_id = ?'

    connection.query(sql, [cep, public_area, number, complement, district, uf, id], (error) => {
        if (!error) {
            res.status(200).json({ message: 'Data updated successfully!' })
        } else {
            res.status(400).json({ message: 'Error' })
        }
    })
})

module.exports = router
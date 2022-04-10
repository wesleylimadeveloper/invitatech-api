const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'invitatech'
})

connection.connect((error) => {
    if (!error) {
        console.log('Database connected successfully!')
    } else {
        console.log(error)
    }
})

module.exports = connection
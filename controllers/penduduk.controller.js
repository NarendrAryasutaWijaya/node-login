'use strict'

const db = require('../db')

module.exports ={
    index: (req, res) => {
        const sql = 'SELECT* FROM data_penduduk';
        db.query(sql, (err,result)=>{
            if (err) throw (err)
            res.json({
                message: "berhasil",
                data: result
            })
        })
    }
}
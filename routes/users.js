
const express = require('express');
const router = express.Router();
const connection = require('../database')


router.get('/', function (req, res, next) {
        connection.query(`SELECT * FROM bincom.polling_unit WHERE polling_unit_id <> 0`, function(err, rows){
                console.log('entered router get')

                if(err){
                        req.flash('error', err);
                        res.render('list', {page_title: "Users - Node.js", data: ''});
                        console.log('error costly', err)
                } 
                else {
                        res.render('list', {page_title: "Users - Node.js", data: rows})
                }

        })
})

module.exports = router;
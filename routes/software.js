// var express = require('express');
// var router = express.Router();
//
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   let users=[{name:"John Doe",birthDate:"19/02/1999"}];
//   res.send(users);
// });
//
// module.exports = router;

const client = require('../models/connection')
const express = require('express');
const {log} = require("debug");
const {md5} = require("pg/lib/utils");
const app = express();


client.connect();




const createSoftware = (request, response) => {
    const software = request.body

    client.query('INSERT INTO software (software_name, software_image, software_is_game) VALUES ($1, $2, $3) returning *', [software.software_name, software.software_image, software.software_is_game], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).json(results.rows[0])
    })
}



const getGames = (request, response) => {
    client.query('SELECT * FROM software where software_is_game=true', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })

}

const getApps = (request, response) => {
    client.query('SELECT * FROM software where software_is_game=false', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getSoftwareById = (request, response) => {
    const id = parseInt(request.params.id)

    client.query('SELECT * FROM software WHERE software_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const search = (request, response) => {
    const search = "%"+(request.params.text)+"%"


    client.query('SELECT * FROM software WHERE software_name like $1', [search], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })

}


module.exports={getApps,getGames,getSoftwareById,createSoftware,search}


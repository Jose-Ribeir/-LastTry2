const client = require('../models/connection')
const express = require('express');
const {log} = require("debug");
const {md5} = require("pg/lib/utils");
const app = express();

client.connect();

const getCfg = (request, response) => {
    client.query('SELECT * FROM cfg', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCfgBySoftwareId = (request, response) => {
    const id = parseInt(request.params.id)
    client.query('Select * from cfg inner join software s on cfg.cfg_software_id = s.software_id where cfg_software_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}



const createCfg = (request, response) => {
    const cfg = request.body
    client.query('INSERT INTO cfg (cfg_name,cfg_cfg,cfg_date,cfg_description,cfg_key_action,cfg_person_id,cfg_software_id) VALUES ($1,$2,$3,$4,$5,$6,$7)', [cfg.cfg_name.toString(),cfg.cfg_cfg.toString(),cfg.cfg_date.toString(),cfg.cfg_description.toString(),cfg.cfg_key_action.toString(),cfg.cfg_person_id.toString(),cfg.cfg_software_id.toString()], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`cfg added`)
    })
}

const getCfgById = (request, response) => {
    const id = parseInt(request.params.id)
    client.query('SELECT * FROM cfg WHERE cfg_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        } client.query('UPDATE cfg SET cfg_view = cfg_view + 1 WHERE cfg_id = $1',[id], (error, results) =>{
            if(error){
                throw error
            }
            response.status(200).json(results.rows)
        })

        response.status(200).json(results.rows)
    })
}

const deleteCfg = (request, response) => {
    const id = parseInt(request.params.id)

    client.query('DELETE FROM cfg WHERE cfg_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`cfg deleted with ID: ${id}`)
    })
}

module.exports = {
    getCfg,
    getCfgById,
    createCfg,
    deleteCfg,
    getCfgBySoftwareId
}
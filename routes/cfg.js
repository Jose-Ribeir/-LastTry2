const client = require('../models/connection')
const express = require('express');
const {log} = require("debug");
const {md5} = require("pg/lib/utils");
const formidable = require("formidable");
const fs = require("fs");
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
    var filename
    var path = __dirname
    var size = path.indexOf("\\ro")
    let res = path.substring(0, size+1)
    res=res+"public\\Cfg"





    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = res + files.filetoupload.originalFilename;
        filename=newpath
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            response.write('File uploaded and moved!');
            response.end();
        });
    });

    client.query('INSERT INTO cfg (cfg_name,cfg_cfg,cfg_date,cfg_description,cfg_key_action,cfg_person_id,cfg_software_id) VALUES ($1,$2,$3,$4,$5,$6,$7)', [cfg.cfg_name,cfg.cfg_cfg,cfg.cfg_date,cfg.cfg_description,cfg.cfg_key_action,cfg.cfg_person_id,cfg.cfg_software_id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`cfg added`)
    })
}


const postFile = (req, res) => {



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
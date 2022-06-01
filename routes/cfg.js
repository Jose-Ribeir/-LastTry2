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
const getCfgBySoftware = (request, response) => {
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
    client.query('UPDATE cfg SET cfg_view = cfg_view + 1 WHERE cfg_id = $1 ',[id], (error, results) =>{
            if(error){
                throw error
            }
            client.query('SELECT *,st_x(person_loc),st_y(person_loc) FROM cfg inner join software s on cfg.cfg_software_id = s.software_id inner join person p on cfg.cfg_person_id=p.person_id WHERE cfg_id = $1 ',[id], (error, results) =>{
                if(error){
                    throw error
                }
                response.status(200).json(results.rows)
            })
        })
}


const getCfgByName = (request, response) => {
    const id = request.params.name
    client.query('UPDATE cfg SET cfg_view = cfg_view + 1 WHERE cfg_name = $1 returning * ',[id], (error, results) =>{
        if(error){
            throw error
        }
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

const search = (request, response) => {
    const search = "%"+(request.params.text)+"%"


    client.query('SELECT * FROM cfg inner join software s on cfg.cfg_software_id = s.software_id WHERE cfg_name like $1', [search], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })

}

module.exports = {
    getCfg,
    getCfgById,
    createCfg,
    deleteCfg,
    getCfgBySoftwareId,
    getCfgByName,
    search
}
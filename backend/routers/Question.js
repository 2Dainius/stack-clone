const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const questionDB = require('../models/Question')

router.post('/', async(req, res) => {
    const questionData = new questionDB({
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tag,
        user: req.body.user
    })

    await questionData.save().then((doc) => {
        res.status(201).send({
            status: true,
            data: doc
        })
    }).catch((err) => {
        res.status(400).send({
            status: false,
            message: "Error adding question",
        });
    });
});
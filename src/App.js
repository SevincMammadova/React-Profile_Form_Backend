const express = require('express');
const path = require('path');

class App{
    constructor(controller) {
        this.app = express();
        this.app.use(express.json());
        this.app.use('/', express.static(path.resolve(__dirname, '../public')));
        this.controller = controller;
        this.app.put('/add-obj', this.onPut);
    }

    getApp = () => this.app;

    onPut = (req, res) => {
        const { body } = req;
        console.log(body)
        this.controller.addObjToModel(body);
        res.end();
    }
}

module.exports = App;
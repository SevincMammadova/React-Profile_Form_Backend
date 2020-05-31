const express = require('express');
const path = require('path');

class App{
    constructor(controller) {
        this.app = express();
        this.app.use(express.json());
        this.app.use('/', express.static(path.resolve(__dirname, '../public')));
        this.controller = controller;
        this.app.post('/add-obj', this.onPost);
    }

    getApp = () => this.app;

    onPost = (req, res) => {
        const { body } = req;
        this.controller.addObjToModel(body);
        res.end();
    }
}

module.exports = App;
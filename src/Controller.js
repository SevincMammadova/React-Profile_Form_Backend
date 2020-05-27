class Controller{
    constructor(model) {
        this.model = model;
    }

    init() {
        this.model.setStorage(this.addObjToModel.bind(this));
    }

    addObjToModel(data) {
        this.model.addElement(data);  
    }
}

module.exports = Controller;
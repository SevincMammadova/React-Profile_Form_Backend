class Controller{
    constructor(model) {
        this.model = model;
    }

    init() {
        this.model.getStorage(this.addObjToModel.bind(this));
    }

    addObjToModel(data) {
        this.model.addElement(data);  
    }
}

module.exports = Controller;
class Controller{
    constructor(model) {
        this.model = model;
    }
   
    addObjToModel(data) {
        const array = this.model.getStorage();
        array.push(data);
        this.model.setStorage(array);
    }
}

module.exports = Controller;
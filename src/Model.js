class Model{
    constructor() {
        this.storage = [];
    }

    getStorage = () => this.storage;
    
    

    setStorage = array => {
        this.storage = array;
        
    }

    addElement = element => {
        this.storage.push(element);
        console.log(this.storage,'jsj');
    }
    
}

module.exports = Model;
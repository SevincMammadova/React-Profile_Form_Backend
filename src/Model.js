class Model{
    constructor() {
        this.storage = [];
    }

    getStorage = () => this.storage;
    
    

    setStorage = obj=> {
        this.storage = obj;
        
    }

    addElement = element => {
        this.storage.push(element);
        console.log(this.storage,'jsj');
    }
    
}

module.exports = Model;
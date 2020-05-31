class Model{
    constructor() {
        this.storage = [];        
    }

    getStorage = () => this.storage;

    setStorage = array => {
        this.storage = array;
        console.log(this.storage,'array');
    }
    
}

module.exports = Model;
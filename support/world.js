const {setDefaultTimeout, setWorldConstructor} = require('cucumber'),
    winston = require('../configs/winston.config').logger;
    
class World {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
    }

    info(text) {
      winston.info(text)
    }

    error(text) {
        winston.error(text)
    }
    
    
}
setDefaultTimeout(60 * 1000);
setWorldConstructor(World);


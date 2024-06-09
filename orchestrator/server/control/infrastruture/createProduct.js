const { generalExecuteInterface } = require("../domain/execute")
const createForProduct = require('../application/createForProduct')

class createProduct {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new createForProduct({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(createProduct.prototype, generalExecuteInterface);

module.exports = createProduct
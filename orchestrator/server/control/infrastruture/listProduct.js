const { generalExecuteInterface } = require("../domain/execute")
const listForProduct = require('../application/listForProduct')

class listProduct {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new listForProduct({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(listProduct.prototype, generalExecuteInterface);

module.exports = listProduct
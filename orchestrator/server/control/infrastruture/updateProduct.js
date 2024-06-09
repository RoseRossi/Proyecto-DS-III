const { generalExecuteInterface } = require("../domain/execute")
const updateForProduct = require('../application/updateForProduct')

class updateProduct {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new updateForProduct({
            req: this.req
        });
        return instance.update()
    }
}

Object.assign(updateProduct.prototype, generalExecuteInterface);

module.exports = updateProduct
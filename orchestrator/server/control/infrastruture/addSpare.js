const { generalExecuteInterface } = require("../domain/execute")
const addForSpare = require('../application/addForSpare')

class addSpare {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new addForSpare({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(addSpare.prototype, generalExecuteInterface);

module.exports = addSpare
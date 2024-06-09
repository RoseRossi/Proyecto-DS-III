const { generalExecuteInterface } = require("../domain/execute")
const updateForSpare = require('../application/updateForSpare')

class updateSpare {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new updateForSpare({
            req: this.req
        });
        return instance.update()
    }
}

Object.assign(updateSpare.prototype, generalExecuteInterface);

module.exports = updateSpare
const { generalExecuteInterface } = require("../domain/execute")
const deleteForSpare = require('../application/deleteForSpare')

class deleteSpare {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new deleteForSpare({
            req: this.req
        });
        return instance.delete()
    }
}

Object.assign(deleteSpare.prototype, generalExecuteInterface);

module.exports = deleteSpare
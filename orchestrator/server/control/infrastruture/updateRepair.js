const { generalExecuteInterface } = require("../domain/execute")
const updateForRepair = require("../application/updateForRepair");

class updateRepair {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new updateForRepair({
            req: this.req
        });
        return instance.patch()
    }
}

Object.assign(updateRepair.prototype, generalExecuteInterface);

module.exports = updateRepair
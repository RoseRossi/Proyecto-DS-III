const { generalExecuteInterface } = require("../domain/execute")
const createForRepair = require("../application/createForRepair");


class createRepair {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new createForRepair({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(createRepair.prototype, generalExecuteInterface);

module.exports = createRepair
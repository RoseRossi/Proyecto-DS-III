const { generalExecuteInterface } = require("../domain/execute")
const GetForUser = require('../application/getForUser')

class GetUser {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new GetForUser({
            req: this.req
        });
        return instance.get()
    }
}

Object.assign(GetUser.prototype, generalExecuteInterface);

module.exports = GetUser
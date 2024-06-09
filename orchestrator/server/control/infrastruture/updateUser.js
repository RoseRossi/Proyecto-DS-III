const { generalExecuteInterface } = require("../domain/execute")
const updateForUser = require('../application/updateForUser')

class updateUser {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new updateForUser({
            req: this.req
        });
        return instance.update()
    }
}

Object.assign(updateUser.prototype, generalExecuteInterface);

module.exports = updateUser
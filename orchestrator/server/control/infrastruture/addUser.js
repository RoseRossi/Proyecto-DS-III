const { generalExecuteInterface } = require("../domain/execute")
const addForUser = require('../application/addForUser')

class addUser {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new addForUser({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(addUser.prototype, generalExecuteInterface);

module.exports = addUser
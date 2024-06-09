const { generalExecuteInterface } = require("../domain/execute")
const loggedForUser = require('../application/loggedForUser')

class loggedUser {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new loggedForUser({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(loggedUser.prototype, generalExecuteInterface);

module.exports = loggedUser
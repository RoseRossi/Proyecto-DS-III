const { generalExecuteInterface } = require("../domain/execute")
const getReviews = require('../application/getForReviews')

class getReviews {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new getReviews({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(getReviews.prototype, generalExecuteInterface);

module.exports = getReviews
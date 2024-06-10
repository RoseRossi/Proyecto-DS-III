const { generalExecuteInterface } = require("../domain/execute")
const getForReviews = require('../application/getForReviews')

class getReviews {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new getForReviews({
            req: this.req
        });
        return instance.get()
    }
}

Object.assign(getReviews.prototype, generalExecuteInterface);

module.exports = getReviews
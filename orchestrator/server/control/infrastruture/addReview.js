const { generalExecuteInterface } = require("../domain/execute")
const addForReview = require('../application/addForReview')

class addReview {
    constructor(props) {
        this.req = props.req
    }

    async execute() {
        const instance = new addForReview({
            req: this.req
        });
        return instance.post()
    }
}

Object.assign(addReview.prototype, generalExecuteInterface);

module.exports = addReview
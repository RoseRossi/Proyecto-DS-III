const { generalGetInterface } = require("../domain/get");
const { fetchGetGeneral } = require('../../services/service');
const config = require('../../conf/conf.json');

class getForReviews {
    constructor(props) {
        this.req = props.req;
    }

    get() {
        return fetchGetGeneral({
            urlEndPoint: config["ms-reviews"].get
        });
    }
}

Object.assign(getForReviews.prototype, generalGetInterface);

module.exports = getForReviews;

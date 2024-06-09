const { fetchPatchGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json');
const generalPatchInterface = require("../domain/patch");

class updateForRepair {
    constructor(props) {
        this.req = props.req
    }

    patch() {
        return fetchPatchGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-repairs"].patch
        });
    }
}

Object.assign(updateForRepair.prototype, generalPatchInterface);

module.exports = updateForRepair
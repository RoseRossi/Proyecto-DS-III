const { fetchDeleteGeneral } =  require('../../services/service');
const config = require('../../conf/conf.json');
const generalDeleteInterface = require('../domain/delete');

class deleteForSpare {
    constructor(props) {
        this.req = props.req
    }

    delete() {
        return fetchDeleteGeneral({
            dataSend: this.req.body,
            urlEndPoint: config["ms-spare-parts"].delete
        });
    }
}

Object.assign(deleteForSpare.prototype, generalDeleteInterface);

module.exports = deleteForSpare
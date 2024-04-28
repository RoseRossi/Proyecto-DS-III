const GetUser =  require('./infrastruture/getUser')

const getUser = async (req, res) => {
    let state = false,
        code = 400,
        menssage = ""
        responseJson = []; 

    try {
        const instace = new GetUser({
            req: req,
            res: res
        })
        responseJson = await instace.execute()
        state = true
        code = 200
    } catch (e) {
        console.log(e)
        menssage = e
    }

    res.json({
        code: code,
        status: state,
        message: menssage,
        data: responseJson
    })
}

module.exports = {
    getUser,
}
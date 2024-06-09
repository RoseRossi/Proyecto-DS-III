const GetUser =  require('./infrastruture/getUser')
const createProduct =  require('./infrastruture/createProduct')
const updateProduct = require('./infrastruture/updateProduct')
const listProduct = require('./infrastruture/listProduct')
const addUser = require('./infrastruture/addUser')
const updateUser =  require('./infrastruture/updateUser')
const loggedUser = require('./infrastruture/loggedUser')


const getUser = async (req, res) => {
    execute_(req, res, GetUser)
}

const addProduct = async (req, res) => {
    execute_(req, res, createProduct)
}

const updateProduct_ = async (req, res) => {
    execute_(req, res, updateProduct)
}

const listProduct_ = async (req, res) => {
    execute_(req, res, listProduct)
}

const getProduct = async (req, res) => {
    execute_(req, res, GetUser)
}

const addUser_ = async (req, res) => {
    execute_(req, res, addUser)
}

const updateUser_= async (req, res) => {
    execute_(req, res, updateUser)
}

const loggedUser_ = async (req, res) => {
    execute_(req, res, loggedUser)
}

const execute_ = async (req, res, fun) => {
    let state = false,
    code = 400,
    menssage = ""
    responseJson = []; 

    try {
        const instace = new fun({
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
    addProduct,
    updateProduct_,
    listProduct_,
    getProduct,
    addUser_,
    updateUser_,
    loggedUser_
}
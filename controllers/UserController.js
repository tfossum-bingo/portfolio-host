const { User } = require('../models')
const { Op, literal, fn, col  } = require('sequelize')
// const fileName = "UserController.js"
// const report = {fileName}

// const log = (report) => console.log(`Request arrived in ${$fileName} => controller function: `)

// ${report.m} => carrying payload: `, report.p)
// const CreateUser = async (req, res) => {
//     log(file, this.req)
    
// }
const CreateUser = async (req, res) => {
    try {
        let userBody = {
            ...req.body
        }
        let user = await User.create(userBody)
        res.send(user)
    } catch (error) {
        throw error
    }
}
const DeleteUser = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_id)
        console.log(userId)
        await User.destroy({
            where: {
                id: userId
            }
        })
        res.send({
            message: `Deleted user with ide of ${userId}`
        })
    } catch (error) {
        throw error
    }
}
const ReadUser = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_id)
        let user = await User.findByPk(userId)
        res.send(user)
    } catch (error) {
        throw error
    }
}
const UpdateUser = async (req, res) => {
    try {
        let userId = parseInt(req.params.user_id)
        let updatedUser = await User.update(req.body, {
            where: {
                id: userId
            },
            returning: true
        })
        res.send(updatedUser)
    } catch (error) {
        throw error
    }
}
const LogInUser = async (req, res) => {
    console.log(req.body)
    try {
        let email = req.body.email
        let password = req.body.password

        let user = await User.findOne({
            where: {
                email: email
            },
            returning: true
        })
        if (user != null & password === user.password_digest) {
            res.send(user)
        }
        res.status(401).send({msg: 'Unauthorized'})
    } catch (error) {
        throw error
    }

}

module.exports = {
    CreateUser,
    ReadUser,
    DeleteUser,
    UpdateUser,
    LogInUser
}

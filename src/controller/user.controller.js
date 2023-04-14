import UserService from "../service/user.service.js"

async function createUser(req, res, next) {
  try {
    const user = req.body
    console.log(user)
    const { name, lastName, email, kinship_id, password, confirmPassword } =
      user
    if (!name) return res.status(400).json({ msg: "O nome é obrigatório!" })
    if (!lastName)
      return res.status(400).json({ msg: "O sobrenome é obrigatório!" })
    if (!email) return res.status(400).json({ msg: "O email é obrigatório!" })
    if (!kinship_id)
      return res.status(400).json({ msg: "O parentesco é obrigatório!" })
    if (!password)
      return res.status(400).json({ msg: "A senha não foi informada!" })
    if (!confirmPassword)
      return res
        .status(400)
        .json({ msg: "A confirmação da senha não foi informada!" })
    res.send(await UserService.createUser(user))
    logger.info(`POST - /user - ${JSON.stringify(user)}`)
  } catch (error) {
    next(error)
  }
}

async function updateUser(req, res, next) {
  try {
    const user = req.body
    res.send(await UserService.updateUser(user))
    logger.info(`PATCH - /user - ${JSON.stringify(user)}`)
  } catch (error) {
    next(error)
  }
}

async function updatePassword(req, res, next) {
  try {
    const { id, password, confirmPassword } = req.body
    console.log(req.body)
    if (!id) {
      res.json({ msg: "Id do usuário não informado!" })
    }
    if (!password) {
      res.status(400).json({ msg: "Senha não informada!" })
    }
    if (!confirmPassword) {
      res.status(400).json({ msg: "Confirmação da senha não informada!" })
    }
    await UserService.updatePassword(id, password, confirmPassword)
    res.status(200).json({ msg: "Senha alterada com sucesso!" })
    logger.info(`PUT - /user - ${JSON.stringify(req.body)}`)
  } catch (error) {
    next(error)
  }
}

async function getUsers(req, res, next) {
  try {
    res.send(await UserService.getUsers())
    logger.info(`GET - /user - ALL USERS`)
  } catch (error) {
    next(error)
  }
}

async function getUser(req, res, next) {
  try {
    res.send(await UserService.getUsers(req.params.id))
    logger.info(`GET - /user/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function getUserByEmail(req, res, next) {
  try {
    res.send(await UserService.getUserByEmail(req.query.email))
    logger.info(`GET - /user/email/user_email?email=${req.query.email}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createUser,
  updateUser,
  updatePassword,
  getUsers,
  getUser,
  getUserByEmail,
}

import ChildService from "../service/child.service.js"

async function createChild(req, res, next) {
  try {
    const child = req.body
    if (!child.name) {
      return res.status(400).json({ msg: "O nome deve ser informado!" })
    }
    if (!child.lastName) {
      return res.status(400).json({ msg: "O sobrenome deve ser informado!" })
    }
    if (!child.gender_id) {
      return res.status(400).json({ msg: "O sexo deve ser informado!" })
    }
    if (!child.birthday) {
      return res
        .status(400)
        .json({ msg: "A data de aniversário deve ser informada!" })
    }
    res.send(await ChildService.createChild(child))
    logger.info(`POST - /child - ${JSON.stringify(child)}`)
  } catch (error) {
    next(error)
  }
}

async function updateChild(req, res, next) {
  try {
    const child = req.body
    console.log(child)
    res.send(await ChildService.updateChild(child))
    logger.info(`PATCH - /child - ${JSON.stringify(child)}`)
  } catch (error) {
    next(error)
  }
}

async function getChildren(req, res, next) {
  try {
    res.send(await ChildService.getChildren(req.params.user_id))
    logger.info(`GET - /child/:${req.params.user_id} - ALL CHILDREN`)
  } catch (error) {
    next(error)
  }
}

async function getChild(req, res, next) {
  try {
    res.send(await ChildService.getChild(req.params.id))
    logger.info(`GET - /child/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function deleteChild(req, res, next) {
  try {
    const child = await ChildService.deleteChild(req.params.id)
    res.status(200).json({ msg: "Criança deletada com sucesso!" })
    logger.info(`DELETE - /child/${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createChild,
  updateChild,
  getChildren,
  getChild,
  deleteChild,
}

import GenderService from "../service/gender.service.js"

async function createGender(req, res, next) {
  try {
    const gender = req.body
    res.send(await GenderService.createGender(gender))
    logger.info(`POST - /gender - ${JSON.stringify(gender)}`)
  } catch (error) {
    next(error)
  }
}

async function updateGender(req, res, next) {
  try {
    const gender = req.body
    res.send(await GenderService.updateGender(gender))
    logger.info(`PATCH - /gender - ${JSON.stringify(gender)}`)
  } catch (error) {
    next(error)
  }
}

async function getAllGender(req, res, next) {
  try {
    res.send(await GenderService.getAllGender())
    logger.info(`GET - /gender - ALL GENDER`)
  } catch (error) {
    next(error)
  }
}

async function getGender(req, res, next) {
  try {
    res.send(await GenderService.getGender(req.params.id))
    logger.info(`GET - /gender/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function deleteGender(req, res, next) {
  try {
    res.send(await GenderService.deleteGender(req.params.id))
    logger.info(`DELETE - /gender/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createGender,
  updateGender,
  getAllGender,
  getGender,
  deleteGender,
}

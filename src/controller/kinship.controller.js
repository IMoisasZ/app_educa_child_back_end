import KinshipService from "../service/kinship.service.js"

async function createKinship(req, res, next) {
  try {
    const kinship = req.body
    res.send(await KinshipService.createKinship(kinship))
    logger.info(`POST - /kinship - ${JSON.stringify(kinship)}`)
  } catch (error) {
    next(error)
  }
}

async function updateKinship(req, res, next) {
  try {
    const kinship = req.body
    res.send(await KinshipService.updateKinship(kinship))
    logger.info(`PATCH - /kinship - ${JSON.stringify(kinship)}`)
  } catch (error) {
    next(error)
  }
}

async function getAllKinship(req, res, next) {
  try {
    res.send(await KinshipService.getAllKinship())
    logger.info(`GET - /kinship - ALL KINSHIP`)
  } catch (error) {
    next(error)
  }
}

async function getKinship(req, res, next) {
  try {
    res.send(await KinshipService.getKinship(req.params.id))
    logger.info(`GET - /kinship/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function deleteKinship(req, res, next) {
  try {
    res.send(await KinshipService.deleteKinship(req.params.id))
    logger.info(`DELETE - /kinship/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createKinship,
  updateKinship,
  getAllKinship,
  getKinship,
  deleteKinship,
}

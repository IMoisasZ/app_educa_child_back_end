import ReleaseService from "../service/release.service.js"

async function createRelease(req, res, next) {
  try {
    const release = req.body
    res.send(await ReleaseService.createRelease(release))
    logger.info(`POST - /release - ${JSON.stringify(release)}`)
  } catch (error) {
    next(error)
  }
}

async function updateRelease(req, res, next) {
  try {
    const release = req.body
    console.log(release)
    res.send(await ReleaseService.updateRelease(release))
    logger.info(`PATCH - /release - ${JSON.stringify(release)}`)
  } catch (error) {
    next(error)
  }
}

async function getReleases(req, res, next) {
  try {
    res.send(await ReleaseService.getReleases(req.params.user_id))
    logger.info(
      `GET - /release/user/:${req.params.user_id} - ALL RELEASES BY ID`
    )
  } catch (error) {
    next(error)
  }
}

async function getRelease(req, res, next) {
  try {
    res.send(await ReleaseService.getRelease(req.params.id))
    logger.info(`GET - /release/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function deleteRelease(req, res, next) {
  try {
    const { idRelease, child_id, event_id, type, point, idEventData } = req.body
    await ReleaseService.deleteRelease(
      idRelease,
      child_id,
      event_id,
      type,
      point,
      idEventData
    )
    res.status(200).json({ msg: "Lançamento deletado com sucesso!" })
    logger.info(`DELETE - /release - ${JSON.stringify(req.body)}}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createRelease,
  updateRelease,
  getReleases,
  getRelease,
  deleteRelease,
}

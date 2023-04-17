import EventDataService from "../service/event_data.service.js"

async function createEventData(req, res, next) {
  try {
    const data = req.body
    if (!data.child_id) {
      return res
        .status(400)
        .json({ msg: "Selecione uma criança para associar ao evento!" })
    }
    res.send(await EventDataService.createEventData(data))
    logger.info(`POST - /event_data - ${JSON.stringify(data)}`)
  } catch (error) {
    next(error)
  }
}

async function updateEventData(req, res, next) {
  try {
    const data = req.body
    res.send(await EventDataService.updateEventData(data))
    logger.info(`PATCH - /event_data - ${JSON.stringify(data)}`)
  } catch (error) {
    next(error)
  }
}

async function getEventsData(req, res, next) {
  try {
    res.send(await EventDataService.getEventsData(req.params.user_id))
    logger.info(
      `GET - /event_data/all:${req.params.user_id} - ALL EVENTS DATA BY USER_ID`
    )
  } catch (error) {
    next(error)
  }
}

async function getEventData(req, res, next) {
  try {
    res.send(await EventDataService.getEventData(req.params.id))
    logger.info(`GET - /event_data/:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function getEventDataByChild(req, res, next) {
  try {
    res.send(await EventDataService.getEventDataByChild(req.params.child_id))
    logger.info(`GET - /event_data/child/:${req.params.child_id}`)
  } catch (error) {
    next(error)
  }
}

async function deleteEventData(req, res, next) {
  try {
    await EventDataService.deleteEventData(req.params.id)
    res
      .status(200)
      .json({ msg: "Associação da criança ao evento foi deletada" })
    logger.info(`DELETE - /event_data/:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createEventData,
  updateEventData,
  getEventsData,
  getEventData,
  getEventDataByChild,
  deleteEventData,
}

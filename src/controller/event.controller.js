import EventService from "../service/event.service.js"

async function createEvent(req, res, next) {
  try {
    const event = req.body
    res.send(await EventService.createEvent(event))
    logger.info(`POST - /event - ${JSON.stringify(event)}`)
  } catch (error) {
    next(error)
  }
}

async function updateEvent(req, res, next) {
  try {
    const event = req.body
    res.send(await EventService.updateEvent(event))
    logger.info(`PATCH - /event - ${JSON.stringify(event)}`)
  } catch (error) {
    next(error)
  }
}

async function getEvents(req, res, next) {
  try {
    res.send(await EventService.getEvents(req.params.user_id))
    logger.info(`GET - /event/:${req.params.user_id} - ALL EVENTS`)
  } catch (error) {
    next(error)
  }
}

async function getEvent(req, res, next) {
  try {
    res.send(await EventService.getEvent(req.params.id))
    logger.info(`GET - /event/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

async function deleteEvent(req, res, next) {
  try {
    await EventService.deleteEvent(req.params.id)
    res.status(200).json({ msg: "Evento deletado com sucesso!" })
    logger.info(`DELETE - /event/id:${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createEvent,
  updateEvent,
  getEvents,
  getEvent,
  deleteEvent,
}

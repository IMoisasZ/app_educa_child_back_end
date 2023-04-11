import EventModel from "../model/event.model.js"

async function createEvent(event) {
  try {
    const newEvent = await EventModel.create(event)
    return await getEvent(newEvent.id)
  } catch (error) {
    throw error
  }
}

async function updateEvent(event) {
  try {
    await EventModel.update(event, {
      where: {
        id: event.id,
      },
    })
    return await getEvent(event.id)
  } catch (error) {
    throw error
  }
}

async function getEvents() {
  return await EventModel.findAll()
}

async function getEvent(id) {
  return await EventModel.findByPk(id)
}

async function deleteEvent(id) {
  try {
    return await EventModel.destroy({
      where: {
        id,
      },
    })
  } catch (error) {
    throw error
  }
}

export default {
  createEvent,
  updateEvent,
  getEvents,
  getEvent,
  deleteEvent,
}

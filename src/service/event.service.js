import EventRepository from "../repository/event.repository.js"

async function createEvent(event) {
  event.date.split("/")[2] + "/" + [1] + "/" + [0]
  return await EventRepository.createEvent(event)
}

async function updateEvent(event) {
  return await EventRepository.updateEvent(event)
}

async function getEvents(user_id) {
  return await EventRepository.getEvents(user_id)
}

async function getEvent(id) {
  return await EventRepository.getEvent(id)
}

async function deleteEvent(id) {
  return await EventRepository.deleteEvent(id)
}

export default {
  createEvent,
  updateEvent,
  getEvents,
  getEvent,
  deleteEvent,
}

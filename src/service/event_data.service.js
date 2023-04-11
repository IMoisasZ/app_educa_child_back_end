import EventDataRepository from "../repository/event_data.repository.js"

async function createEventData(data) {
  return await EventDataRepository.createEventData(data)
}

async function updateEventData(data) {
  return await EventDataRepository.updateEventData(data)
}

async function getEventsData(user_id) {
  return await EventDataRepository.getEventsData(user_id)
}

async function getEventData(id) {
  return await EventDataRepository.getEventData(id)
}

async function getEventDataByChild(child_id) {
  return await EventDataRepository.getEventDataByChild(child_id)
}

async function deleteEventData(id) {
  return await EventDataRepository.deleteEventData(Number(id))
}

export default {
  createEventData,
  updateEventData,
  getEventsData,
  getEventData,
  getEventDataByChild,
  deleteEventData,
}

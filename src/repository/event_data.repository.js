import EventDataModel from "../model/event_data.model.js"
import ChildModel from "../model/child.model.js"
import EventModel from "../model/event.model.js"

import { Op } from "sequelize"

async function createEventData(data) {
  const newEventData = await EventDataModel.create(data)
  return await getEventData(newEventData.id)
}

async function updateEventData(data) {
  await EventDataModel.update(data, {
    where: {
      id: data.id,
    },
  })
  return await getEventData(data.id)
}

async function getEventsData(user_id) {
  return await EventDataModel.findAll(
    {
      include: [
        {
          model: ChildModel,
        },
        {
          model: EventModel,
        },
      ],
    },
    {
      where: {
        user_id,
      },
    }
  )
}

async function getEventData(id) {
  return await EventDataModel.findByPk(id, {
    include: [
      {
        model: ChildModel,
      },
      {
        model: EventModel,
      },
    ],
  })
}

async function getEventDataByChild(child_id) {
  return await EventDataModel.findOne({
    where: {
      child_id,
    },
  })
}

async function getEventDataByChildAndEvent(child_id, event_id) {
  const response = await EventDataModel.findOne({
    where: {
      [Op.and]: [{ child_id }, { event_id }],
    },
  })
  return await getEventData(response.id)
}

async function deleteEventData(id) {
  return await EventDataModel.destroy({
    where: {
      id,
    },
  })
}

export default {
  createEventData,
  updateEventData,
  getEventsData,
  getEventData,
  getEventDataByChild,
  getEventDataByChildAndEvent,
  deleteEventData,
}

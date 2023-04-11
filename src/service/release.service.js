import ReleaseRepository from "../repository/realease.repository.js"
import EventDataRepository from "../repository/event_data.repository.js"

async function createRelease(release) {
  try {
    const newRelease = await ReleaseRepository.createRelease(release)
    const eventData = await EventDataRepository.getEventData(
      release.idEventData
    )
    const data = {
      id: release.idEventData,
      user_id: release.user_id,
      child_id: release.child_id,
      event_id: release.event_id,
      meriter:
        release.type === "demerito"
          ? Number(eventData.meriter) + 0
          : Number(eventData.meriter) + Number(release.point),
      demeriter:
        release.type === "demerito"
          ? Number(eventData.demeriter) + Number(release.point)
          : Number(eventData.demeriter) + 0,
      point:
        release.type === "demerito"
          ? Number(eventData.point) - Number(release.point)
          : Number(eventData.point) + Number(release.point),
    }

    await EventDataRepository.updateEventData(data)

    return newRelease
  } catch (error) {
    throw error
  }
}

async function updateRelease(release) {
  try {
    const eventDataSearch = await EventDataRepository.getEventData(
      release.idEventData
    )

    const data = {
      id: release.idEventData,
      meriter:
        release.type === "demerito"
          ? 0
          : Number(eventDataSearch.meriter) - Number(release.point),
      demeriter:
        release.type === "merito"
          ? 0
          : Number(eventDataSearch.demeriter) - Number(release.point),
      point:
        release.type === "demerito"
          ? Number(eventDataSearch.point) + Number(release.point)
          : Number(eventDataSearch.point) - Number(release.point),
    }

    const dataUpdateEventData = await EventDataRepository.updateEventData(data)

    if (JSON.stringify(dataUpdateEventData).length > 0) {
      return await ReleaseRepository.updateRelease(release)
    }
  } catch (error) {
    throw error
  }
}

async function getReleases(user_id) {
  return await ReleaseRepository.getReleases(user_id)
}

async function getRelease(id) {
  return await ReleaseRepository.getRelease(id)
}

async function deleteRelease(
  idRelease,
  child_id,
  event_id,
  type,
  point,
  idEventData
) {
  const eventDataSearch = await EventDataRepository.getEventData(idEventData)

  const data = {
    id: idEventData,
    meriter:
      type === "demerito" ? 0 : Number(eventDataSearch.meriter) - Number(point),
    demeriter:
      type === "merito" ? 0 : Number(eventDataSearch.demeriter) - Number(point),
    point:
      type === "demerito"
        ? Number(eventDataSearch.point) + Number(point)
        : Number(eventDataSearch.point) - Number(point),
  }

  const dataUpdateEventData = await EventDataRepository.updateEventData(data)

  if (JSON.stringify(dataUpdateEventData).length > 0) {
    return await ReleaseRepository.deleteRelease(idRelease)
  }
}

export default {
  createRelease,
  updateRelease,
  getReleases,
  getRelease,
  deleteRelease,
}

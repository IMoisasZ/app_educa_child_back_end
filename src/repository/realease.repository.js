import ReleaseModel from "../model/release.model.js"
import ChildModel from "../model/child.model.js"
import EventModel from "../model/event.model.js"

async function createRelease(release) {
  try {
    const newRelease = await ReleaseModel.create(release)
    return await getRelease(newRelease.id)
  } catch (error) {
    throw error
  }
}

async function updateRelease(release) {
  await ReleaseModel.update(release, {
    where: {
      id: release.id,
    },
  })
  return await getRelease(release.id)
}

async function getReleases(user_id) {
  return await ReleaseModel.findAll({
    include: [
      {
        model: ChildModel,
      },
      {
        model: EventModel,
      },
    ],
    where: {
      user_id,
    },
  })
}

async function getRelease(id) {
  return await ReleaseModel.findByPk(id)
}

async function deleteRelease(idRelease) {
  return await ReleaseModel.destroy({
    where: {
      id: idRelease,
    },
  })
}

export default {
  createRelease,
  updateRelease,
  getReleases,
  getRelease,
  deleteRelease,
}

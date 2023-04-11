import GenderModel from "../model/gender.model.js"

async function createGender(gender) {
  const newGender = await GenderModel.create(gender)
  return await getGender(newGender.id)
}

async function updateGender(gender) {
  await GenderModel.update(gender, {
    where: {
      id: gender.id,
    },
  })
  return await getGender(gender.id)
}

async function getAllGender() {
  return await GenderModel.findAll()
}

async function getGender(id) {
  return await GenderModel.findByPk(id)
}

async function deleteGender(id) {
  return await GenderModel.destroy({
    where: {
      id,
    },
  })
}

export default {
  createGender,
  updateGender,
  getAllGender,
  getGender,
  deleteGender,
}

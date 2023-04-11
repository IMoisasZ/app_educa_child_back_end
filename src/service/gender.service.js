import GenderRepository from "../repository/gender.repository.js"

async function createGender(kinship) {
  return await GenderRepository.createGender(kinship)
}

async function updateGender(kinship) {
  return await GenderRepository.updateGender(kinship)
}

async function getAllGender() {
  return await GenderRepository.getAllGender()
}

async function getGender(id) {
  return await GenderRepository.getGender(id)
}

async function deleteGender(id) {
  return await GenderRepository.deleteGender(id)
}

export default {
  createGender,
  updateGender,
  getAllGender,
  getGender,
  deleteGender,
}

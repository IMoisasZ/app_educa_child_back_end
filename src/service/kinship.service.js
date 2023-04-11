import KinshipRepository from "../repository/kinship.repository.js"

async function createKinship(kinship) {
  return await KinshipRepository.createKinship(kinship)
}

async function updateKinship(kinship) {
  return await KinshipRepository.updateKinship(kinship)
}

async function getAllKinship() {
  return await KinshipRepository.getAllKinship()
}

async function getKinship(id) {
  return await KinshipRepository.getKinship(id)
}

async function deleteKinship(id) {
  console.log(id)
  return await KinshipRepository.deleteKinship(id)
}

export default {
  createKinship,
  updateKinship,
  getAllKinship,
  getKinship,
  deleteKinship,
}

import KinshipModel from "../model/kinship.model.js"

async function createKinship(kinship) {
  const newKinship = await KinshipModel.create(kinship)
  return await getKinship(newKinship.id)
}

async function updateKinship(kinship) {
  await KinshipModel.update(kinship, {
    where: {
      id: kinship.id,
    },
  })
  return await getKinship(kinship.id)
}

async function getAllKinship() {
  return await KinshipModel.findAll()
}

async function getKinship(id) {
  return await KinshipModel.findByPk(id)
}

async function deleteKinship(id) {
  return await KinshipModel.destroy({
    where: {
      id,
    },
  })
}

export default {
  createKinship,
  updateKinship,
  getAllKinship,
  getKinship,
  deleteKinship,
}

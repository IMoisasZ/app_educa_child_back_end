import ChildRepository from "../repository/child.repository.js"

async function createChild(child) {
  child.birthday.split("/")[2] + "/" + [1] + "/" + [0]
  return await ChildRepository.createChild(child)
}

async function updateChild(child) {
  return await ChildRepository.updateChild(child)
}

async function getChildren(user_id) {
  return await ChildRepository.getChildren(user_id)
}

async function getChild(id) {
  return await ChildRepository.getChild(id)
}

async function deleteChild(id) {
  return await ChildRepository.deleteChild(id)
}

export default {
  createChild,
  updateChild,
  getChildren,
  getChild,
  deleteChild,
}

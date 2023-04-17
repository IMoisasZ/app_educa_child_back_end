import ChildRepository from "../repository/child.repository.js"

async function createChild(child) {
  if (!child.nickName) {
    child.nickName = child.name
  }
  return await ChildRepository.createChild(child)
}

async function updateChild(child) {
  if (!child.nickName) {
    child.nickName = child.name
  }
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

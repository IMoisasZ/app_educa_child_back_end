import ChildModel from "../model/child.model.js"

async function createChild(child) {
  try {
    const newChild = await ChildModel.create(child)
    return await getChild(newChild.id)
  } catch (error) {
    throw error
  }
}

async function updateChild(child) {
  try {
    await ChildModel.update(child, {
      where: {
        id: child.id,
      },
    })
    return await getChild(child.id)
  } catch (error) {
    throw error
  }
}

async function getChildren(user_id) {
  try {
    return await ChildModel.findAll({
      where: {
        user_id,
      },
    })
  } catch (error) {
    throw error
  }
}

async function getChild(id) {
  return await ChildModel.findByPk(id)
}

async function deleteChild(id) {
  try {
    return await ChildModel.destroy({
      where: {
        id,
      },
    })
  } catch (error) {
    throw error
  }
}

export default {
  createChild,
  updateChild,
  getChildren,
  getChild,
  deleteChild,
}

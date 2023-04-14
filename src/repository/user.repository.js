import UserModel from "../model/user.model.js"

async function createUser(user) {
  try {
    const newUser = await UserModel.create(user)
    return await getUser(newUser.id)
  } catch (error) {
    console.log({ error })
  }
}

async function updateUser(user) {
  await UserModel.update(user, {
    where: {
      id: user.id,
    },
  })
  return await getUser(user.id)
}

async function updatePassword(id, password) {
  try {
    await UserModel.update(
      {
        password,
      },
      {
        where: {
          id,
        },
      }
    )
    return getUser(id)
  } catch (error) {
    throw error
  }
}

async function getUsers() {
  return await UserModel.findAll()
}

async function getUser(id) {
  return await UserModel.findByPk(id)
}

async function getUserByEmail(email) {
  return await UserModel.findOne({
    where: {
      email,
    },
  })
}

export default {
  createUser,
  updateUser,
  updatePassword,
  getUsers,
  getUser,
  getUserByEmail,
}

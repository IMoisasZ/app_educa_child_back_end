import UserRepository from "../repository/user.repository.js"

async function createUser(user) {
  try {
    user.user_id_firebase = 1000
    console.debug("user_fire", user.user_id_firebase)
    if (user.password === user.confirmPassword) {
      const user_return = await UserRepository.createUser(user)
      user_return.user_id_firebase = undefined
      return user_return
    }
  } catch (error) {
    throw error
  }
}

async function updateUser(user) {
  return await UserRepository.updateUser(user)
}

async function getUsers() {
  return await UserRepository.getUsers()
}

async function getUser(id) {
  return await UserRepository.getUser(id)
}

async function getUserByEmail(email) {
  return await UserRepository.getUserByEmail(email)
}

export default {
  createUser,
  updateUser,
  getUsers,
  getUser,
  getUserByEmail,
}

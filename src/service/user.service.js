import UserRepository from "../repository/user.repository.js"

async function createUser(user) {
  try {
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

async function updatePassword(id, password, confirmPassword) {
  try {
    if (password !== confirmPassword) {
      new Error("As senhas não conferem")
    }
    return await UserRepository.updatePassword(id, password)
  } catch (error) {
    throw error
  }
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
  updatePassword,
  getUsers,
  getUser,
  getUserByEmail,
}

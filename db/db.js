const fs = require('fs')

export const usersArray = JSON.parse(fs.readFileSync(__dirname + '/../assets/users.json', 'utf8'))

export const findUserBy = (searchValue, searchKey) => {
  const user = {
    model: null,
    indexInArray: null,
  }

  const suitableModelIndex = binarySearch(usersArray, searchValue, searchKey)
  user.model = usersArray[suitableModelIndex]
  user.indexInArray = suitableModelIndex

  return user
}
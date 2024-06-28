
const getAllUsers = () => {
    return fetch('https://dummyjson.com/users')
        .then(value => value.json())
}
const getPostOUserById = (id: number) => {
    return fetch('https://dummyjson.com/users/'+id+'/posts')
        .then(value => value.json())
}

export {getAllUsers, getPostOUserById};

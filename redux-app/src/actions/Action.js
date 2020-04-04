export const getAPI = (dispatch, data) => {
    return new Promise(resolve => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => resolve(json))
    })
}
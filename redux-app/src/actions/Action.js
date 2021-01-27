//https://store-webapi.herokuapp.com/swagger-ui.html#/produto-controller

const url = 'https://store-webapi.herokuapp.com/api/produto';

export const getAPI = () => {
    return new Promise(resolve => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
    })
}

export const postAPI = (data) => {
    return new Promise(resolve => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => resolve(json))
    })
}

export const putAPI = (data) => {
    return new Promise(resolve => {
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => resolve(json))
    })
}

export const deleteAPI = (id) => {
    return new Promise(resolve => {
        fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
            .then(response => response)
            .then(json => resolve(json))
    })
}
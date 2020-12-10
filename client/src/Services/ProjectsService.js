import ApiClient from "./ApiClient"

export const CreateProject = async (payload) =>  {
    try {
        let params = '41be33bc-6aca-4c12-ad05-cff4ed120075' 
        console.log(params)
        const response = await ApiClient.post(`projects/create/${params}`, payload)
        console.log('after post',response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const ReadProject = async (payload, params) =>  {
    try {
        const response = await ApiClient.get(`projects/read${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetAllProjects = async (payload, params) =>  {
    try {
        const response = await ApiClient.get(`projects/${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UpdateProject = async (payload, params) =>  {
    try {
        const response = await ApiClient.put(`projects/update${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const DeleteProject = async (payload, params) =>  {
    try {
        const response = await ApiClient.delete(`projects/${params}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


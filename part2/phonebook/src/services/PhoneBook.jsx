import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	// const request = axios.get(baseUrl);
	return axios.get(baseUrl);
};

const create = (newObject) => {
	return axios.post(baseUrl, newObject);
};

const remove = (id) => {
	return axios.delete(`${baseUrl}/${id}`);
};
const put = (id, newObject) => {
	return axios.put(`${baseUrl}/${id}`, newObject);
};

export default { getAll: getAll, create: create, remove: remove, put: put };

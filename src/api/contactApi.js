import axios from 'axios';

export default class ContactApi {
	static getAllContacts() {
		return axios.get('/api/contacts')
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}

	static fetchAddress(id) {
		return axios.get('/api/contact/' + id)
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}
}
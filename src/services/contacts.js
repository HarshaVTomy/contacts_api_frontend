import axios from 'axios';

class ContactsDataService {
  getAll(token) {
    return axios.get('http://localhost:8000/contacts/', {
      headers: {
        Authorization: `Token ${token}`
      }
    });
  }

  createContact(data, token) {
    return axios.post("http://localhost:8000/contacts/", data, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
  }

  updateContact(id, data, token) {
    return axios.put(`http://localhost:8000/contacts/${id}/`, data, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
  }

  deleteContact(id, token) {
    return axios.delete(`http://localhost:8000/contacts/${id}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
  }
}

export default new ContactsDataService();

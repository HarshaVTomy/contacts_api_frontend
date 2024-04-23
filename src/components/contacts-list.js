// ContactsList.js
import React from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ContactsList = () =>{
  const navigate = useNavigate();
  const [data, setData]= React.useState([]);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/contacts/list/')
    .then(response => {
      console.log(response.data,"from response")
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[])
console.log(data,"contactlist")
  const handleViewClick = (id) => navigate(`/contacts/${id}/`);
  //alert(name);
  return (
    <div className="App">
      <h2>Contacts List</h2>
      <Card>
        <Card.Body>
          <Card.Title>Contact Name</Card.Title>
          <Card.Text>
          </Card.Text>
          <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Full Name</th>
                <th>Nick Name</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>

             {data?.map((column,index) => {
              return(
         
              <tr>
                <td>{index+1}</td>
                <td>{column.first_name}</td>
                <td>{column.last_name}</td>
                <td>{column.first_name+ column.last_name}</td>
                <td>{column.nickname}</td>
                <td>{column.phone_number}</td>
                <td>{column.email}</td>
                <td>
                <span>
                <Button variant="success" onClick={()=>handleViewClick(column.id)}>View</Button>
                </span>
                <span>
                <Button variant="primary">Edit</Button>
                </span>
                <span className="ml-4">
                <Button variant="danger" onClick={()=>setShow(true)}>Delete</Button>
                </span>
                </td>
              </tr>)})}
            </tbody>
          </Table>
        </div>    
         {/* <Button variant="primary">Edit</Button>
  <Button variant="danger">Delete</Button>*/}
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={()=>setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Do you want to delete this data?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            No
          </Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  );
}

export default ContactsList;

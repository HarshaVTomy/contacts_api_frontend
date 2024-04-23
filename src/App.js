// import React, { useState } from 'react';
// //import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import ContactsCreate from './components/contacts-create';
// import ContactsList from './components/contacts-list';
// import ContactsDetail from './components/contact-detail';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// function App() {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');
//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
//   return (
//     <Router>
//       <div className="App">
//         {/* <Navbar bg="primary" variant="dark">
//           <Navbar.Brand as={Link} to="/">Contacts App</Navbar.Brand>
//           <Nav className="mr-auto">
//             <Nav.Link as={Link} to="/contacts/list/">Contacts List</Nav.Link>
//           </Nav>
//           <Button as={Link} to="/contacts/create/" variant="light">Add Contact</Button>
//         </Navbar> */}
//           <Nav variant="pills" activeKey="1" onSelect={() =>handleSelect()}>
//       <Nav.Item>
//         <Nav.Link eventKey="1" href="/">
//           NavLink 1 content
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="2" href="/contacts/list" title="Item">
//           list contact
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="3" href="/contacts/create/">
//          contact create
//         </Nav.Link>
// </Nav.Item>
//     </Nav>
 
    
//         <div className="container mt-4">
//           <Routes>
//             <Route exact  path="/" render={(props) =>
//               <div>
//                 <h2>Welcome to Contacts App</h2>
//                 {/* Display added contacts */}
//                 <ContactsList {...props} token={token} />
//               </div>
//             }>
//             </Route>
//             <Route  path="/contacts/list/" render={(props) =>
//               <ContactsList {...props} token={token} />
//             }>
//             </Route>
//             <Route exact path="/contacts/create/" render={(props)=>
//               <ContactsCreate {...props} token={token} />
//             }>
//             </Route>
//             <Route exact path="/contacts/:id/" render={(props)=>
//               <ContactsDetail {...props} token={token} />
//             }>
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactsCreate from './components/contacts-create';
import ContactsList from './components/contacts-list';
import ContactsDetail from './components/contact-detail';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Router>
      <div className="App">
        {/* <Navbar bg="primary" variant="dark">
          <Navbar.Brand as={Link} to="/">Contacts App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/contacts/list/">Contacts List</Nav.Link>
          </Nav>
          <Button as={Link} to="/contacts/create/" variant="light">Add Contact</Button>
        </Navbar> */}
        <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="/">Contacts App</Navbar.Brand>
          <Nav  className="me-auto"  activeKey="1" onSelect={handleSelect}>
          <Nav.Item>
          <Nav.Link eventKey="1" href="/" title="listcontact">
            Contacts App
          </Nav.Link>
        </Nav.Item>
      {/*<Nav.Item>
        <Nav.Link eventKey="2" href="/contacts/list/" title="Item">
          list contact
        </Nav.Link>
      </Nav.Item>*/}
      <Nav.Item>
        <Nav.Link eventKey="3" href="/contacts/create/">
         contact create
        </Nav.Link>
</Nav.Item>
    </Nav>
    </Container>
 </Navbar>
    
        <div className="container mt-4">
        <div>
        <h2>Welcome to Contacts App</h2>
        </div>
          <Routes>
            <Route path="/"  exact element=
          
          
                <ContactsList  />
            >
            
            </Route>
           {/* <Route  path="/contacts/list/" render={(props) =>
              <ContactsList {...props} token={token} />
            }>
          </Route>*/}
            <Route  path="/contacts/create/"  exact element=
              <ContactsCreate  />
            >
            </Route>
            <Route  path="/contacts/:id/"  exact element=
              <ContactsDetail />
            >
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

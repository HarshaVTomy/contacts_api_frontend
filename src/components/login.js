// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const Login = (props) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const onChangeUsername = (e) => {
//     const username = e.target.value;
//     setUsername(username);
//   }

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.login({ username: username, password: password });
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formUsername">
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="text" placeholder="Enter username" value={username} onChange={onChangeUsername} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Enter password" value={password} onChange={onChangePassword} />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Login
//       </Button>
//     </Form>
//   );
// }

// export default Login;
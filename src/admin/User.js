import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Users() {
  const [users, setUsers] = useState([]);

  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDeleteUser = useCallback((id) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  }, []);

  const handleEditUser = useCallback(
    (id) => {
      const editedName = prompt("Enter new name:");
      if (editedName) {
        const updatedUser = users.find((user) => user.id === id);
        updatedUser.name = editedName;
        fetch(`http://localhost:4000/users/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then(() => {
            setUsers((prevUsers) =>
              prevUsers.map((user) => (user.id === id ? updatedUser : user))
            );
          })
          .catch((error) => console.error("Error editing user:", error));
      }
    },
    [users]
  );

  const handleAddUser = useCallback(() => {
    if (!newUserName.trim() || !newUserRole.trim()) {
      alert("Name and role cannot be empty");
      return;
    }
    const newUser = {
      id: uuidv4(),
      name: newUserName,
      role: newUserRole,
    };
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(() => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setNewUserName("");
        setNewUserRole("");
      })
      .catch((error) => console.error("Error adding user:", error));
  }, [newUserName, newUserRole]);

  return (
    <Container fluid>
      <h2 className="text-center mb-4">Manage Users</h2>
      <Row>
        <Col md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddUser();
            }}
          >
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                value={newUserRole}
                onChange={(e) => setNewUserRole(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleEditUser(user.id)}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Users;

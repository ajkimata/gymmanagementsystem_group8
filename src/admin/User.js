import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Alert,
  Pagination,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const apiUrl = "http://localhost:4000/users";

const UserForm = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role_type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newUser.username.trim() || !newUser.role_type.trim()) {
      alert("Username and role type cannot be empty");
      return;
    }
    await onAddUser(newUser);
    setNewUser({ username: "", email: "", password: "", role_type: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRoleType">
        <Form.Label>Role Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter role type"
          name="role_type"
          value={newUser.role_type}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
};

const UserTable = ({ users, onEditUser, onDeleteUser }) => (
  <Table striped bordered hover responsive>
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Role Type</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.role_type}</td>
          <td>
            <Button
              variant="warning"
              onClick={() => onEditUser(user.id)}
              className="me-2"
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => onDeleteUser(user.id)}>
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
const UserEditModal = ({ show, onHide, user, onUpdateUser }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  useEffect(() => {
    if (show) {
      setEditedUser({ ...user });
    }
  }, [user, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => {
      const updatedUser = { ...prevUser, [name]: value };
      console.log(updatedUser); // Check if state is updating correctly
      return updatedUser;
    });
  };

  console.log("User from props:", user); // Check if user prop is received correctly
  console.log("Edited user state:", editedUser); // Check if editedUser state is correct

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editedUser) {
      await onUpdateUser(editedUser);
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={editedUser.username || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={editedUser.email || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={editedUser.password || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Role Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter role type"
              name="role_type"
              value={editedUser.role_type || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Error fetching users");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = useCallback(async (id) => {
    try {
      await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }, []);

  const handleEditUser = useCallback(
    (id) => {
      const userToEdit = users.find((user) => user.id === id);
      setSelectedUser(userToEdit);
    },
    [users]
  );
  const handleUpdateUser = useCallback(async (updatedUser) => {
    try {
      await fetch(`${apiUrl}/${updatedUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }, []);

  const handleAddUser = async (newUserData) => {
    const newUser = { id: uuidv4(), ...newUserData };
    try {
      await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container fluid>
      <h2 className="text-center mb-4">Manage Users</h2>
      <Row>
        <Col md={6}>
          <UserForm onAddUser={handleAddUser} />
        </Col>
        <Col md={6}>
          <UserTable
            users={currentUsers}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
          <Pagination>
            {[...Array(totalPages).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => setCurrentPage(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
      <UserEditModal
        show={selectedUser != null}
        onHide={() => setSelectedUser(null)}
        user={selectedUser || {}}
        onUpdateUser={handleUpdateUser}
      />
    </Container>
  );
}

export default Users;

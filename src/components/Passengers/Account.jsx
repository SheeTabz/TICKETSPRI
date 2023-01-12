import { React, useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DashboardTemp from "../DashboardTemp";
function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [editing, setEditing] = useState(false);
  // Fetch the user details from the backend when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://your-rails-backend.com/users/1");
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setDescription(data.description);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://your-rails-backend.com/users/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, description }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    setEditing(false);
  }
  return (
    <DashboardTemp>
    
    <div className="flex justify-between  border-b-2 border-gray-200 p-4 text-center">
            <h1 className=" text-3xl font-medium">Account</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Save
            </button>
          </div>
          <div className="w-full p-5">
      {editing ? (
        <Container>
          <Row>
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName" >
                  <Form.Label class="block uppercase tracking-wide text-gray-700  font-bold mb-2 ">Name</Form.Label>
                  <Form.Control
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 "
                    required
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label class="block uppercase tracking-wide text-gray-700  font-bold mb-2 ">Email address</Form.Label>
                  <Form.Control
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 "
                    required
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                  <Form.Label class="block uppercase tracking-wide text-gray-700  font-bold mb-2 ">Description</Form.Label>
                  <Form.Control
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 "
                    required
                    as="textarea"
                    rows="3"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button type="submit">Save</Button>
                <br />
                <br />
                <Button onClick={() => setEditing(false)}>Cancel</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          <p>
            <strong className="uppercase"> SACCO Name:</strong>
            {name}
          </p>
          <p>
            <strong className="uppercase">Email:</strong> {email}
          </p>
          <p>
            <strong className="uppercase">Description:</strong> {description}
          </p>
          <Button onClick={() => setEditing(true)}>Edit</Button>
        </div>
      )}
    </div>
    </DashboardTemp>
  );
}
export default Account;
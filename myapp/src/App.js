import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./components/footer"; 

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{margin:"120px",backgroundColor:"beige"}}>
            <div style={{textAlign:"center"}}>
                <h1>theMox login</h1>
            </div>
            <div>
                            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    your e-mail is secured
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginLeft:"29pc"}}>
                    Submit
                </Button>
                </Form>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;

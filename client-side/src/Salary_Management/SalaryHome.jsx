import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";

function SalaryHome() {
  return (
    <Card>
      <Card.Header as="h1">Salary Management</Card.Header>
      <Card.Body>
        <Card.Title>Employee Salary Management</Card.Title>
        <Card.Text>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            style={{marginTop:"2rem"}}
          >
            <Tab eventKey="home" title="Salary Summery">
              <h1>hasgkjfgsjkdjkfsjdf</h1>
            </Tab>
            <Tab eventKey="profile" title="All Deduction">
              <h3>hasgkjfgsjkdjkfsjdf</h3>
            </Tab>
          </Tabs>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SalaryHome;

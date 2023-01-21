import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SalarySummery from "./SalarySummary/SalarySummary";
import Deuduction from "./SalaryDeduction/Deduction";

function SalaryManagement() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "right",marginBottom:"10px" }}>
        <Button variant="outline-success">
          Add <b>Basic</b> Salary of<br/> <b>New </b>Employee
        </Button>
      </div>
      <Card>
        <Card.Header as="h1">
          <h1><b>Salary Management</b></h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>Employee Salary Management</Card.Title>
          <Card.Text>
            <Tabs
              defaultActiveKey="summery"
              id="uncontrolled-tab-example"
              className="mb-3"
              style={{ marginTop: "2rem" }}
              unmountOnExit={true}
            >
              <Tab eventKey="summery" title=<b>Salary Summary</b> >
                <SalarySummery />
              </Tab>
              <Tab eventKey="deduction" title=<b>All Deduction</b> >
                <Deuduction />
              </Tab>
            </Tabs>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SalaryManagement;

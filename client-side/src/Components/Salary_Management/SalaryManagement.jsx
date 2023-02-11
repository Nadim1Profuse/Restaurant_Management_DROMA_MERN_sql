import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SalarySummery from "./SalarySummary/SalarySummary";
import AccessionOrDeuduction from "./AccessionOrDeduction/AccessionOrDeduction";
import AddOrUpdateBasicSalary from "./AddOrUpdateBasicSalary";
import Payment from "./Payment/Payment";
import { fetchAsynchEmployeeBasic,fetchAsynchEmpAccession,fetchAsynchDeduction} from "../../Redux/fetchEmployeesDetails/employeesDetailsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncBonus, fetchAsynchSpecialAward, fethcAsyncOverTime } from "../../Redux/fetchEmployeesDetails/accessionByType";

function SalaryManagement() {
  const [showBtn, setShowBtn] = useState(true);
  const [isBasicSalRender, setBasicSalRender] = useState(false);

  const dispatch=useDispatch();

  const addBaseSalary = () => {
    console.log("add Base Salary ");
    setBasicSalRender(true);
    setShowBtn(false);
  };

  useEffect(()=>{
    dispatch(fetchAsynchEmployeeBasic())
    dispatch(fetchAsynchEmpAccession())
    dispatch(fetchAsynchDeduction())
    dispatch(fetchAsyncBonus());
    dispatch(fethcAsyncOverTime());
    dispatch(fetchAsynchSpecialAward());
  },)

  return (
    <>
      <div
        style={{
          display: showBtn ? "flex" : "none",
          justifyContent: "right",
          marginBottom: "10px",
        }}
      >
        <Button variant="outline-success" onClick={addBaseSalary}>
          Add <b>Basic</b> Salary of
          <br /> <b>New </b>Employee
        </Button>
      </div>
      <Card>
        <Card.Header as="h2">
          <h1>
            <b>Salary Management</b>
          </h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {isBasicSalRender ? (
              <AddOrUpdateBasicSalary
                closeBasicSalary={() => {
                  setBasicSalRender(false);
                  setShowBtn(true);
                  
                }}
              />
            ) : (
              <Tabs
                defaultActiveKey="summery"
                id="uncontrolled-tab-example"
                className="mb-3"
                unmountOnExit={true}
              >
                <Tab
                  eventKey="summery"
                  title=<Button
                    onClick={() => {
                      setShowBtn(true);
                      setBasicSalRender(false);
                    }}
                    variant="light"
                  >
                    <b>Salary Summary</b>
                  </Button>
                >
                  <SalarySummery />
                </Tab>
                <Tab
                  eventKey="deduction"
                  title=<Button
                    onClick={() => setShowBtn(false)}
                    value="accDed"
                    variant="light"
                  >
                    <b>Accession / Deduction</b>
                  </Button>
                >
                  <AccessionOrDeuduction />
                </Tab>

                <Tab
                  eventKey="payment"
                  title=<Button
                    onClick={() => setShowBtn(false)}
                    value="payment"
                    variant="light"
                  >
                    <b>Payment</b>
                  </Button>
                >
                  <Payment />
                </Tab>
              </Tabs>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SalaryManagement;

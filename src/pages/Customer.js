import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Context } from "..";
import AdminNavbar from "../Components/AdminNavbar";
import { Col, Row } from "react-bootstrap";
import trash from "./../imgs/trash_icon.svg";
import edit from "./../imgs/edit_icon.svg";
import {
  createCustomer,
  fetchCustomers,
  deleteCustomer,
  fetchOneCustomer,
} from "../http/CustomerApi";
import EditCustomerModal from "../Components/EditCustomerModal";
import MyModal from "../UI/MyModal/MyModal";

const Customer = observer(() => {
  const { customer } = useContext(Context);
  const [value, setValue] = useState("");
  const [customerEdit, setCustomerEdit] = useState({});
  const [edd, setEdd] = useState(false);

  const addCustomer = () => {
    if (value) {
      createCustomer({ name: value }).then((data) => {
        setValue("");
        //window.location.reload();
      });
    }
  };

  useEffect(() => {
    fetchCustomers().then((data) => customer.setCustomers(data));
  }, []);

  function deleteCus(id) {
    deleteCustomer(id).then((data) => {
      //window.location.reload();
    });
  }

  function editFunc(id) {
    setEdd(true);
    fetchOneCustomer(id).then((data) => setCustomerEdit(data));
  }

  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />
      <Container style={{ marginTop: "7rem" }}>
        <MyModal visible={edd} setVisible={setEdd}>
          <EditCustomerModal
            setCustomerEdit={setCustomerEdit}
            customerEdit={customerEdit}
            setVisible={setEdd}
          />
        </MyModal>

        <h2 style={{ textAlign: "center" }}>Добавить заказчика</h2>

        <div style={{ marginTop: "2rem" }}>
          <Row>
            <Col md={10}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="cusInput"
                type="text"
                placeholder="Введите новое медицинское учреждение..."
              />
            </Col>
            <Col md={2}>
              <Button
                onClick={addCustomer}
                style={{ marginTop: "3px", width: "100%" }}
                variant="success"
              >
                Добавить
              </Button>
            </Col>
          </Row>
        </div>

        <div style={{ marginTop: "4rem" }} className="cusHead">
          <Row>
            <Col md={10}>Организация</Col>
            <Col md={1}></Col>
            <Col md={1}></Col>
          </Row>
        </div>

        {customer.customers.map((cus) => (
          <div key={cus.id} className="cusItem">
            <Row>
              <Col md={10}>{cus.name}</Col>
              <Col md={1}>
                <img
                  onClick={() => editFunc(cus.id)}
                  style={{ height: "27px", cursor: "pointer" }}
                  src={edit}
                  alt=""
                />
              </Col>
              <Col md={1}>
                <img
                  onClick={() => deleteCus(cus.id)}
                  style={{ height: "30px", cursor: "pointer" }}
                  src={trash}
                  alt=""
                />
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
});

export default Customer;

import { observer } from "mobx-react-lite";
import { Button, Col, Container, Row } from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import { Context } from "..";
import trash from "./../imgs/trash_icon.svg";
import edit from "./../imgs/edit_icon.svg";
import { useContext, useEffect } from "react";
import { fetchAllCourses } from "../http/courseApi";
import { useState } from "react";
import {
  deleteContract,
  fetchContracts,
  fetchOneContract,
} from "../http/ContractApi";
import MyModal from "../UI/MyModal/MyModal";
import DogovorModal from "../Components/DogovorModal";
import EditContractModal from "../Components/EditContractModal";
import DeleteContractModal from "../Components/DeleteContractModal";

const Contract = observer(() => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [ed, setEd] = useState(false);
  const [contractEdit, setContractEdit] = useState({});
  const [num, setNum] = useState("");

  const { contract } = useContext(Context);
  const { course } = useContext(Context);

  useEffect(() => {
    fetchAllCourses().then((data) => course.setAllCourses(data));
  }, []);

  useEffect(() => {
    course.allCourses.forEach((cours) => {
      if (cours.number == value) {
        setId(cours.id);
      }
    });
  }, [value]);

  function getUsers() {
    if (id) {
      fetchContracts({ courseId: id }).then((data) => {
        contract.setContracts(data);
        contract.setCount(data.length);
        setId("");
      });
    } else {
      alert("Введите номер курса!");
    }
  }

  function deleteCont(id) {
    deleteContract(id).then((data) => {
      contract.setContracts(contract.contracts.filter((cont) => cont.id != id));
    });
  }

  useEffect(() => {
    if (contractEdit.courseId) {
      course.allCourses.forEach((cours) => {
        if (cours.id == contractEdit.courseId) {
          setNum(cours.number);
        }
      });
    }
  }, [contractEdit.courseId]);

  function editFunc(id) {
    setEd(true);
    fetchOneContract(id).then((data) => setContractEdit(data));
  }

  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />

      <Container style={{ marginTop: "7rem" }}>
        <MyModal visible={modal} setVisible={setModal}>
          <DogovorModal setVisible={setModal} />
        </MyModal>

        <MyModal visible={ed} setVisible={setEd}>
          <EditContractModal
            setNum={setNum}
            num={num}
            setContractEdit={setContractEdit}
            contractEdit={contractEdit}
            setVisible={setEd}
            visible={ed}
          />
        </MyModal>

        <MyModal visible={deleteModal} setVisible={setDeleteModal}>
          <DeleteContractModal setVisible={setDeleteModal} />
        </MyModal>

        <h2 style={{ textAlign: "center" }}>Редактор базы слушателей</h2>

        <Row style={{ marginTop: "2rem" }}>
          <Col md={5}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="cusInput"
              type="number"
              placeholder="Введите №ПК..."
            />
          </Col>
          <Col md={2}>
            <Button
              style={{ marginTop: "3px", width: "60%" }}
              variant="success"
              onClick={getUsers}
            >
              Искать
            </Button>
          </Col>
          <Col md={3}></Col>
          <Col md={2}>
            <Button
              onClick={() => setModal(true)}
              style={{ marginTop: "3px" }}
              variant="success"
            >
              Добавить слушателя
            </Button>
          </Col>
        </Row>

        {course.allCourses.map((cours) => {
          if (cours.number == value) {
            return <div key={cours.id}> {cours.name} </div>;
          }
        })}

        <div style={{ marginTop: "4rem" }} className="cusHead">
          <Row>
            <Col>Слушатели</Col>
            <Col>№ направления</Col>
          </Row>
        </div>


        {contract.contracts.map((cont) => (
          <div className="admItem" key={cont.id}>
            <Row>
              <Col md={6}>{cont.fullname}</Col>
              <Col style={{paddingLeft: '4rem', fontSize: '22px'}} md={4}>{cont.naprav}</Col>
              <Col md={1}>
                <img
                  onClick={() => editFunc(cont.id)}
                  style={{ height: "27px", cursor: "pointer" }}
                  src={edit}
                  alt=""
                />
              </Col>
              <Col md={1}>
                <img
                  onClick={() => deleteCont(cont.id)}
                  style={{ height: "30px", cursor: "pointer" }}
                  src={trash}
                  alt=""
                />
              </Col>
            </Row>
          </div>
        ))}

        <Row>
          <Col>
            <Button
              onClick={() => setDeleteModal(true)}
              style={{ marginTop: "4rem" }}
              variant="success"
            >
              Удалить всех слушателей с курса
            </Button>
          </Col>
          <Col style={{ marginTop: "4.5rem", textAlign: "center" }}>
            {contract.count ? <h4> Всего: {contract.count}</h4> : <></>}
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Contract;

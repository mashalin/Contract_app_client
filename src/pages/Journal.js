import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import AdminNavbar from "../Components/AdminNavbar";
import { fetchAllCourses } from "../http/courseApi";
import { fetchJournals } from "../http/JournalApi";
import axios from "axios";
import { saveAs } from "file-saver";
import MyModal from "../UI/MyModal/MyModal";
import DeleteJournalModal from "../Components/DeleteJournalModal";

const Journal = observer(() => {
  const { course } = useContext(Context);
  const { journal } = useContext(Context);

  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    fetchAllCourses().then((data) => course.setAllCourses(data));
  }, []);

  useEffect(() => {
    course.allCourses.forEach((cours) => {
      if (cours.number == value) {
        setId(cours.id);
        setName(cours.name);
        setDate(cours.date);
      }
    });
  }, [value]);

  function getUsers() {
    if (id) {
      fetchJournals({ courseId: id }).then((data) => {
        journal.setJournals(data);
        setId("");
      });
    } else {
      alert("Введите номер курса!");
    }
  }

  function print() {
    if (journal.journals.length > 0) {
      axios
    .post(process.env.REACT_APP_HOST + "/create-dogovor5", {num: value, name: name, date: date, arr: journal.journals})
    .then(() =>
      axios.get(process.env.REACT_APP_HOST + "/create-dogovor5", { responseType: "blob" })
    )
    .then((res) => {
      const docxBlob = new Blob([res.data], { type: "application/docx" });
      saveAs(docxBlob, `dogovorTest5.docx`);
    });
    } else {
      alert('Введите номер курса!');
    }
  }

  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />

      <Container style={{ marginTop: "7rem" }}>
      <MyModal visible={deleteModal} setVisible={setDeleteModal}>
          <DeleteJournalModal setVisible={setDeleteModal} />
        </MyModal>
        
        <h2 style={{ textAlign: "center" }}>Журнал направлений</h2>

        <div style={{ marginTop: "2rem" }}>
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
            <Col md={2}></Col>
            <Col md={3}>
              <Button onClick={() => setDeleteModal(true)} style={{ marginTop: "3px" }} variant="success">
                Удалить все записи с курса
              </Button>
            </Col>
          </Row>
          {course.allCourses.map((cours) => {
            if (cours.number == value) {
              return <div key={cours.id}> {cours.name} </div>;
            }
          })}
        </div>

        <div style={{ marginTop: "4rem" }} className="cusHead">
          <Row>
            <Col md={6}>Организация</Col>
            <Col md={3}>Кол-во направлений</Col>
            <Col md={3}>№ направлений</Col>
          </Row>
        </div>

        {journal.journals.map((jour) => (
          <div className="admItem" key={jour.id}>
            <Row>
              <Col md={6}>{jour.organ}</Col>
              <Col md={3}>{jour.colvo}</Col>
              <Col md={3}>{jour.numbers}</Col>
            </Row>
          </div>
        ))}
        <Button onClick={print} className="print_button" variant="success" >
        Печать
      </Button>
      </Container>
    </div>
  );
});

export default Journal;

import { Button, Col, Container, Row, Card } from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import { saveAs } from "file-saver";
import axios from "axios";
import { createFile, deleteFile } from "../http/FileApi";
import { createFile2, deleteFile2 } from "../http/File2Api";
import { createFile3, deleteFile3 } from "../http/File3Api";
import { useState } from "react";

function File() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  function selectFile1(e) {
    setFile1(e.target.files[0]);
  }

  function postFile1() {
    if (file1) {
      const formData = new FormData();
    formData.append("file", file1);

    createFile(formData).then((data) => {
      deleteFile(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function selectFile2(e) {
    setFile2(e.target.files[0]);
  }

  function postFile2() {
    if (file2) {
      const formData = new FormData();
    formData.append("file", file2);

    createFile2(formData).then((data) => {
      deleteFile2(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function selectFile3(e) {
    setFile3(e.target.files[0]);
  }

  function postFile3() {
    if (file3) {
      const formData = new FormData();
    formData.append("file", file3);

    createFile3(formData).then((data) => {
      deleteFile3(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function DownloadTemp1() {
    axios
      .get(process.env.REACT_APP_HOST + "/download", { responseType: "blob" })
      .then((res) => {
        const pdfBlob3 = new Blob([res.data], { type: "application/odt" });

        saveAs(pdfBlob3, "template1.odt");
      });
  }

  function DownloadTemp2() {
    axios
      .get(process.env.REACT_APP_HOST + "/download2", { responseType: "blob" })
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/odt" });

        saveAs(pdfBlob, "template2.odt");
      });
  }

  function DownloadTemp3() {
    axios
      .get(process.env.REACT_APP_HOST + "/download3", { responseType: "blob" })
      .then((res) => {
        const pdfBlob2 = new Blob([res.data], { type: "application/odt" });

        saveAs(pdfBlob2, "template3.odt");
      });
  }

  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />
      <Container style={{ marginTop: "7rem" }}>
        <h2 style={{ textAlign: "center" }}>Редактор шаблонов договоров</h2>
        <Row style={{ marginTop: "4rem" }}>
          <Col>
            <Card
              style={{ width: "22rem", backgroundColor: "rgb(239 235 235)" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Шаблон договора №1 (за счет средств республиканского бюджета)
                </Card.Title>
                <div className="hr"></div>
                <Card.Text
                  style={{
                    marginTop: "2rem",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                  }}
                >
                  Посмотреть текущий шаблон:
                </Card.Text>
                <Button onClick={DownloadTemp1} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectFile1}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postFile1}
                  style={{ marginTop: "1.5rem" }}
                  variant="success"
                >
                  Заменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "22rem", backgroundColor: "rgb(239 235 235)" }}
            >
              <Card.Body>
                <Card.Title
                  style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                  Шаблон договора №2 (на платной основе для физ.лиц)
                </Card.Title>
                <div className="hr"></div>
                <Card.Text
                  style={{
                    marginTop: "2rem",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                  }}
                >
                  Посмотреть текущий шаблон:
                </Card.Text>
                <Button onClick={DownloadTemp2} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectFile2}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postFile2}
                  style={{ marginTop: "1.5rem" }}
                  variant="success"
                >
                  Заменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: "22rem", backgroundColor: "rgb(239 235 235)" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Шаблон договора №3 (на платной основе для организаций)
                </Card.Title>
                <div className="hr"></div>
                <Card.Text
                  style={{
                    marginTop: "2rem",
                    fontFamily: "Roboto",
                    fontSize: "20px",
                  }}
                >
                  Посмотреть текущий шаблон:
                </Card.Text>
                <Button onClick={DownloadTemp3} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectFile3}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postFile3}
                  style={{ marginTop: "1.5rem" }}
                  variant="success"
                >
                  Заменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default File;

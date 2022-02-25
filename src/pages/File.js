import { Button, Col, Container, Row, Card } from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import { saveAs } from "file-saver";
import axios from "axios";
import { createFile, deleteFile } from "../http/FileApi";
import { createFile2, deleteFile2 } from "../http/File2Api";
import { createFile3, deleteFile3 } from "../http/File3Api";
import { useState } from "react";
import { createDocFile1, deleteDocFile1 } from "../http/DocFile1Api";
import { createDocFile2, deleteDocFile2 } from "../http/DocFile2Api";
import { createDocFile3, deleteDocFile3 } from "../http/DocFile3Api";
import { createDocFile4, deleteDocFile4 } from "../http/DocFile4Api";
import { createDocFile5, deleteDocFile5 } from "../http/DocFile5Api";

function File() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [doc1, setDoc1] = useState(null);
  const [doc2, setDoc2] = useState(null);
  const [doc3, setDoc3] = useState(null);
  const [doc4, setDoc4] = useState(null);
  const [doc5, setDoc5] = useState(null);

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

  function selectDoc1(e) {
    setDoc1(e.target.files[0]);
  }

  function postDoc1() {
    if (doc1) {
      const formData = new FormData();
    formData.append("file", doc1);

    createDocFile1(formData).then((data) => {
      deleteDocFile1(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function selectDoc2(e) {
    setDoc2(e.target.files[0]);
  }

  function postDoc2() {
    if (doc2) {
      const formData = new FormData();
    formData.append("file", doc2);

    createDocFile2(formData).then((data) => {
      deleteDocFile2(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function selectDoc3(e) {
    setDoc3(e.target.files[0]);
  }

  function postDoc3() {
    if (doc3) {
      const formData = new FormData();
    formData.append("file", doc3);

    createDocFile3(formData).then((data) => {
      deleteDocFile3(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function selectDoc4(e) {
    setDoc4(e.target.files[0]);
  }

  function postDoc4() {
    if (doc4) {
      const formData = new FormData();
    formData.append("file", doc4);

    createDocFile4(formData).then((data) => {
      deleteDocFile4(data.id - 1).then((data) => {
        alert("Шаблон был изменён!");
      });
    });
    } else {
      alert('Шаблон не выбран!');
    }
  }

  function selectDoc5(e) {
    setDoc5(e.target.files[0]);
  }

  function postDoc5() {
    if (doc5) {
      const formData = new FormData();
    formData.append("file", doc5);

    createDocFile5(formData).then((data) => {
      deleteDocFile5(data.id - 1).then((data) => {
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

  function DownloadDoc1() {
    axios
      .get(process.env.REACT_APP_HOST + "/downloadDoc1", { responseType: "blob" })
      .then((res) => {
        const pdfBlob2 = new Blob([res.data], { type: "application/docx" });

        saveAs(pdfBlob2, "templateDoc1.docx");
      });
  }

  function DownloadDoc2() {
    axios
      .get(process.env.REACT_APP_HOST + "/downloadDoc2", { responseType: "blob" })
      .then((res) => {
        const pdfBlob2 = new Blob([res.data], { type: "application/docx" });

        saveAs(pdfBlob2, "templateDoc2.docx");
      });
  }

  function DownloadDoc3() {
    axios
      .get(process.env.REACT_APP_HOST + "/downloadDoc3", { responseType: "blob" })
      .then((res) => {
        const pdfBlob2 = new Blob([res.data], { type: "application/docx" });

        saveAs(pdfBlob2, "templateDoc3.docx");
      });
  }

  function DownloadDoc4() {
    axios
      .get(process.env.REACT_APP_HOST + "/downloadDoc4", { responseType: "blob" })
      .then((res) => {
        const pdfBlob2 = new Blob([res.data], { type: "application/docx" });

        saveAs(pdfBlob2, "templateDoc4.docx");
      });
  }

  function DownloadDoc5() {
    axios
      .get(process.env.REACT_APP_HOST + "/downloadDoc5", { responseType: "blob" })
      .then((res) => {
        const pdfBlob2 = new Blob([res.data], { type: "application/docx" });

        saveAs(pdfBlob2, "templateDoc5.docx");
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
                <div style={{marginTop: '1rem'}} className="hr"></div>
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
                  style={{ textAlign: "center"}}
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
                <div style={{marginTop: '1rem'}} className="hr"></div>
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

        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <Card
              style={{ width: "22rem", backgroundColor: "rgb(239 235 235)" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Шаблон приказа о зачислении на повышение квалификации
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
                <Button onClick={DownloadDoc1} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectDoc1}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postDoc1}
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
                  style={{ textAlign: "center", marginBottom: "2rem" }}
                >
                  Шаблон приказа о прекращении образовательных отношений
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
                <Button onClick={DownloadDoc2} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectDoc2}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postDoc2}
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
                  Шаблон приказа о проведении итоговой аттестации
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
                <Button onClick={DownloadDoc3} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectDoc3}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postDoc3}
                  style={{ marginTop: "1.5rem" }}
                  variant="success"
                >
                  Заменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <Card
              style={{ width: "22rem", backgroundColor: "rgb(239 235 235)" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Шаблон Зачётно-Экзаменационной ведомости
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
                <Button onClick={DownloadDoc4} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectDoc4}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postDoc4}
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
                  Шаблон журнала направлений
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
                <Button onClick={DownloadDoc5} variant="success">
                  Смотреть
                </Button>
                <div className="hr"></div>
                <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                  Выбрать новый шаблон:
                </Card.Text>
                <input
                  onChange={selectDoc5}
                  className="file"
                  type="file"
                ></input>
                <Button
                  onClick={postDoc5}
                  style={{ marginTop: "1.5rem" }}
                  variant="success"
                >
                  Заменить
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default File;

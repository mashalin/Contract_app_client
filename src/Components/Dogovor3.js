import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Context } from "..";
import { fetchCathedras } from "../http/cathedraApi";
import { fetchAllCourses } from "../http/courseApi";
import { fetchYear } from "../http/YearApi";
import trash from "./../imgs/trash_icon.svg";
import axios from "axios";
import { saveAs } from "file-saver";

const Dogovor3 = observer(() => {
  const { course } = useContext(Context);
  const {cathedra} = useContext(Context); 

  const [yearText, setYearText] = useState({});
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [lastDate, setLastDate] = useState("");

  const [dogovor, setDogovor] = useState([]);

  useEffect(() => {
    fetchAllCourses().then((data) => course.setAllCourses(data));
    fetchYear().then((data) => setYearText(data[0]));
    fetchCathedras().then(data => cathedra.setCathedras(data));
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



  useEffect(() => {
    if (date) {
      let dates = date.split("-");
      dates = dates.map(function (el) {
        return el + `.${yearText.name}`;
      });
      setLastDate(dates[1]);
    } else {
      setLastDate('');
    }
  }, [date]);


  function addCour() {
    if (value && id && name) {
      setDogovor([
        ...dogovor,
        {
          num: value,
          name: name,
          lastDate: lastDate,
          cath: "",
        },
      ]);
      setValue("");
      setName("");
      setLastDate("");
    }
  }

  function deleteCour(num) {
    setDogovor(dogovor.filter((cour) => cour.num != num));
  }

  function editFunc( e, num ) {
    setDogovor([
      ...dogovor.map((dog) =>
      dog.num === num ? {...dog, cath: e.target.value} : {...dog}
      )
    ])
  }


  function createDog() {
    if (dogovor.length > 0) {
        let manyCath = [];
        for (let i = 0; i < dogovor.length; i++) {
           manyCath.push(dogovor[i].cath);
        }
        manyCath = manyCath.join(', ');
      axios
        .post(process.env.REACT_APP_HOST + "/create-dogovor3", {arr: dogovor, manyCath: manyCath})
        .then(() =>
          axios.get(process.env.REACT_APP_HOST + "/create-dogovor3", { responseType: "blob" })
        )
        .then((res) => {
          const docxBlob = new Blob([res.data], { type: "application/docx" });
          saveAs(docxBlob, `dogovorTest3.docx`);
        });
    } else {
      alert('Добавьте курсы в приказ!');
    }
  }


  return (
    <div className="dogCard">
         <p
          style={{ fontFamily: "Roboto", fontSize: "18px" }}
        >
          Введите номер курса, который хотите добавить в приказ о проведении итоговой аттестации и утверждении состава комиссий:
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Row>
            <Col md={10}>
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
                onClick={addCour}
                style={{ marginTop: "3px", width: "100%" }}
                variant="success"
              >
                Добавить
              </Button>
            </Col>
          </Row>
          {course.allCourses.map((cours) => {
            if (cours.number == value) {
              return <div key={cours.id}> {cours.name} </div>;
            }
          })}
        </div>

        <div style={{ marginTop: "4rem" }} className="coursHeader">
          <Row>
            <Col md={2} lg={2}>
              №PK
            </Col>
            <Col md={3} lg={3}></Col>
            <Col md={6} lg={6}>
              Кафедра
            </Col>
            <Col md={1} lg={1}></Col>
          </Row>
        </div>

        {dogovor.map((dog) => (
          <div className="coursItem" key={dog.num}>
            <Row>
              <Col style={{ fontSize: "22px" }} md={2}>
                {dog.num}
              </Col>
              <Col md={3} lg={3}></Col>
              <Col md={6}>
                <select
                  value={dogovor.cath}
                  onChange={(e) => editFunc(e, dog.num)}
                  style={{marginTop: '0', marginBottom: '0'}}
                  name="select"
                  className="select"
                >
                  <option value="">Выберите кафедру...</option>
                  {cathedra.cathedras.map( cath => 
                  <option key={cath.id} value={cath.name}>
                    {cath.name}
                  </option>
                  )}
                </select>
              </Col>
              <Col md={1}>
                <img
                  onClick={() => deleteCour(dog.num)}
                  style={{ height: "30px", cursor: "pointer" }}
                  src={trash}
                  alt=""
                />
              </Col>
            </Row>
          </div>
        ))}

      <Button className="print_button" onClick={createDog} variant="success" >
        Печать
      </Button>

    </div>
  );
});

export default Dogovor3;
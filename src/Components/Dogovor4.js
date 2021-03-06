import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Context } from "..";
import { fetchContracts } from "../http/ContractApi";
import { fetchAllCourses } from "../http/courseApi";
import { fetchYear } from "../http/YearApi";
import trash from "./../imgs/trash_icon.svg";
import axios from "axios";
import { saveAs } from "file-saver";

const Dogovor4 = observer(() => {
  const { course } = useContext(Context);

  const [yearText, setYearText] = useState({});
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [users, setUsers] = useState([]);
  const [lastDate, setLastDate] = useState("");

  const [dogovor, setDogovor] = useState('');

  useEffect(() => {
    fetchAllCourses().then((data) => course.setAllCourses(data));
    fetchYear().then((data) => setYearText(data[0]));
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

  useEffect( () => {
    if (id) {
      fetchContracts({ courseId: id }).then((data) => {
        setUsers(data);
      });
    }
  }, [id])


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
      setDogovor(
        {
          num: value,
          name: name,
          lastDate: lastDate,
          arr: users,
        },
      );
    }
  }


  function createDog() {
    if (dogovor) {
      axios
        .post(process.env.REACT_APP_HOST + "/create-dogovor4", dogovor)
        .then(() =>
          axios.get(process.env.REACT_APP_HOST + "/create-dogovor4", { responseType: "blob" })
        )
        .then((res) => {
          const docxBlob = new Blob([res.data], { type: "application/docx" });
          saveAs(docxBlob, `dogovorTest4.docx`);
        });
    } else {
      alert('?????????????? ?????????? ??????????!');
    }
  }

  return (
    <div className="dogCard">
         <p
          style={{ fontFamily: "Roboto", fontSize: "18px" }}
        >
          ?????????????? ?????????? ??????????, ?????????????? ???????????? ???????????????? ?? ??????????????-?????????????????????????????? ??????????????????:
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Row>
            <Col md={10}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="cusInput"
                type="number"
                placeholder="?????????????? ???????..."
              />
            </Col>
            <Col md={2}>
              <Button
                onClick={addCour}
                style={{ marginTop: "3px", width: "100%" }}
                variant="success"
              >
                ????????????????
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
        ???PK
        </div>

       {dogovor
       ? <div style={{backgroundColor: 'white'}} className="coursItem">
            {dogovor.num}
          </div>
       : <></>
       }
      

      <Button className="print_button" onClick={createDog} variant="success" >
        ????????????
      </Button>

    </div>
  );
});

export default Dogovor4;
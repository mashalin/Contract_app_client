import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import { Context } from "..";
import { fetchCathedras } from "../http/cathedraApi";
import { fetchCustomers, createCustomer } from "../http/CustomerApi";
import axios from "axios";
import { saveAs } from "file-saver";
import { fetchAllCourses } from "../http/courseApi";
import translate from 'translate';

const Print = observer(() => {
  const [select, setSelect] = useState("");
  const [cathValue, setCathValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [address, setAddress] = useState("");
  const [cusValue, setCusValue] = useState("");
  const [firstNum, setFirstNum] = useState("");
  const [firstNaprav, setFirstNaprav] = useState("");
  const [colNaprav, setColNaprav] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cour, setCour] = useState("");
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const [selectEmpty, setSelectEmpty] = useState(false);
  const [cathValueEmpty, setCathValueEmpty] = useState(false);
  const [firstNumEmpty, setFirstNumEmpty] = useState(false);
  const [firstNapravEmpty, setFirstNapravEmpty] = useState(false);
  const [colNapravEmpty, setColNapravEmpty] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [selectError, setSelectError] = useState("Заполните это поле!");
  const [cathValueError, setCathValueError] = useState("Заполните это поле!");
  const [firstNumError, setFirstNumError] = useState("Заполните это поле!");
  const [firstNapravError, setFirstNapravError] = useState(
    "Заполните это поле!"
  );
  const [colNapravError, setColNapravError] = useState("Заполните это поле!");

  const { cathedra } = useContext(Context);
  const { customer } = useContext(Context);
  const { course } = useContext(Context);

  translate.engine = "google"; 
  translate.key = process.env.GOOGLE_KEY;


  useEffect(() => {
    fetchCathedras().then((data) => cathedra.setCathedras(data));
  }, []);

  useEffect(() => {
    fetchCustomers().then((data) => customer.setCustomers(data));
  }, []);

  useEffect(() => {
    fetchAllCourses().then((data) => course.setAllCourses(data));
  }, []);

  useEffect(() => {
    course.allCourses.forEach((cours) => {
      if (cours.number == firstNum) {
        setCour(cours.name);
        setDate(cours.date);
        setPrice(cours.price);
      }
    });
  }, [firstNum]);

  useEffect(() => {
    if (!cathValue) {
      setCathValueError('Заполните это поле!');
    } else{
      setCathValueError('');
    }
    if (!colNaprav) {
      setColNapravError('Заполните это поле!');
    } else{
      setColNapravError('');
    }
    if (!firstNum) {
      setFirstNumError('Заполните это поле!');
    } else{
      setFirstNumError('');
    }
    if (!firstNaprav) {
      setFirstNapravError('Заполните это поле!');
    } else{
      setFirstNapravError('');
    }
    if (!select) {
      setSelectError('Заполните это поле!');
    } else{
      setSelectError('');
    }
  }, [cathValue, colNaprav, firstNum, firstNaprav, select]);

  useEffect(() => {
    if(cathValueError || colNapravError || firstNumError || firstNapravError || selectError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [cathValueError, colNapravError, firstNumError, firstNapravError, selectError]);

  const filteredCath = cathedra.cathedras.filter((cath) => {
    return cath.name.toLowerCase().includes(cathValue.toLowerCase());
  });

  const filteredCustomers = customer.customers.filter((cus) => {
    return cus.name.toLowerCase().includes(cusValue.toLowerCase());
  });

  function autocompleteItemHandler(e) {
    setCathValue(e.target.textContent);
    setIsOpen(!isOpen);
  }

  function cusLiHandler(e) {
    setCusValue(e.target.textContent);
    setIsOpen2(!isOpen2);
  }

  useEffect(() => {
    cathedra.cathedras.forEach((cath) => {
      if (cath.name == cathValue) {
        setAddress(cath.address);
        setTelephone(cath.telephone);
      }
    });
  }, [cathValue]);

  function PrintNaprav() {

    if (customer.customers.filter((obj) => obj.name === cusValue).length == 0) {
      createCustomer({ name: cusValue }).then((data) => {});
    }

    const Data = {
      cath: cathValue,
      address: address,
      cus: cusValue,
      firstNum: firstNum,
      firstNaprav: firstNaprav,
      colNaprav: colNaprav,
      telephone: telephone,
      cour: cour,
      date: date,
      price: price,
    };

    if (select == 'Бесплатное') {
      axios
      .post("http://172.20.0.49:5000/create-docx", Data)
      .then(() =>
        axios.get("http://172.20.0.49:5000/docx", { responseType: "blob" })
      )
      .then((res) => {
        const docxBlob = new Blob([res.data], { type: "application/docx" });
        const text = translate(cusValue, { from : 'ru', to : "en"  });
        text.then(data => {
          data = data.split(' ').join('_');
          saveAs(docxBlob, `napravlenie_${data}.docx`);
        });
      });
    } else if (select == 'Платное_физ') {
      axios
      .post("http://172.20.0.49:5000/create-docx2", Data)
      .then(() =>
        axios.get("http://172.20.0.49:5000/docx2", { responseType: "blob" })
      )
      .then((res) => {
        const docxBlob2 = new Blob([res.data], { type: "application/docx" });
        const text = translate(cusValue, { from : 'ru', to : "en"  });
        text.then(data => {
          data = data.split(' ').join('_');
          saveAs(docxBlob2, `napravlenie_${data}.docx`);
        });
      });
    } else {
      axios
      .post("http://172.20.0.49:5000/create-docx3", Data)
      .then(() =>
        axios.get("http://172.20.0.49:5000/docx3", { responseType: "blob" })
      )
      .then((res) => {
        const docxBlob3 = new Blob([res.data], { type: "application/docx" });
        const text = translate(cusValue, { from : 'ru', to : "en"  });
        text.then(data => {
          data = data.split(' ').join('_');
          saveAs(docxBlob3, `napravlenie_${data}.docx`);
        });
      });
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "select":
        setSelectEmpty(true);
        break;
      case "cath":
        setCathValueEmpty(true);
        break;
      case "firstNum":
        setFirstNumEmpty(true);
        break;
      case "firstNaprav":
        setFirstNapravEmpty(true);
        break;
      case "colNaprav":
        setColNapravEmpty(true);
        break;
    }
  };

  

  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />
      <Container>
        <h2 style={{ marginTop: "7rem", textAlign: "center" }}>
          Печать направлений
        </h2>
        <div className="select_div">
          {selectEmpty && selectError  &&(
            <div style={{ color: "red" }}>{selectError}</div>
          )}
          <select
            onBlur={(e) => blurHandler(e)}
            name="select"
            onChange={(e) =>setSelect(e.target.value)}
            value={select}
            className="select"
          >
            <option value="">Выберите тип направления</option>
            <option value="Бесплатное">Бесплатное</option>
            <option value="Платное_физ">Платное (физ. лицо)</option>
            <option value="Платное_юр">Платное (юр. лицо)</option>
          </select>

          <div className="cath_input">
            {cathValueEmpty && cathValueError && (
              <div style={{ color: "red" }}>{cathValueError}</div>
            )}
            <input
              onBlur={(e) => blurHandler(e)}
              name="cath"
              value={cathValue}
              onChange={(e) => setCathValue(e.target.value)}
              onClick={() => setIsOpen(true)}
              type="text"
              placeholder="Введите кафедру..."
            />
            <ul className="autocomplete">
              {cathValue && isOpen
                ? filteredCath.map((cath) => {
                    return (
                      <li
                        onClick={autocompleteItemHandler}
                        key={cath.id}
                        className="autocomplete_item"
                      >
                        {cath.name}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>

          {cathedra.cathedras.map((cath) => {
            if (cath.name == cathValue) {
              return (
                <div onClick={(e) => setAddress(e.target.textContent)} className="cath_address" key={cath.id}>
                  {cath.address}
                </div>
              );
            }
          })}

          <div className="cus_input">
            <input
              value={cusValue}
              onChange={(e) => setCusValue(e.target.value)}
              onClick={() => setIsOpen2(true)}
              style={{ marginTop: "3rem" }}
              type="text"
              placeholder="Введите заказчика для выбора из базы или добавьте ФИО..."
            />
            <ul className="cus_ul">
              {cusValue && isOpen2
                ? filteredCustomers.map((cus) => {
                    return (
                      <li
                        onClick={cusLiHandler}
                        key={cus.id}
                        className="cus_li"
                      >
                        {cus.name}
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          {firstNumEmpty && firstNumError && (
            <div style={{ color: "red" }}>{firstNumError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="firstNum"
            value={firstNum}
            onChange={(e) => setFirstNum(e.target.value)}
            type="number"
            placeholder="Порядковый номер образовательной программы..."
          />
          {course.allCourses.map((cours) => {
            if (cours.number == firstNum) {
              return <div key={cours.id}> {cours.name} </div>;
            }
          })}
          {firstNapravEmpty && firstNapravError && (
            <div style={{ color: "red" }}>{firstNapravError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="firstNaprav"
            value={firstNaprav}
            onChange={(e) => setFirstNaprav(e.target.value)}
            style={{ marginTop: "3rem" }}
            type="number"
            placeholder="Первый номер направления..."
          />
          {colNapravEmpty && colNapravError && (
            <div style={{ color: "red" }}>{colNapravError}</div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            name="colNaprav"
            value={colNaprav}
            onChange={(e) => setColNaprav(e.target.value)}
            type="number"
            placeholder="Количество направлений..."
          />
        </div>
        <Button
          disabled={!formValid}
          onClick={PrintNaprav}
          className="print_button"
          variant="success"
        >
          Печать
        </Button>
      </Container>
    </div>
  );
});

export default Print;

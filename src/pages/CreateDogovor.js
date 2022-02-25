import { observer } from "mobx-react-lite";
import { useState } from "react";
import {Container} from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import Dogovor1 from "../Components/Dogovor1";
import Dogovor2 from "../Components/Dogovor2";
import Dogovor3 from "../Components/Dogovor3";
import Dogovor4 from "../Components/Dogovor4";

const CreateDogovor = observer(() => {

  const [select, setSelect] = useState('');

  let types = null;

  if ( select === 'О зачислении') {
    types = (
      <Dogovor1/>
    )
  } else if (select === 'О прекращении') {
    types = (
      <Dogovor2/>
    )
  } else if (select === 'О проведении итоговой аттестации') {
    types = (
      <Dogovor3/>
    )
  } else if (select === 'Зачётно-экзаменационная ведомость') {
    types = (
      <Dogovor4/>
    )
  }
  
  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />
      <Container style={{ marginTop: "7rem" }}>
        <h2 style={{ marginTop: "7rem", textAlign: "center" }}>
          Печать приказов
        </h2>

        <select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            style={{width: '60%', marginLeft: '20%', marginTop: '2rem', marginBottom: '0rem'}}
            name="select"
            className="select"
          >
            <option value="">Выберите приказ</option>
            <option value="О зачислении">О зачислении на повышение квалификации</option>
            <option value="О прекращении">О прекращении образовательных отношений</option>
            <option value="О проведении итоговой аттестации">О проведении итоговой аттестации и утверждении состава комиссий</option>
            <option value="Зачётно-экзаменационная ведомость">Зачётно-экзаменационная ведомость</option>
          </select>
        
      {/* {
        select === 'О зачислении'
        ? <Dogovor1/>
        : <Dogovor2/>
      } */}

      {types}
      

      </Container>
    </div>
  );
});

export default CreateDogovor;

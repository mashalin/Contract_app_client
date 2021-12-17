import { observer } from "mobx-react-lite";
import { Container, Button } from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import { Context } from "..";
import { useContext, useEffect, useState } from "react";
import { fetchAnnounce, updateAnnounce } from "../http/AnnounceApi";

const Announce = observer(() => {
  const { announ } = useContext(Context);
  const [announceText, setAnnounceText] = useState({});


  useEffect(() => {
    fetchAnnounce().then((data) => setAnnounceText(data[0]));
  }, []);



  const updateAnn = () => {
    updateAnnounce(announceText.id, announceText).then(
      (data) => {
        window.location.reload();
      }
    );
  };


  return (
    <div style={{ marginBottom: "4rem" }}>
      <AdminNavbar />
      <Container style={{ marginTop: "7rem" }}>
        <h2 style={{ textAlign: "center" }}>Добавить объявление</h2>
        <p
          style={{
            marginTop: "4rem",
            marginLeft: "20%",
            fontFamily: "Roboto",
            fontSize: "18px",
          }}
        >
          Введите текст объявления, которое появится на странице регистрации:
        </p>

        <textarea
          value={announceText.name}
          onChange={(e) => setAnnounceText({...announceText, name: e.target.value})}
          className="textareat"
        ></textarea>

        <div>
          <Button onClick={updateAnn} className="announ_button" variant="success">
            Добавить
          </Button>
        </div>
      </Container>
    </div>
  );
});

export default Announce;

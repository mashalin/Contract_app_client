import { Button } from "react-bootstrap";
import { useState } from "react";
import { createCathedra } from "../http/cathedraApi";

function CathedraModal({ setVisible }) {
  const [name, setName] = useState("");
  const [zav_name, setZav_name] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  const addCathedra = () => {
    if (name && zav_name && address && telephone) {
      createCathedra({
        name: name,
        zav_name: zav_name,
        address: address,
        telephone: telephone,
      }).then((data) => {
        setName("");
        setZav_name("");
        setAddress("");
        setTelephone("");
        setVisible(false);
        //window.location.reload();
      });
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        Чтобы добавить новую кафедру заполните поля и нажмите "Сохранить"
      </h3>
      <div className="cath_modal">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Введите название кафедры..."
        />
        <input
          onChange={(e) => setZav_name(e.target.value)}
          value={zav_name}
          type="text"
          placeholder="Введите учёную степень и ФИО зав. кафедры..."
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          type="text"
          placeholder="Введите адрес..."
        />
        <input
          onChange={(e) => setTelephone(e.target.value)}
          value={telephone}
          type="text"
          placeholder="Введите телефон с кодом..."
        />
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Button variant="secondary" onClick={() => setVisible(false)}>
          Отменить
        </Button>
        <Button
          onClick={addCathedra}
          style={{ marginLeft: "5px" }}
          variant="success"
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default CathedraModal;

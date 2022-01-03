import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "..";
import { updateCathedra } from "../http/cathedraApi";

function EditCathedraModal({ setVisible, setCathedraEdit, cathedraEdit }) {
  const { cathedra } = useContext(Context);
 
 const updateCathedraa = () => {
    updateCathedra(cathedraEdit.id, cathedraEdit).then(
      (data) => {
        setCathedraEdit({});
        setVisible(false);
        window.location.reload();
      }
    );
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        Редактировать кафедру
      </h3>
      <div className="cath_modal">
        <input
          onChange={(e) => setCathedraEdit({...cathedraEdit, name: e.target.value})}
          value={cathedraEdit.name || ''}
          type="text"
          placeholder="Введите название кафедры..."
         
        />
        <textarea
         onChange={(e) => setCathedraEdit({...cathedraEdit, zav_name: e.target.value})}
          className="text_edit"
          value={cathedraEdit.zav_name || ''}
          type="text"
          placeholder="Введите учёную степень и ФИО зав. кафедры..."
          
        />
        <input
          onChange={(e) => setCathedraEdit({...cathedraEdit, address: e.target.value})}
          value={cathedraEdit.address || ''}
          type="text"
          placeholder="Введите адрес..."
         
        />
        <input
        onChange={(e) => setCathedraEdit({...cathedraEdit, telephone: e.target.value})}
         value={cathedraEdit.telephone || ''}
          type="text"
          placeholder="Введите телефон с кодом..."
         
        />
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Button variant="secondary" onClick={() => setVisible(false)}>
          Отменить
        </Button>
        <Button onClick={updateCathedraa} style={{ marginLeft: "5px" }} variant="success">
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default EditCathedraModal;

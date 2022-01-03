import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "..";
import { updateCustomer } from "../http/CustomerApi";

function EditCustomerModal({ setVisible, setCustomerEdit, customerEdit }) {
  const { customer } = useContext(Context);
 
    

 const updateCustomerr = () => {
    updateCustomer(customerEdit.id, customerEdit).then(
      (data) => {
        setCustomerEdit({});
        setVisible(false);
        window.location.reload();
      }
    );
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        Редактировать заказчика
      </h3>
      <div className="cath_modal">
        <textarea
          className="text_edit"
          onChange={(e) => setCustomerEdit({...customerEdit, name: e.target.value})}
          value={customerEdit.name || ''}
          type="text"
          placeholder="Введите заказчика..."
         
        />
        
        
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Button variant="secondary" onClick={() => setVisible(false)}>
          Отменить
        </Button>
        <Button onClick={updateCustomerr} style={{ marginLeft: "5px" }} variant="success">
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default EditCustomerModal;

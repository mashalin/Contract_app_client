import { useEffect } from "react";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "..";
import { updateContract } from "../http/ContractApi";

function EditContractModal({ setVisible, setContractEdit, contractEdit, num, setNum }) {
  const { contract } = useContext(Context);
  const { course } = useContext(Context);

  useEffect(() => {
    if (num) {
      course.allCourses.forEach((cours) => {
        if (cours.number == num) {
          setContractEdit({...contractEdit, courseId: cours.id});
        }
      });
    }
  }, [num])

 
 const updateCont = () => {
    updateContract(contractEdit.id, contractEdit).then(
      (data) => {
        setContractEdit({});
        setVisible(false);
        window.location.reload();
      }
    );
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        Редактировать слушателя
      </h3>
      <div className="cath_modal">
          <input
          onChange={(e) => setNum(e.target.value)}
          value={num}
          type="number"
          placeholder="Введите №ПК..."
         
        />
        {course.allCourses.map((cours) => {
          if (cours.number == num) {
            return <div style={{maxWidth: '500px'}} key={cours.id}> {cours.name} </div>;
          }
        })}
        
        <input
          onChange={(e) => setContractEdit({...contractEdit, fullname: e.target.value})}
          value={contractEdit.fullname || ''}
          type="text"
          placeholder="Введите ФИО слушателя..."
         
        />
        
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Button variant="secondary" onClick={() => setVisible(false)}>
          Отменить
        </Button>
        <Button onClick={updateCont} style={{ marginLeft: "5px" }} variant="success">
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default EditContractModal;

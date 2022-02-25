import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { createContract, deleteAllContract } from "../http/ContractApi";
import { Context } from "..";

function DeleteContractModal({ setVisible }) {
  const [courseId, setCourseId] = useState("");

  const [courseNum, setCourseNum] = useState("");

  const { course } = useContext(Context);

  useEffect(() => {
    course.allCourses.forEach((cours) => {
      if (cours.number == courseNum) {
        setCourseId(cours.id);
      }
    });
  }, [courseNum]);


  function deleteAllCont() {
    deleteAllContract(courseId).then((data) => {
      window.location.reload();
    });
  }

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        Чтобы удалить всех слушателей с курса заполните поле и нажмите "Сохранить"
      </h3>
      <div className="cath_modal">
        <input
          onChange={(e) => setCourseNum(e.target.value)}
          value={courseNum}
          type="number"
          placeholder="Введите №ПК..."
        />
        {course.allCourses.map((cours) => {
          if (cours.number == courseNum) {
            return <div style={{maxWidth: '1000px'}} key={cours.id}> {cours.name} </div>;
          }
        })}

      </div>
      <div style={{ marginTop: "5rem" }}>
        <Button variant="secondary" onClick={() => setVisible(false)}>
          Отменить
        </Button>
        <Button
          onClick={deleteAllCont}
          style={{ marginLeft: "5px" }}
          variant="success"
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default DeleteContractModal;
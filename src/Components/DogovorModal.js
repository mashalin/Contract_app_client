import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { createContract } from "../http/ContractApi";
import { Context } from "..";

function DogovorModal({ setVisible }) {
  const [fullname, setFullname] = useState("");
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

  const addContract = () => {
    if (fullname && courseId) {
      createContract({
        fullname: fullname,
        courseId: courseId,
      }).then((data) => {
        setFullname("");
        setCourseId("");
        setCourseNum("");
        setVisible(false);
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
        Чтобы добавить нового слушателя заполните поля и нажмите "Сохранить"
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

        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Введите ФИО слушателя..."
        />
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Button variant="secondary" onClick={() => setVisible(false)}>
          Отменить
        </Button>
        <Button
          onClick={addContract}
          style={{ marginLeft: "5px" }}
          variant="success"
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
}

export default DogovorModal;

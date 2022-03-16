import { Button, Card } from "react-bootstrap";

const CardComponent = ({name, DownloadTemp, selectFile, postFile, marginTop }) => {
    return(
        <Card
        style={{ width: "22rem", backgroundColor: "rgb(239 235 235)" }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {name}
          </Card.Title>
          <div style={{marginTop}} className="hr_file"></div>
          <Card.Text
            style={{
              marginTop: "2rem",
              fontFamily: "Roboto",
              fontSize: "20px",
            }}
          >
            Посмотреть текущий шаблон:
          </Card.Text>
          <Button onClick={DownloadTemp} variant="success">
            Смотреть
          </Button>
          <div className="hr"></div>
          <Card.Text style={{ fontFamily: "Roboto", fontSize: "20px" }}>
            Выбрать новый шаблон:
          </Card.Text>
          <input
            onChange={selectFile}
            className="file"
            type="file"
          ></input>
          <Button
            onClick={postFile}
            style={{ marginTop: "1.5rem" }}
            variant="success"
          >
            Заменить
          </Button>
        </Card.Body>
      </Card>
    );
}

export default CardComponent;
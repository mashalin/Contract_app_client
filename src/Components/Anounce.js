import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";
import { Context } from "..";
import { useContext, useEffect } from "react";
import { fetchAnnounce } from "../http/AnnounceApi";

const Anounce = observer(() => {
  const { announ } = useContext(Context);

  useEffect(() => {
    fetchAnnounce().then((data) => announ.setAnnounces(data));
  }, []);

  return (
    <Container style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      {announ.announces.map((ann) => {
        return <div key={ann.id} className="anounce">
            {ann.name}
        </div>;
      })}
    </Container>
  );
});

export default Anounce;

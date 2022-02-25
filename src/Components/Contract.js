import { Container, Row } from "react-bootstrap";
import ContractCard from "./ContractCard";

function Contract({setModal}) {
    return(
        <div >
            <Container style={{paddingTop: '3.5rem', paddingBottom: '5rem'}} >
            <Row>
                <ContractCard setModal={setModal[0]} buttonStyle={{marginTop: '1rem'}} title="Договор о повышении квалификации руководящего работника (специалиста) за счет средств республиканского (местного) бюджета" />
                <ContractCard setModal={setModal[1]} buttonStyle={{marginTop: '3.5rem'}} title="Договор о повышении квалификации руководящего работника (специалиста) на платной основе(для физ.лиц)" />
                <ContractCard setModal={setModal[2]} buttonStyle={{marginTop: '2rem'}} title="Договор о повышении квалификации руководящего работника (специалиста) на платной основе (для организаций)" />
            </Row>
           </Container>
        </div>
    );
}

export default Contract;
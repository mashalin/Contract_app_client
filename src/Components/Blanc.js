import {Container, Row, Col} from 'react-bootstrap';
import blanc from './../imgs/blanc.jpg';
import link from './../docx/blank.docx';

function Blanc() {
    return(
        <Container style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <Row>
                <Col md={6} >
                    <img style={{width: '100%'}} src={blanc} alt="" />
                </Col>
                <Col md={6} >
                    <p style={{fontSize: '20px', fontFamily: 'Roboto', marginTop: '1rem', marginLeft: '2rem'}}>
                       Для граждан Республики Беларусь, желающих пройти обучение на факультете повышения квалификации и переподготовки кадров БГМУ на платной основе, необходимо прислать по почте <a className="link" href={link}>личное заявление</a>.
                    </p>
                    <p style={{fontSize: '20px', fontFamily: 'Roboto',  marginLeft: '2rem'}}>
                    При получении <span className="span">направления на обучение</span> необходимо заполнить и распечатать <span className="span">Договор</span> о повышении квалификации руководящего работника (специалиста) <span className="span">за счет средств республиканского (местного) бюджета</span> или <span className="span">Договор</span> о повышении квалификации руководящего работника (специалиста) <span className="span">на платной основе</span>.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Blanc;
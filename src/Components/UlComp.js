import { Container, Row, Col } from 'react-bootstrap';
import LiComp from './LiComp';

function UlComp() {
    return(
        <div style={{backgroundColor: '#cdcaca', paddingTop: '5rem', paddingBottom: '5rem'}} >
            <Container>
                <h4 style={{fontWeight: '400', textAlign: 'center'}} >При зачислении на программу повышения квалификации предоставить следующие документы:</h4>
                <Row style={{marginTop: '2rem'}} >
                    <Col md={6} >
                        <LiComp text='Направление (или направление-счет)' />
                        <LiComp text='Командировочное удостоверение' />
                        <LiComp text='Диплом об окончании ВУЗа (оригинал и ксерокопию)' />
                        <LiComp text='Документ, подтверждающий оплату за обучение' />
                        <LiComp text='Договор (оформленный) в 3x экземплярах' />
                        <LiComp text='Паспорт (оригинал и ксерокопию стр. 31, 33)' />
                    </Col>
                    <Col md={6} >
                        
                        <LiComp text='Копию документа, удостоверяющую перемену имени, фамилии' />
                        <LiComp text='Лицам без гражданства иметь при себе вид на жительство и копию
                                 вида на жительство (оригинал и ксерокопию стр. 15, 17), одну фотографию' />
                        <LiComp text='Для юридических лиц, направляющих своих работников
                            на обучение на платной основе – копию документа организации,
                              подтверждающего основания для заключения договора (кроме Устава)' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UlComp;
import {Col, Row} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Footer() {

    
    

    const mobile = useMediaQuery({ query: '(max-width: 767px)' });

    return(

        <div style={{ backgroundColor: '#484545', paddingTop: '3rem', paddingBottom: '3rem'}} >
            <Row>
                <Col sm={6} md={7} lg={8} >
                 <div className='footer_div' style={{marginLeft: '7%'}} >
                   © 1921—2021 Учреждение образования «Белорусский государственный медицинский университет».
                 </div>
                </Col>
                <Col sm={6} md={5} lg={4} >
                  <div style={
                      mobile
                      ? {marginLeft: '7%', marginTop: '1rem'}
                      : {marginTop: '0px'}
                  }>
                      <a className='footer_link' rel="noreferrer" target='_blank' href="https://www.bsmu.by/page/18/1481/">Контактная информация</a>
                     <div className='footer_div' >220116, г. Минск, пр. Дзержинского, 83</div>
                     <div className='footer_div' >Тел: +375 17 252-12-01. Факс: +375 17 348-12-02</div>
                   </div>
                </Col>
            </Row>
            
        </div>
    );
}

export default Footer;
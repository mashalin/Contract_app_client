import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminNavbar from "../Components/AdminNavbar";
import { Context } from "..";
import trash from './../imgs/trash_icon.svg'
import edit from './../imgs/edit_icon.svg'
import {Button} from "react-bootstrap";
import MyModal from "../UI/MyModal/MyModal";
import CathedraModal from "../Components/CathedraModal";
import { deleteCathedra, fetchCathedras, fetchOneCathedra } from "../http/cathedraApi";
import EditCathedraModal from "../Components/EditCathedraModal";

const  Cathedra = observer( () => {
    const {cathedra} = useContext(Context); 
    const [modal, setModal] = useState(false);
    const [cathedraEdit, setCathedraEdit] = useState({});
    const [ed, setEd] = useState(false);
    
    
    function deleteCath(id) {
        deleteCathedra(id).then( data => {
            window.location.reload();
        })
    }

    useEffect( () => {
        fetchCathedras().then(data => cathedra.setCathedras(data));
    }, [])

    function editFunc(id) {
        setEd(true);
        fetchOneCathedra(id).then(data => setCathedraEdit(data));
    }
    

    return(
        <div  style={{marginBottom: '4rem'}} >
            <AdminNavbar/>

            <Container  style={{marginTop: '7rem'}} >
                 <MyModal visible={modal} setVisible={setModal} > 
                        <CathedraModal setVisible={setModal} />
                 </MyModal>

                 <MyModal visible={ed} setVisible={setEd} > 
                        <EditCathedraModal setCathedraEdit={setCathedraEdit} cathedraEdit={cathedraEdit} setVisible={setEd} />
                 </MyModal>
                  <div>
                      <Row>
                          <Col md={10} >
                           <h2 style={{marginLeft: '1rem'}} >Редактор базы кафедр</h2>
                          </Col>
                          <Col md={2} >
                                <Button onClick={() => setModal(true)}  variant='success' >Добавить кафедру</Button>
                          </Col>
                      </Row>
                  </div>

                  <div style={{marginTop: '4rem'}} className='cathHead' >
                        <Row>
                             <Col md={3}>
                                Название
                            </Col>
                            <Col md={2} >
                              Зав.кафедры
                            </Col>
                             <Col md={3} > 
                             Адрес
                             </Col>
                             <Col md={2} >
                              Телефон
                            </Col>
                            <Col md={1} >
                                  
                            </Col>
                             <Col md={1} >
                                   
                            </Col>
                        </Row>
                  </div>
               
                    {cathedra.cathedras.map( cath => 
                        <div className='cathItem' key={cath.id} >
                            <Row>
                                <Col md={3}>
                                    {cath.name}
                                </Col>
                                <Col md={2} >
                                    {cath.zav_name}
                                </Col>
                                <Col md={3} > 
                                    {cath.address}
                                </Col>
                                <Col md={2} >
                                    {cath.telephone}
                                </Col>
                                <Col md={1} >
                                  <img onClick={() => editFunc(cath.id)} style={{height: '27px', cursor: 'pointer'}} src={edit} alt="" />
                                </Col>
                                <Col md={1} >
                                   <img onClick={() => deleteCath(cath.id)} style={{height: '30px', cursor: 'pointer'}} src={trash} alt="" />
                                </Col>
                            </Row>
                        </div>
                        )}
                
            </Container>
        </div>
    );
})

export default Cathedra;

import Navibar from './../Components/Navibar';
import Jumbotron from './../Components/Jumbotron';
import Blanc from './../Components/Blanc';
import Contract from './../Components/Contract';
import Anounce from './../Components/Anounce';
import UlComp from './../Components/UlComp';
import Footer from './../Components/Footer';
import MyModal from './../UI/MyModal/MyModal';
import { useState } from 'react';
import ContractModal1 from './../Components/ContractModal1';
import ContractModal2 from './../Components/ContractModal2';
import ContractModal3 from './../Components/ContractModal3';
import { Spinner } from 'react-bootstrap';

function Home() {

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Spinner className='spinner' variant="success" style={{width: '50px', height: '50px'}} animation={'border'} />
  }

  return (
    <div className="App">
        <MyModal visible={modal} setVisible={setModal} > 
          <ContractModal1 setLoading={setLoading} setVisible={setModal} />
        </MyModal>
        <MyModal visible={modal2} setVisible={setModal2} > 
         <ContractModal2 setLoading={setLoading} setVisible={setModal2} />
         </MyModal>
        <MyModal visible={modal3} setVisible={setModal3} > 
          <ContractModal3 setLoading={setLoading} setVisible={setModal3} />
        </MyModal>
        <Navibar/>
        <Jumbotron/>
        <Blanc/>
        <Contract setModal={[setModal, setModal2, setModal3]}  />
        <Anounce/>
        <UlComp/>
        <Footer/>
    </div>
  );
}

export default Home;

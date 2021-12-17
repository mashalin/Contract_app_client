
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { check } from './http/userApi';
import { Spinner } from 'react-bootstrap';

const App = observer( () => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    check().then( data => {
      user.setUser(data);
      user.setIsAuth(true);
    }).finally( () => setLoading(false));
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
       <AppRouter/>
    </BrowserRouter>
  );
})


export default App;

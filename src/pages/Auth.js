import { useState, useEffect, useContext } from "react";
import { Button, Row, Col, Nav } from "react-bootstrap";
import axios from "axios";
import { fetchAdmins } from "../http/AdminApi";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { COURSE_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { REGISTRATION_ROUTE } from "../utils/consts";
import { loginFunc, registration } from "../http/userApi";

const Auth = observer(() => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmpty, setLoginEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const [loginError, setLoginError] = useState("Заполните это поле!");
  const [passwordError, setPasswordError] = useState("Заполните это поле!");

  const { admin } = useContext(Context);
  const { user } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  useEffect(() => {
    fetchAdmins().then((data) => admin.setAdmins(data));
  }, []);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginEmpty(true);
        break;
      case "password":
        setPasswordEmpty(true);
        break;
    }
  };

  useEffect(() => {
    if (!login) {
      setLoginError("Заполните это поле!");
    } else {
      setLoginError("");
    }
    if (!password) {
      setPasswordError("Заполните это поле!");
    } else {
      setPasswordError("");
    }
  }, [login, password]);

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const auth = async () => {
    if (admin.admins.filter((obj) => obj.login === login).length > 0) {
      
      try {
        let data;
        if (isLogin) {
          data = await loginFunc(login + '@bsmu.by', password);
          
        } else {
          data = await registration(login + '@bsmu.by', password);
        }
        user.setIsAuth(true);
        user.setUser(data);
        navigate(COURSE_ROUTE);
      } catch (e) {
        alert(e.response.data.message);
      }

    } else {
      alert("У вас нет доступа!");
    }
   
  };

  return (
    <div className="auth_div">
      <div className="auth">
        <h3>Администрирование договоров ПК</h3>
        <h4 style={{ textAlign: "center", color: "green", marginTop: "1rem" }}>
          {isLogin ? "Авторизация" : "Регистрация"}
        </h4>
        {loginEmpty && loginError && (
          <div style={{ color: "red" }}>{loginError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          name="login"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type="text"
          placeholder="Введите логин..."
        />
        {passwordEmpty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onBlur={(e) => blurHandler(e)}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Введите пароль..."
        />
        <Row
          style={{
            marginTop: "2rem",
            alignItems: "center",
            fontFamily: "Roboto",
            fontSize: "20px",
          }}
        >
          {isLogin ?(
            <>
              <Col>
                <div>Нет аккаунта?</div>
              </Col>
              <Col>
                <Nav.Link
                  style={{ color: "green" }}
                  as={Link}
                  to={REGISTRATION_ROUTE}
                >
                  Зарегистрируйся!
                </Nav.Link>
              </Col>
              </>
          ) : (
            <>
              <Col>
                <div>Есть аккаунта?</div>
              </Col>
              <Col>
                <Nav.Link
                  style={{ color: "green" }}
                  as={Link}
                  to={LOGIN_ROUTE}
                >
                  Войдите!
                </Nav.Link>
              </Col>
            </>
          )}

          <Col>
            <Button
              disabled={!formValid}
              onClick={auth}
              variant="success"
              style={{ marginLeft: "3.7rem" }}
            >
              {
                isLogin ? 'Войти' : "Регистрация"
              }
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default Auth;

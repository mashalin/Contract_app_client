import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { fetchAdmins } from "../http/AdminApi";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import {  useNavigate } from "react-router-dom";
import { COURSE_ROUTE} from "../utils/consts";
import { loginFunc } from "../http/userApi";

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

        data = await loginFunc(login + "@bsmu.by", password);

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
    <div
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          auth();
        }
      }}
      className="auth_div"
    >
      <div className="auth">
        <h3>Администрирование договоров ПК</h3>
        <h4 style={{ textAlign: "center", color: "green", marginTop: "1rem" }}>
          Авторизация
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

        <Button
          disabled={!formValid}
          onClick={auth}
          variant="success"
          style={{
            marginTop: "2rem",
            fontFamily: "Roboto",
            fontSize: "20px",
          }}
        >
          Войти
        </Button>
      </div>
    </div>
  );
});

export default Auth;
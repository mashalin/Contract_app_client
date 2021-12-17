import { observer } from "mobx-react-lite";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "..";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  ANNOUNCE_ROUTE,
  CATHEDRA_ROUTE,
  COURSE_ROUTE,
  CUSTOMER_ROUTE,
  FILE_ROUTE,
  LOGIN_ROUTE,
  PRINT_ROUTE,
} from "../utils/consts";

const AdminNavbar = observer( () => {

  const {user} = useContext(Context);

  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
    localStorage.removeItem('token');
  }

  return (
    <div>
      <Navbar
        bg="success"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand className="nav-brand" style={{ marginLeft: "5%" }}>
          БГМУ
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ marginRight: "5%" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link as={Link} to={PRINT_ROUTE}>
              Печать направлений
            </Nav.Link>
            <Nav.Link as={Link} to={COURSE_ROUTE}>
              Редактор базы ФПК
            </Nav.Link>
            <Nav.Link as={Link} to={ADMIN_ROUTE}>
              Добавить администратора
            </Nav.Link>

            <Nav.Link as={Link} to={ANNOUNCE_ROUTE}>
              Добавить объявление
            </Nav.Link>

            <Nav.Link as={Link} to={CUSTOMER_ROUTE}>
              Добавить заказчика
            </Nav.Link>
            <Nav.Link as={Link} to={CATHEDRA_ROUTE}>
              Редактор базы кафедр
            </Nav.Link>
            <Nav.Link as={Link} to={FILE_ROUTE}>
              Редактор шаблонов
            </Nav.Link>
          </Nav>
          <Nav style={{ marginRight: "5%", marginLeft: "5%" }}>
            <Button
              style={{ backgroundColor: "rgb(124, 118, 118)" }}
              variant="secondary"
              onClick={() => logOut()}
            >
              Выход
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
})



export default AdminNavbar;

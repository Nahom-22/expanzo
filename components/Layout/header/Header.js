import { useRouter } from "next/router";
import { useContext } from "react";
import { logoContext } from "../../../store/logo-context";
import Button from "../../UI/Button/Button";
import NavCard from "../../UI/Card/navcard/NavCard";
import ImageItem from "../../UI/Image/Image";
import NavButton from "../../UI/NavButton/NavButton";

import { faBars, faPen, faUser } from "@fortawesome/free-solid-svg-icons";

import classes from "./header.module.css";

function Header() {
  const router = useRouter();
  const ctx = useContext(logoContext);
  const handleClick = (path) => {
    const { value } = path;
    router.push(`/${value}`);
  };
  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.headerElement}>
          <NavCard>
            <NavButton icon={faBars} color="white" Textcolor="white" />
            <Button
              className="nav-btn"
              onClick={handleClick.bind(null, { value: "" })}
            >
              Dashboard
            </Button>
            <Button
              className="nav-btn"
              onClick={handleClick.bind(null, { value: "contact" })}
            >
              Contact
            </Button>
          </NavCard>
        </div>
        <div className={classes.headerElement}>
          {ctx.logoShow && (
            <Button onClick={handleClick.bind(null, { value: "" })}>
              <ImageItem src="/logo-expanzo.svg" width="70px" height="40px" />
            </Button>
          )}
        </div>
        <div className={classes.headerElement}>
          <NavCard>
            <NavButton
              name="Register"
              icon={faPen}
              color="white"
              Textcolor="white"
            />
            <NavButton
              name="Log In"
              icon={faUser}
              color="white"
              Textcolor="white"
            />
          </NavCard>
        </div>
      </div>
    </div>
  );
}

export default Header;

import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./navButton.module.css";
function NavButton(props) {
  console.log(props.Textcolor);
  return (
    <div className={classes.navButton}>
      <Button onClick={props.onClick} className={classes.navBtn}>
        <div className={classes.btnElements}>
          <FontAwesomeIcon icon={props.icon} color={props.color} />
          <h5 className={classes.element}>{props.name}</h5>
        </div>
      </Button>
    </div>
  );
}

export default NavButton;

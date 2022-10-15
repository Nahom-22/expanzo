import NavButton from "../NavButton/NavButton";

import classes from "./contactElement.module.css";

function ContactElement(props) {
  return (
    <div className={classes.contactElement}>
      <div className={classes.contactTop}>
        <NavButton
          icon={props.icon}
          name={props.name}
          color={props.color}
        />
      </div>
      <div className={classes.contactBottom}>
        <p>{props.contactText1}</p>
        <p>{props.contactText2}</p>
        <p>{props.contactText3}</p>
      </div>
    </div>
  );
}

export default ContactElement;

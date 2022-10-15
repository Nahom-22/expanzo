import classes from "./button.module.css";

function Button(props) {
  return (
    <button className={classes.btn} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;

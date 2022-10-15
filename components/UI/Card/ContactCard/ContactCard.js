import classes from './contactCard.module.css'

function ContactCard(props) {
  return <div className={classes.contactCard}>{props.children}</div>;
}

export default ContactCard;

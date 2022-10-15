import classes from './navcard.module.css'
function NavCard(props) {
  return (
    <div className={classes.navCard}>
        {props.children}
    </div>
  )
}

export default NavCard
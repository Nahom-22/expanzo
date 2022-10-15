import { useContext, useEffect } from "react";
import ContactCard from "../../components/UI/Card/ContactCard/ContactCard";
import ContactElement from "../../components/UI/ContactElement/ContactElement";
import { logoContext } from "../../store/logo-context";

import { faLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons";


import classes from "./contact.module.css";

function Contact() {
  const ctx = useContext(logoContext);
  useEffect(() => {
    ctx.onShowLogo();
  }, []);
  return (
    <div className={classes.contactPage}>
      <div className={classes.contactContainer}>
        <div className={classes.cardContainer}>
          <h3>Contact</h3>
          <div className={classes.contactOptions}>
            <ContactCard>
              <ContactElement
                icon={faLocationDot}
                name="Headquarters"
                color="green"
                contactText1="DHO s.r.o"
                contactText2="Borivojova 1300/00"
                contactText3="130 00"
              />
              <ContactElement
                icon={faEnvelope}
                name="Email"
                color="green"
                contactText1="info@expanzo.com"
              />
            </ContactCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

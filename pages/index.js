import { useContext, useEffect } from "react";
import Button from "../components/UI/Button/Button";
import NavCard from "../components/UI/Card/navcard/NavCard";
import Image from "../components/UI/Image/Image";
import { logoContext } from "../store/logo-context";

import classes from "./home.module.css";

const Home = () => {
  const ctx = useContext(logoContext);
  useEffect(() => {
    ctx.onHideLogo();
  }, []);
  console.log("in home");
  return (
    <div className={classes.homePage}>
      <div className={classes.homeContainer}>
        <Image
          src="/logo-expanzo-black.svg"
          width="140px"
          height="70px"
          alt="black-logo"
          className="big"
        />
        <div className={classes.contentContainer}>
          <NavCard>
            <Button className="active">ALL</Button>
            <Button className="btn">Companies</Button>
            <Button className="btn">Phones</Button>
          </NavCard>
        </div>
      </div>
    </div>
  );
};

export default Home;

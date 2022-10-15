import { useRouter } from "next/router";
import Button from "../../UI/Button/Button";
import NavCard from "../../UI/Card/navcard/NavCard";
import ImageItem from "../../UI/Image/Image";

import classes from "./footer.module.css";

function Footer() {
  const router = useRouter();
  const handleClick = (path) => {
    const { value } = path;
    router.push(`/${value}`);
  };
  return (
    <div className={classes.footerPage}>
      <div className={classes.footerContainer}>
        <Button onClick={handleClick.bind(null, { value: "" })}>
          <ImageItem
            src="/logo-expanzo-black.svg"
            width="90px"
            height="120px"
            className="big"
          />
        </Button>
        <NavCard>
          <Button
            className="bare-btn"
            onClick={handleClick.bind(null, { value: "contact" })}
          >
            Contact
          </Button>
          <Button className="btn">Phones</Button>
          <Button className="btn">Top Searches</Button>
        </NavCard>
      </div>
    </div>
  );
}

export default Footer;

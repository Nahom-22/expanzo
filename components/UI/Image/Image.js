import { useState } from "react";
import classes from "./image.module.css";
import Image from "next/image";

function ImageItem(props) {
  const [big, SetBig] = useState(true);
  if (props.className === "small") {
    SetBig(false);
  }
  return (
    <div className={classes.image}>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        className={big ? classes.big : classes.small}
      />
    </div>
  );
}

export default ImageItem;

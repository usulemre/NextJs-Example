import { useRouter } from "next/router";
import React from "react";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";
function MeetupItem(props) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push("/" + props.id);
  };
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.img}>
          <img src={props.image} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h1>{props.address}</h1>
        </div>
        <div className={classes.action}>
          <button onClick={showDetailHandler}>incele</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;

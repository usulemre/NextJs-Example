import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
function MeetupList(props) {
  return (
    <ul className={classes.List}>
      {props.meetups.map((item) => (
        <MeetupItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          address={item.address}
          description={item.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

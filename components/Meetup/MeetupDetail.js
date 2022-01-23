import classes from "./MeetupDetail.module.css";
function MeetupDetail(props) {
  return (
    <section className={classes.section}>
      <img src={props.image} className={classes.img} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;

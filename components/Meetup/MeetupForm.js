import React from "react";
import Card from "../UI/Card";
import classes from "./MeetupForm.module.css";
import { useRef } from "react";
function MeetupForm(props) {
  const Title = useRef();
  const Image = useRef();
  const Address = useRef();
  const Description = useRef();
  const addFormHandler = (event) => {
    event.preventDefault();
    const TitleContext = Title.current.value;
    const ImageContext = Image.current.value;
    const AddressContext = Address.current.value;
    const DescriptionContext = Description.current.value;
    const meetupData = {
      title: TitleContext,
      image: ImageContext,
      address: AddressContext,
      description: DescriptionContext,
    };
    props.onAdd(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={addFormHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={Title} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={Image} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={Address} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={Description}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>add</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;

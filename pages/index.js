import MeetupList from "../components/Meetup/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';
function index(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://emre:WEC2mocOonu4GOG3@cluster0.csjdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: result.map((item) => ({
        title: item.title,
        image: item.image,
        address: item.address,
        description: item.description,
        id: item._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default index;

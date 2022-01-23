import { useRouter } from "next/router";
import MeetupDetail from "../../components/Meetup/MeetupDetail";

function index(props) {
  const router = useRouter();
  console.log(router.query.meetupId);
  return (
    <MeetupDetail
      image={props.meetupsData.image}
      description={props.meetupsData.description}
      title={props.meetupsData.title}
      address={props.meetupsData.address}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    patsh: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupsData: {
        image:
          "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        description: "ankaraaaa",
        title: "emreeee",
        address: "usullll",
        id: meetupId,
      },
    },
  };
}

export default index;

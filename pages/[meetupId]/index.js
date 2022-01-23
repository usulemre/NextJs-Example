import { useRouter } from "next/router";
import MeetupDetail from "../../components/Meetup/MeetupDetail";

function index() {
  const router = useRouter();
  console.log(router.query.meetupId);
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
      description="ankaraaaa"
      title="emreeee"
      address="usullll"
    />
  );
}

export default index;

import MeetupForm from "../../components/Meetup/MeetupForm";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  const addHandler = (metupData) => {
    console.log(metupData);
    router.push("/");
  };
  return <MeetupForm onAdd={addHandler} />;
}

export default index;

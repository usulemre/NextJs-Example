import MeetupForm from "../../components/Meetup/MeetupForm";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }
  return <MeetupForm onAdd={addMeetupHandler} />;
}

export default index;

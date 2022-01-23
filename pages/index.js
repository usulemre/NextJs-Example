import MeetupList from "../components/Meetup/MeetupList";

const DUMY_DATA = [
  {
    id: "m1",
    title: "emreeee",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "usullll",
    description: "ankaraaaa",
  },
  {
    id: "m2",
    title: "emreeee",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "usullllllllllllllllllllllllllllllllllllll",
    description: "ankaraaaa",
  },
];
function index() {
  return <MeetupList meetups={DUMY_DATA} />;
}

export default index;

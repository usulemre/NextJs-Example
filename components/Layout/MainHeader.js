import Link from "next/link";
import classes from "./MainHeader.module.css";
import { useRouter } from "next/router";
function MainHeader() {
  const router = useRouter();
  console.log(router);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>NextJs</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Meetup</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

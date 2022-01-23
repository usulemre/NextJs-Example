import Link from "next/link";
import classes from "./MainHeader.module.css";
function MainHeader() {
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

import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
import { AiFillStar } from "react-icons/ai";
import { GrMap, GrMapLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <GrMap />내 지역 보기
            </NavLink>
          </li>
          <li>
            <NavLink to="/allarea">
              <GrMapLocation />
              전체 시도 보기
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              <AiFillStar />
              즐겨찾기
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

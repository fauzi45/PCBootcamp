import classes from "./style.module.scss";

import iconUser from "../../assets/icons/userNavbar.svg";
import iconJourney from "../../assets/icons/writeNavbar.svg";
import iconBookmark from "../../assets/icons/bookmarkNavbar.svg";
import iconLogout from "../../assets/icons/logoutNavbar.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "@containers/Client/actions";



const Dropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(setLogin(false));
        dispatch(setToken(null));
      };
    return (
        <div>
            <ul className={classes.dropdownProfile}>
                <li className={classes.baris} onClick={() => navigate("/profile")}><img src={iconUser} /> <p>Profile</p></li>
                <li className={classes.baris} onClick={() => navigate("/create")}><img src={iconJourney} /> <p>New Journey</p></li>
                <li className={classes.baris} onClick={() => navigate("/bookmark")}><img src={iconBookmark} /> <p>Bookmark</p></li>
                <li style={{ border: "1px solid #A8A8A8", width: "100%" }}></li>
                <li className={classes.baris} onClick={logout}><img src={iconLogout} /> <p>Logout</p></li>

            </ul>
        </div>)
}

export default Dropdown;
import HeaderItem from "./HeaderItem";
import close from "../../assets/images/close.png";
import "../../assets/scss/menu.scss";
import cuteTeam3161 from "../../assets/images/cuteteam3161.svg";
import mantoCute from "../../assets/images/mantocute.png";
import { Link } from "react-router-dom";

const Menu = ({ active, toggleActive, queue }) => {
	return (
		<div className={`menu` + (active ? " active" : "")}>
			<div className="top">
				<h1>ICS</h1> <img src={close} onClick={toggleActive} alt="" />
			</div>
			<div className="bottom" onClick={toggleActive}>
				<HeaderItem url="/scout" title="Scout" />
				<HeaderItem
					url="/qualification_matches"
					title="Schedule"
				></HeaderItem>
				<Link className="item queue" to="/queue">
					<div>
						Queue
						{queue !== 0 && <span>{queue}</span>}
					</div>
				</Link>
				<HeaderItem url="/admin" title="Admin" />
				<HeaderItem url="/aboutus" title="About us"></HeaderItem>
			</div>
		</div>
	);
};
export default Menu;

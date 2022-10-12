import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>Mummy Ts Recipes</h3>
			
			<nav ref={navRef}>
				{/* <a href="/homePage">Home</a> */}
				<a href="/#">Our Recipies</a>
				<h></h>
				{/* <a href="/#">Blog</a> */}
				<a href="/#">Contact Us</a>
				<a href="/Signup">Sign Up!</a>
				<a href="/Login">log In!</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
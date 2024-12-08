import Link from "next/link";
import SearchIcon from "../../assets/images/blog/search-icon.png";
function Search() {
	return (
		<div className="sofax-subscription-field-inner">
			<input type="email" placeholder="Serach" />
			<div className="search-icon-img">
				<Link href="https://www.google.com/">
					<img src={SearchIcon} alt="search icon" />
				</Link>
			</div>
		</div>
	);
}

export default Search;

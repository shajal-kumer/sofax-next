import Logo from "@/public/images/logo/logo-white.svg";
import Link from "next/link";
function HeaderTwo() {
	return (
		<div className="sofax-form-header">
			<div className="container">
				<div className="sofax-form-header-logo">
					<Link href="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeaderTwo;

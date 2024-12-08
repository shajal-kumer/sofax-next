import Footer from "@/components/home/home-five/footer";

import Header from "../../common/header";
function LayoutEleven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;

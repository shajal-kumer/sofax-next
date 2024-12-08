import Footer from "@/components/home/home-six/footer";
import Header from "@/components/home/home-six/header/multi-page";

function LayoutSix({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutSix;

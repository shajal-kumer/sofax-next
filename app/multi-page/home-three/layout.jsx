import Footer from "@/components/home/home-three/footer";
import Header from "@/components/home/home-three/header/multi-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Three",
	description: "Sofax || Responsive Next.js Template",
};
function LayoutThree({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutThree;
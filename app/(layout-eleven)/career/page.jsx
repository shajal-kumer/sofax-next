import Career from "@/components/career-page";
import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Career Page",
	description: "Sofax || Responsive Next.js Template",
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title="Career" />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;

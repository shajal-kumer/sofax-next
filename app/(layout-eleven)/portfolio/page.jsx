import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import PortfolioList from "@/components/portfolio/PortfolioList";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Portfolio Page",
	description: "Sofax || Responsive Next.js Template",
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;

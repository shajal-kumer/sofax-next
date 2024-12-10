import useScrollTop from "../../hooks/useScrollTop";
import ScrollToTop from "../common/ScrollToTop";
function Layout() {
	useScrollTop();
	return (
		<>
			{children}
			<ScrollToTop />
		</>
	);
}

export default Layout;

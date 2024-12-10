import Shape from "@/public/images/v5/shape1.png";
import Image from "next/image";
import Link from "next/link";
function FooterCta() {
	return (
		<>
			<div className="col-xl-8 col-lg-8">
				<div className="tg-heading-subheading animation-style3">
					<h2>Let's embark on a IT services together!</h2>
				</div>
				<div className="sofax-footer-shapev8">
					<Image src={Shape} alt="shape" />
				</div>
			</div>
			<div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
				<div className="sofax-footer-title-btn-wrap">
					<Link className="sofax-footer-title-btn-icon" href="/contact-us">
						<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M5.861 2.21467C5.97102 0.95711 7.07967 0.0268449 8.33723 0.136868L27.6584 1.82725C28.9159 1.93727 29.8462 3.04591 29.7362 4.30348L28.0458 23.6246C27.9358 24.8822 26.8271 25.8124 25.5695 25.7024C24.312 25.5924 23.3817 24.4837 23.4917 23.2262L24.7012 9.40225L4.41495 26.4244C3.44792 27.2359 2.00619 27.1097 1.19476 26.1427C0.383325 25.1757 0.509462 23.7339 1.47649 22.9225L21.7627 5.90034L7.9388 4.6909C6.68124 4.58088 5.75098 3.47223 5.861 2.21467Z"
								fill="#0E0E0E"
							/>
						</svg>
						<span></span>
					</Link>
				</div>
			</div>
		</>
	);
}

export default FooterCta;
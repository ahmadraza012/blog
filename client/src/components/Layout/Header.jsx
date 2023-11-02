import React from "react";

const Header = () => {
	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-between">
				<div className="fs-30 text-primary-700 fw-500">Blog</div>
				<div className="d-flex align-items-center gap-4">
					<a href="javascript:void(0)" className="fs-20 fw-500 text-base-blue">
						Login
					</a>
					<a href="javascript:void(0)" className="fs-20 fw-500 text-base-blue">
						Signup
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;

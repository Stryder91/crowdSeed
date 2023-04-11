/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useRef } from "react";

import { Transition } from "@headlessui/react";
import burger from "../../assets/img/white_burger.svg";
import fr from "../../assets/img/french.png";
import uk from "../../assets/img/english.png";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const DDownMobile = ({ routes }) => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const mobileNavRef = useRef(null);
	return (
		<Fragment>
			<div
				className="cursor-pointer flex justify-center items-center"
				onClick={() => setIsMobileNavOpen(true)}>
				<img
					src={burger}
					alt="menu burger"
					aria-hidden="true"
					width="60"
					heigh="40"
				/>
			</div>
			<Transition as={Fragment} show={isMobileNavOpen}>
				<div
					onClick={() => setIsMobileNavOpen(false)}
					className="fixed h-full w-full top-0 left-0 bg-black/30 z-50 ">
					<Transition.Child
						enter="transition ease-in-out transform duration-300"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out transform duration-300"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
						as={Fragment}>
						<div
							ref={mobileNavRef}
							className="w-60 sm:w-72 ml-auto h-full bg-gray-50 shadow p-4 text-gray-900 divide-y divide-solid divide-black ">
							{routes
								? routes.map((item, i) => {
										return (
											<div key={i}>
												{
													<a href={item.path}>
														<div
															className={
																"p-3  cursor-pointer text-center text-sm md:text-lg font-bold"
															}>
															{item.name}
														</div>
													</a>
												}
											</div>
										);
								  })
								: null}
							<a
								href="/"
								locale="en-US">
								<span
									className={classNames(
										"flex p-3 justify-center cursor-pointer"
									)}>
									<img src={uk} alt="english" width="40" height="40" />
								</span>
							</a>
							<a
								href="/"
								locale="fr-FR">
								<span
									className={classNames(
										"flex p-3 justify-center cursor-pointer"
									)}>
									<img src={fr} alt="french" width="40" height="40" />
								</span>
							</a>
						</div>
					</Transition.Child>
				</div>
			</Transition>
		</Fragment>
	);
};

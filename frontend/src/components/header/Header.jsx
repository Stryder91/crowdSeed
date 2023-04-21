import { useTranslation } from "react-i18next";

import { DDownMobile } from "./Dropdown_Mobile";
import { SwitchLocale } from "../others/SwitchLocale";
import { HeaderUrls } from "./HeaderUrls";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";

export const Header = () => {

  const { t } = useTranslation();

  const _routes = [
    {
      name: "Homes",
      path: "/homes"
    },
  ];

	return (
		<header className="header flex items-center justify-between px-10 py-5">
			<div className="title lg:mr-5 cursor-pointer flex items-center">
				<a href="/">
          {/* <img src={logo} layout="fixed" /> */}
          {t("title")}
				</a>
			</div>

      

      {/* MOBILE */}
			<div className="flex items-center xl:hidden">
				<DDownMobile routes={_routes} />
			</div>

			{/* DESKTOP */}
			<div className='hidden lg:flex'>
        <HeaderUrls routes={_routes}/>
        <LoginButton />
        <LogoutButton />
        <SwitchLocale />
			</div>
		</header>
	);
};
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import { createMarkup } from "./utils/helpers/parsing";

import plus from "../assets/img/plus-circle.png";
import minus from "../assets/img/minus-circle.png";

export const FAQ = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  const _onClick = (i) => {
    if (active === i) {
      setActive(null);
    } else {
      setActive(i);
    }
  };

  return (
    <div className="faq-frame faq-frame-bg w-full m-auto pt-10 text-white" id="faq">
      <div className="container m-auto">

        <div className="px-10 mb-10">
          <h1 className="title-ltr pt-20">{t('FAQ.title')}</h1>
          <p className="faq-subtitle text-2xl">{t('FAQ.subtitle')}</p>
        </div>
        <div className="dropdown-frame">
          {[...Array(11).keys()].map((d, i) => {
            return (
              <div
                key={i}
                onClick={() => _onClick(i + 1)}
                className={`my-10 cursor-pointer ${
                  active !== i + 1 ? "cursor-pointer" : null
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-left font-bold dropdown-banner">
                      <span className="lg:text-3xl ">
                        {i < 9 ? "0" + (i + 1) : i + 1}
                      </span>{" "}
                      &nbsp;
                      <span>{t(`FAQ.${i}.question`)}</span>
                    </p>
                    <div
                      className={
                        active && active === i + 1 ? "dropdown-content" : "hidden"
                      }
                    >
                      <p className="lg:pr-12" dangerouslySetInnerHTML={createMarkup(t(`FAQ.${i}.answer`))}/>
                    </div>
                  </div>
                  <div className="absolute right-5 lg:right-20">
                    {active && active === i + 1
										? <img src={minus} alt="minus" />
										: <img src={plus} alt="plus" />
                  	}
                  </div>
                </div>
                <hr className="w-full faq-hr mt-5" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

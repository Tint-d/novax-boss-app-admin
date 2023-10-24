import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SideBarTabData } from "../typings/type";

type SidebarTabProps = {
  data: SideBarTabData;
  onClick?: () => void;
};

const SidebarTab = ({
  data: { Icon, label, link },
  onClick,
}: SidebarTabProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === link && !active) setActive(true);
    else setActive(false);
  }, [pathname]);

  const onClickHandler = () => {
    if (onClick) onClick();
    else navigate(link);
  };

  return (
    <button
      onClick={onClickHandler}
      className={`w-full h-[50px] rounded-[5px] px-[10px] py-[5px] gap-[10px] flex items-center ${
        active
          ? "bg-warining text-hightlightColor"
          : "bg-transparent text-white text-opacity-50"
      }`}
    >
      <Icon size={24} />

      <p className={`text-[20px] ${active ? "font-[600]" : "font-[400]"} `}>
        {label}
      </p>
    </button>
  );
};

export default SidebarTab;

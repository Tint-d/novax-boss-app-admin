import React, { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
  title: string;
}
const FormCard: React.FC<ComponentProps> = ({ children, title }) => {
  return (
    <div className="bg-tableBgColor rounded-[20px] mb-8 p-[15px]">
      <p className="text-textColor text-[20px] font-[400] mb-5"># {title} </p>
      {children}
    </div>
  );
};

export default FormCard;

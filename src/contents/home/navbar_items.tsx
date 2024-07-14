import { BsPerson, BsRocketTakeoff, BsTools } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export const NavbarItems = () => {
  return (
    <div className="mt-3 flex w-full justify-between rounded-2xl border border-[#27262C]/40 bg-[#18181D]/60 p-5">
      <BsPerson size={24} className="text-lightGray" />
      <BsRocketTakeoff size={24} className="text-lightGray" />
      <BsTools size={24} className="text-lightGray" />
      <TfiEmail size={24} className="text-lightGray" />
    </div>
  );
};

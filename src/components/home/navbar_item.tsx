import Link from "next/link";

type NavBarItemProps = {
  label: string;
};

export const NavBarItem = ({ label }: NavBarItemProps) => {
  return (
    <li>
      <Link href={`#${label}`} className="text-2xl text-black">
        {label}
      </Link>
    </li>
  );
};

import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import { UserNav } from "./UserNav";
import { SearchModalCompnent } from "./SearchComponent";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto lg:px-10 py-5">
        <Link href="/" passHref>
          <div>
            <Image 
              src={DesktopLogo} 
              alt="Desktop Logo" 
              className="hidden lg:block" 
              width={128} 
              height={32}
            />
            <Image 
              src={MobileLogo} 
              alt="Mobile Logo" 
              className="block lg:hidden" 
              width={48} 
              height={48}
            />
          </div>
        </Link>
        <div className="rounded-full border px-5 py-2">
          <SearchModalCompnent />
        </div>
        <UserNav />
      </div>
    </nav>
  );
}

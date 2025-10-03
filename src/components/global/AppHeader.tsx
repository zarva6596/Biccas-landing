import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
];
export async function Header() {
  const client = createClient();
  const headerNav = await client.getSingle("header_nav");


  return (
    <header className="box-border lg:gap-[500px] flex items-center justify-between px-6 py-4 lg:px-[130px] lg:pt-10 max-w-[1440px] mx-auto w-full">
      <Link
        href="/"
        className="text-3xl lg:text-[50px] lg:leading-[30px] font-semibold text-brand-green transform 
          transition-transform duration-200 hover:scale-110"
      >
        Biccas
      </Link>

      <nav
        aria-label="Global"
        className="hidden lg:flex items-center justify-between"
      >
        <ul className="flex items-center gap-[60px] hover:cursor-pointer hover:text-main-text">
          {headerNav.data.navigation.map(({label, link}) => (
            <li key={label}>
              <PrismicNextLink 
                field={link} 
                className="text-base lg:text-[18px] text-text-secondary-grey hover:text-main-text transition-colors duration-150">
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

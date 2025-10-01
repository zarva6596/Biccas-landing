import Link from "next/link";
import Image from "next/image";


const navData = [
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help centre" },
      { href: "/account-information", label: "Account information" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact us" },
    ],
  },

  {
    title: "Help and Solution",
    links: [
      { href: "/support", label: "Talk to support" },
      { href: "/support-docs", label: "Support docs" },
      { href: "/system-status", label: "System status" },
      { href: "/faq", label: "FAQ" },
    ],
  },

  {
    title: "Product",
    links: [
      { href: "/update", label: "Update" },
      { href: "/security", label: "Security" },
      { href: "/api-status", label: "API Status" },
      { href: "/pricing", label: "Pricing product" },
    ],
  },
];

export default function AppFooter() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex flex-row gap-[157px] pt-[40px] bg-bg-footer">
        <div className="flex flex-col gap-[30px] ml-[130px] mb-[40px] text-left text-bg-tertiary">
          <div className="flex flex-col gap-[30px]">
            <Link href="/" className="text-[50px] leading-[30px] font-semibold text-brand-green">
              Biccas
            </Link>

            <span className="text-lg font-medium text-text-secondary-grey">Get started now try our product</span>
            <input 
              type="email" 
              placeholder="Enter your email here" 
              className="border border-gray-300 p-2 rounded-4xl" />
          </div>

            <span>© {year} Biccas. All rights reserved</span>
        </div>

        <nav className="flex flex-row gap-[64px]">
          {navData.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <span className="text-lg font-semibold text-brand-green mb-7">{item.title}</span>
              
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg space-y-5 font-medium text-text-secondary-grey"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
    </footer>
  );
}

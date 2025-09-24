import Link from "next/link";


export function Header() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className="box-border gap-[500px] flex items-center justify-between px-[130px] pt-10 max-w-[1440px] mx-auto w-full">
      <Link href="/" className="text-[50px] leading-[30px] font-semibold text-brand-green transform transition-transform duration-200 hover:scale-110">
        Biccas
      </Link>

  <nav aria-label="Global" className="hidden lg:flex items-center justify-between">
        <ul className="flex items-center gap-[60px] hover:cursor-pointer hover:text-main-text">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                  className="text-[18px] text-text-secondary-grey hover:text-main-text transition-colors duration-150"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
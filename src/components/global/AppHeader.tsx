import Link from "next/link";
// ...existing code...


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
      <Link href="/" className="text-[50px] leading-[30px] font-semibold text-[#54BD95] transform transition-transform duration-200 hover:scale-110">
        Biccas
      </Link>

  <nav aria-label="Global" className="hidden lg:flex items-center justify-between">
        <ul className="flex items-center gap-[60px] hover:cursor-pointer hover:text-black">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                  className="text-[18px] text-[#A6A6A6] hover:text-[#191A15] transition-colors duration-150"
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
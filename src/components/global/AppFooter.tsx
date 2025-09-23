import Link from "next/link"; 

export function Footer() {
  const data = [
    { href: "/terms", label: "Terms and Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
  ]

  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="mt-[130px]">
      <div className="container">
        <span className="text">© {year} Biccas. All rights reserved.</span>

        <nav className="nav">
          {data.map((item) => (
            <Link key={item.href} href={item.href} className="link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
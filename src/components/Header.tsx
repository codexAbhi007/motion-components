"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Products", href: "/products" },
];
const Header = () => {
  const pathname = usePathname();
  return (
    <motion.nav
      className="max-w-fit sticky top-7 inset-x-0 mx-auto p-[0.7px] rounded-full z-[5000]
     bg-conic/[from_var(--border-angle)] from-black  via-indigo-500 to-black from-80% via-90% to-100% animate-rotate-border hover:scale-[1.02] transition-transform duration-300 ease-in-out "
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ boxShadow: "0 0 15px rgba(59,130,246,0.5)", cursor: "" }}
    >
      <div className="flex justify-center space-x-3 bg-black border-neutral-800 border w-full rounded-full py-3 px-10   ">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={link.label}
              href={link.href}
              className="text-neutral-500 hover:text-white"
            >
              <motion.div className="relative px-3 rounded-full py-[2px]  group">
                <button className="hover:cursor-pointer ">{link.label}</button>
                {isActive && (
                  <>
                    <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto"></span>
                    <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[5px] w-10/12 transition-opacity duration-300 ease-in mx-auto blur-sm group-hover:opacity-100 opacity-0"></span>
                  </>
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};
export default Header;

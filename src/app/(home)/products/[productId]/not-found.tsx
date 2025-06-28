"use client"
import { usePathname } from "next/navigation";



const NotFound = () => {
    const pathname = usePathname()
    console.log(pathname.split("/"))
  return (
    <div className="h-screen text-indigo-300 flex items-center justify-center bg-black">
      Cannot find product with id {}
    </div>
  );
};
export default NotFound;

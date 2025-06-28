import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const HomeLayout = ({children} : LayoutProps) => {
  return (
    <div className="bg-black h-screen text-white"
    style={{
      backgroundImage: `radial-gradient(circle at 3px 3px, rgba(6,182,212,0.2) 1px, transparent 0)`,
      backgroundSize: "20px 20px",
      backgroundRepeat: "repeat"
    }}>
        <div className="h-[100px]"><Header/></div>
        <div className="container flex items-center justify-center">{children}</div>
        
    </div>
  )
}
export default HomeLayout
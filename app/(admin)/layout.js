import Navbar from "@/components/adminpages/Navbar";
import Slidebar from "@/components/adminpages/Slidebar";

export default function RootLayout({ children }) {
    return (
      <>
      <div className=" flex  font-Text">
        <Slidebar/>
        
         <div className="  w-full  ">
        <Navbar/>
       
        <main className=" mt-14  ml-64 flex  px-3 py-4 mobile:ml-0  min-h-screen bg-[#f6f9fc] " >{children}</main>
        </div>
        </div>


</>
     
    );
  }
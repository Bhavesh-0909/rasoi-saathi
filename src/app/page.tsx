import Navbar from "@/components/Navbar";
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';

function Page() {
  return (
    <main className="relative w-screen h-full bg-gray-100 flex flex-col items-center min-h-screen mx-auto sm:px-10 overflow-hidden">
      {/* Navbar */}
      <Navbar className="w-full top-2 right-4 fixed z-10" />
      
      <div className="max-w-7xl w-full flex mt-4 min-h-screen">
        {/* Sidebar */}
        <Sidebar className="fixed  top-20 left-0 w-1/4 h-screen bg-black shadow-md z-10" />

        {/* Main Page Content */}
        <div className="w-full md:w-3/4 ml-[25%] p-4 md:p-8 bg-white rounded-lg shadow-md">
          <Main className="w-full relative z-0 top-10" />
        </div>
      </div>
    </main>
  );
}

export default Page;
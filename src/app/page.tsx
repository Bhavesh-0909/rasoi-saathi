import Navbar from "@/components/Navbar";
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';

function Page() {
  return (
    <main className="relative w-screen h-full bg-gray-100 flex flex-col items-center min-h-screen mx-auto overflow-hidden">
      {/* Navbar */}
      <Navbar className="w-full top-2 right-4 fixed z-20" />

      <div className=" max-w-7xl w-full flex flex-col md:flex-row mt-20 md:mt-4 min-h-screen">
        {/* Sidebar */}
        <Sidebar className="w-full md:w-1/4 md:fixed static top-28 md:top-20 left-0 h-auto md:h-screen bg-black shadow-md z-10" />

        {/* Main Page Content */}
        <div className="w-full md:w-3/4 md:ml-[25%] p-4 md:p-8 bg-white rounded-lg shadow-md mt-4 md:mt-0">
          <Main className="w-full relative z-0 top-10" />
        </div>
      </div>
    </main>
  );
}

export default Page;

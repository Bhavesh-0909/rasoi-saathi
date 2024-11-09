import Navbar from "@/components/Navbar";
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';

function Page() {
  return (
    <main className="relative w-screen h-full bg-gray-100 flex flex-col items-center min-h-screen mx-auto sm:px-10 overflow-hidden">
      {/* Navbar */}
      <Navbar className="w-full" />
      
      <div className="max-w-7xl w-full flex flex-col md:flex-row mt-4  min-h-screen">
        {/* Main Content */}
        <div className="flex flex-col gap-2  md:flex-row w-full">
          {/* Sidebar */}
          <Sidebar className="md:w-1/4 h-full md:h-screen" />

          {/* Main Page Content */}
          <Main className="md:w-3/4 p-4 md:p-8 bg-white rounded-lg shadow-md" />
        </div>
      </div>
    </main>
  );
}

export default Page;

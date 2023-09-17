import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className='flex '>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Content />
      </div>
    </main>
  )
}

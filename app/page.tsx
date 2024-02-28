import Header from "@/common/components/Header";
import Sidebar from "@/common/components/Sidebar";
import { MenuList } from "@/common/config/menu-list";

export default function Home() {
  return (
    <div className="w-full">
      <Sidebar links={MenuList} />
      <Header title="Bienvenido" fullScreen/>
    </div>
  );
}

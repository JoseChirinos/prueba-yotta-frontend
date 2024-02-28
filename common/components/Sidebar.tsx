import Link from "next/link"
import { SidebarContent } from "../interfaces/sidebar.interface"

export default function Sidebar({ links = [] } : SidebarProps ) {
  return (
    <div className="h-16 w-full">
      <div className="fixed w-full h-16 bg-black flex justify-center items-center">
        <ul className="flex justify-center items-center gap-8">
          {links.map((link, index) => (
            <li key={index} className="text-white hover:underline hover:text-blue-400">
              <Link href={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


type SidebarProps = {
  links: SidebarContent[]
}
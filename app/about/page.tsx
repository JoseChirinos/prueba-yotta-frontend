import Header from "@/common/components/Header"
import Sidebar from "@/common/components/Sidebar"
import { MenuList } from "@/common/config/menu-list"

const AboutPage = () => {
  return (
    <div className="w-full">
      <Sidebar links={MenuList} />
      <Header title="Yotta Store"/>

      <section className="w-full">
        <div className="container flex flex-col justify-center items-center p-8">
          <h1 className="text-2xl py-8">Quienes Somos</h1>
          <div className="w-1/2 text-md text-slate-900/60 py-4">
            En nuestra tienda, nos dedicamos a ofrecerte una experiencia de compra excepcional en el mundo de la tecnología móvil. Con años de experiencia en la industria, nos enorgullecemos de ser un destino confiable para los entusiastas de la tecnología y los consumidores conscientes del valor.
          </div>
        </div>
        <div className="container bg-yellow-500 p-8">
          <div className="flex justify-center items-center gap-6 p-8">
            <div className="w-[300px] text-xl">
              Pasión por la Tecnología
            </div>
            <p className="w-1/2 text-md text-blue-900">
              Nuestro equipo está compuesto por apasionados de la tecnología que están constantemente actualizados sobre las últimas tendencias y desarrollos en el mundo de los teléfonos inteligentes. Esta pasión nos impulsa a seleccionar cuidadosamente los productos más innovadores y de alta calidad para ofrecerte.
            </p>
          </div>
        </div>
        <div className="container bg-blue-500 p-8">
          <div className="flex justify-center items-center gap-6 p-8">
            <p className="w-1/2 text-md text-yellow-50">
              Nos esforzamos por brindarte un servicio excepcional desde el momento en que entras en nuestra tienda hasta mucho después de tu compra. Nuestro objetivo es superar tus expectativas en cada interacción y garantizar que tu experiencia de compra sea fluida, informativa y satisfactoria.
            </p>
            <div className="w-[300px] text-xl">
              Compromiso con la Excelencia
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

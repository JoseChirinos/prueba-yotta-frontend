export default function Header({
  title = "NextJS 13 Senior Test",
  fullScreen = false,
}: HeaderProps) {
  return (
    <div className={`
      flex justify-center
      items-center w-full bg-black
      ${fullScreen ? 'h-screen': 'h-[300px]'}`
    }>
      <h1 className="text-2xl text-white">{title}</h1>
    </div>
  )
}

type HeaderProps = {
  title?: string,
  fullScreen?: boolean
}
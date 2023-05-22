import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center bg-gray-700 p-6">
      <div className="align-center ml-12 flex">
        <h1 className="text-3xl font-semibold">ToDo List</h1>
        <Image
          className="width-2 ml-2"
          width={130}
          height={130}
          src="/w3lcome-logo-standard-4.png"
          alt="w3lcome logotipo"
        />
      </div>
    </header>
  )
}

import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  const user = false;

  return (
    <header
      className={`shadow-[0_1px_1px_rgba(0,0,0,.1)] fixed w-full z-50 bg-white top-0`}
    >
      <nav className={`container flex justify-between items-center h-[4rem]`}>
        <Link className="py-[0.5rem]" href="/">
          <Image
            src={"/assets/dogs.svg"}
            alt="Dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link
            className="text-[#333] flex items-center after:inline-block after:w-[14px] after:h-[17px] after:bg-[url(/assets/usuario.svg)] after:bg-no-repeat after:bg-center after:ml-[0.5rem] after:relative after:top-[-1px]"
            href="/conta"
          >
            DOGS
          </Link>
        ) : (
          <Link
            className="text-[#333] flex items-center after:inline-block after:w-[14px] after:h-[17px] after:bg-[url(/assets/usuario.svg)] after:bg-no-repeat after:bg-center after:ml-[0.5rem] after:relative after:top-[-1px]"
            href="/login"
          >
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

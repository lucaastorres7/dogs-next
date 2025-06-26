import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="bg-[#fb1] pt-[3rem] px-[1rem] h-[10rem] text-center text-[#764701]">
      <Image
        className="mx-auto"
        src={"/assets/dogs-footer.svg"}
        alt="Dogs"
        width={28}
        height={22}
      />
      <p className="mt-[1rem]">Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center px-6 drop-shadow-md bg-color3">
      <div className="flex justify-center items-center gap-2">
        <Image
          width={50}
          height={50}
          src={"/assets/logo-flowerish.png"}
          alt="logo-flowerish"
        />
        <p className="font-Poppins">FLOWERISH</p>
      </div>
    </div>
  );
};

export default Navbar;

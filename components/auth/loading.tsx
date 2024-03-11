import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full gap-y-4 justify-center items-center flex flex-col">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

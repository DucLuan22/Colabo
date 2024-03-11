import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full justify-center flex flex-col items-center">
      <Image src="/empty-favorites.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favorating a board
      </p>
    </div>
  );
};

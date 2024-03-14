import { Skeleton } from "@/components/ui/skeleton";

export const Participant = () => {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md">
      List of user
    </div>
  );
};

Participant.Skeleton = function ParticipantSkeleton() {
  return (
    <div className="absolute top-2 right-2 rounded-md p-3 h-12 flex items-center shadow-md w-[100px]">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

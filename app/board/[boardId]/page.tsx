import { Room } from "@/components/room";
import { Canvas } from "./_component/canvas";
import { Loading } from "./_component/loading";

interface BoardIdProps {
  params: {
    boardId: string;
  };
}
const BoardIdPage = ({ params }: BoardIdProps) => {
  return <Loading />;
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;

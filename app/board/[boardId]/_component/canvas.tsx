"use client";
import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participant } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participant />
      <Toolbar />
    </main>
  );
};
"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { ReactNode } from "react";

import { RoomProvider } from "@/liveblocks.config";
import { Loading } from "@/app/board/[boardId]/_component/loading";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}
export const Room = ({ children, roomId, fallback }: RoomProps) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={<Loading />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
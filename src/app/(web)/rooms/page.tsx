"use client";

import { getRooms } from "@/libs/apis";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomType = searchParams.get("roomType");

    if (roomType) {
      setRoomTypeFilter(roomType);
    }

    if (searchQuery) {
      setSearchQuery(searchQuery);
    }
  }, []);

  async function fetchData() {
    return getRooms();
  }

  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);

  if (error) {
    throw new Error("Cannot fetch data");
  }

  if (typeof data === "undefined" && !isLoading) {
    throw new Error("Cannot fetch data");
  }

  return <div>Rooms</div>;
};

export default Rooms;

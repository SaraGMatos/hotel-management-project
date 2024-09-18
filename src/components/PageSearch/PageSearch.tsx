"use client";

import { useState } from "react";
import Search from "../Search/Search";
import { usePathname } from "next/navigation";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={setRoomTypeFilter}
      setSearchQuery={setSearchQuery}
      pathname={pathname}
    />
  );
};

export default PageSearch;

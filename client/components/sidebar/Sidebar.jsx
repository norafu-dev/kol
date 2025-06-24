import React from "react";
import { Button } from "../ui/button";
import { Home, Plus } from "lucide-react";

const dummyChannels = [
  {
    id: 1,
    name: "Woods",
  },
  {
    id: 2,
    name: "Eliz",
  },
  {
    id: 3,
    name: "Mia",
  },
  {
    id: 4,
    name: "舒琴",
  },
  {
    id: 6,
    name: "always win",
  },
];

const Sidebar = () => {
  return (
    <div className="w-1/6 h-full border-r border-gray-200 flex flex-col p-4">
      <Button className="mb-4">
        <Plus className="w-4 h-4" />
        添加频道
      </Button>
      <div className="flex items-center gap-2">
        <Home className="w-4 h-4" />
        频道概况
      </div>
      {dummyChannels.map((channel) => (
        <div key={channel.id} className="py-2">
          {channel.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

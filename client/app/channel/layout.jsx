import Sidebar from "@/components/sidebar/Sidebar";

const ChannelLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default ChannelLayout;

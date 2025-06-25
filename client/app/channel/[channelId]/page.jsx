import ChannelForm from "@/components/channel/ChannelForm";

const page = async ({ params }) => {
  const { channelId } = await params;

  if (channelId === "new") {
    return (
      <div className="w-full h-full flex flex-col pt-16 items-center">
        <h3 className="text-2xl font-semibold mb-8">添加新频道</h3>
        <ChannelForm />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col pt-16 items-center">
      {channelId}
    </div>
  );
};

export default page;

import Channel from "../models/channel.model.js";

const createChannel = async (req, res) => {
  console.log(req.body);
  const { channelId, channelName, channelPicture } = req.body;

  try {
    // 字段校验
    const valid = channelId && channelName;
    !valid && res.status(400).json({ message: "All fields are required" });

    const channel = await Channel.findOne({ channelId });
    channel && res.status(400).json({ message: "Channel already exists" });

    const newChannel = new Channel({
      channelId,
      channelName,
      channelPicture,
    });

    // 存储新频道到数据库
    await newChannel.save();
    res.status(201).json({ message: "Channel created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createChannel };

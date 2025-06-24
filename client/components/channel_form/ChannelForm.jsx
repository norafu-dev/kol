"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  channelId: z.string().min(1, {
    message: "Channel id is required.",
  }),
  channelName: z.string().min(1, {
    message: "Channel name is required.",
  }),
  channelPicture: z.string(),
});

const ChannelForm = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      channelId: "",
      channelName: "",
      channelPicture: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/channel/create`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 201) {
        toast.success("Channel created successfully");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-64">
        <FormField
          control={form.control}
          name="channelId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>频道 ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="channelName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>频道名称</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="channelPicture"
          render={({ field }) => (
            <FormItem>
              <FormLabel>频道图片</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
};

export default ChannelForm;

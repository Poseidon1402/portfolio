import { Input } from "@/components";

export const ContactMe = () => {
  return (
    <div className="flex flex-col gap-8" id="contactMe">
      <div>
        <h1 className="text-[36px] font-bold">Get in touch</h1>
        <p className="text-sm text-[#808080]/50">
          Let&apos;s build something awesome
        </p>
      </div>
      <div className="rounded-3xl border border-[#F6F6F6] p-6">
        <div className="flex items-center border-b border-b-[#F6F6F6] px-4 py-5">
          <div className="flex gap-3">
            <div className="h-2 w-2 rounded-full border border-[#D62929] bg-[#F63636] p-2"></div>
            <div className="h-2 w-2 rounded-full border border-[#CEA435] bg-[#F6C136] p-2"></div>
            <div className="h-2 w-2 rounded-full border border-[#68F636] bg-[#53CC28] p-2"></div>
          </div>
          <div className="flex w-full justify-center text-lg font-medium text-onyx">
            New Message
          </div>
        </div>
        <div>
          <div className="flex flex-col py-5">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email address"
              id="Email"
            />
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              id="Name"
            />
            <Input
              type="text"
              label="Subject"
              placeholder="Enter subject"
              id="Subject"
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here"
            rows={15}
            className="my-5 w-full resize-none rounded-2xl border-none bg-faintWhite p-4 text-sm text-darkGray focus:ring-0"
          ></textarea>
          <div className="flex justify-end">
            <button className="w-full rounded-2xl bg-gradient-to-b from-[#1A1A1A] to-[#131313] p-4 text-white desktop:w-40 desktop:self-end">
              Send
            </button>
          </div>
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  );
};

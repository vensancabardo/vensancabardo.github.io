import Image from "next/image";

type Mode = "chat" | "content" | "both";

export function Chat({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode: Mode;
}) {
  return (
    <div className="self-center p-8 rounded-lg size-full bg-gray-800">
      <div className="flex flex-row">
        <div className="">
          <Image
            width={50}
            height={50}
            src="/profile.jpg"
            alt="Profile picture"
            className="rounded-full"
          />
        </div>

        <div className="bg-accent roudned-3xl">{children}</div>
      </div>
    </div>
  );
}

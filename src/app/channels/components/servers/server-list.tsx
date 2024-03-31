import Image from "next/image";

const SERVERS = [
  {
    id: 1,
    name: "server 1",
  },
  {
    id: 2,
    name: "server 2",
  },
  {
    id: 3,
    name: "server 3",
  },
  {
    id: 4,
    name: "server 4",
  },
  {
    id: 5,
    name: "server 5",
  },
  {
    id: 6,
    name: "server 6",
  },
];

export const ServerList = () => {
  return (
    <aside className="bg-black-1 px-2 flex flex-col gap-5">
      <div className="flex items-center justify-center rounded-3xl py-4 px-2 bg-white">
        <Image
          src={"/images/discord-icon.webp"}
          alt="icon"
          width={30}
          height={30}
        />
      </div>
      <ul className="flex flex-col space-y-3">
        {SERVERS.map((server) => (
          <li
            key={server.id}
            className="rounded-full min-h-[60px] w-[60px] max-h-[60px] relative overflow-hidden"
          >
            <Image src={"/images/pfp.jpg"} alt="icon" fill />
          </li>
        ))}
      </ul>
    </aside>
  );
};

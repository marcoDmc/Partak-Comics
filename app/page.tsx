import { Card } from "@/components/Card/Card";
import { Header } from "@/components/Header/Header";
import { Search } from "@/components/Search/Search";
import logo from "@/public/partak-logo.png"
import { Icons } from "@/utils/Icons";
import archives from "@/mock"
import { Files } from "@/utils/files"
import Image from "next/image";
import '@/app/globals.css'

export default function Home() {
  return (
    <>
      <section className="flex-col p-10 items-center
       justify-center bg-grafit w-full h-screen overflow-hidden overflow-y-scroll">
        <Header.Content>
          <Header.Logo icon={logo} />
          <Header.List>
            <Header.Item name="packs" />
            <Header.Item name="about us" />
            <Header.Item name="contact us" />
            <Header.Item name="for figma" Icon={Icons.arrowUpRight} IconColor="black" IconSize={25} />
          </Header.List>
        </Header.Content>
        <Image src={Files.logomain} width={1500} className="object-cover mx-auto" height={0} alt="The official logo of the Partak brand, featuring unique graphic elements" />
        <main className="p-5">
          <Search.Content>
            <Search.Input />
            <Search.Button bg="bg-white"
              name="fill / flat"
              border="border-rose"
              color="text-grafit" hoverBg="hover:bg-grafit" hoverBorder="hover:border-rose" hoverText="hover:text-rose" />
            <Search.Button bg="bg-grafit"
              name="hand-drawn"
              border="border-white"
              color="text-white" hoverBg="hover:bg-grafit" hoverBorder="hover:border-rose" hoverText="hover:text-rose"/>
            <Search.Button bg="bg-grafite"
              name="stroke"
              border="border-white"
              color="text-white" hoverBg="hover:bg-grafit" hoverBorder="hover:border-rose" hoverText="hover:text-rose"/>
          </Search.Content>
          <div className="grid gap-[.6rem] grid-cols-3 grid-flow-row
           pt-5 pl-2 pb-5  h-full place-items-start max-h-[600px] max-sm:grid-cols-1 max-sm:place-items-center max-md:grid-cols-2
             mt-5 overflow-hidden overflow-y-scroll lg:grid-cols-4 custom-scrollbar">
            {
              archives.map(el => (
                <Card.Content name={el.name} key={el.id}>
                  <Card.Icon Icon={el.icon} alt={el.description} />
                </Card.Content>
              ))
            }
          </div>
        </main>
      </section></>
  );
}

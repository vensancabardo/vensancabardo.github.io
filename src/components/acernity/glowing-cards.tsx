import Link from "next/link";
import { Button } from "../ui/button";
import { GlowingEffect } from "../ui/glowing-effect";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSiteContext } from "@/contexts/site-context";

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  clickable: boolean;
}

const GridItem = ({ area, icon, title, clickable }: GridItemProps) => {
  return (
    <li
      className={`list-none ${area} ${
        clickable ? "cursor-pointer" : ""
      } h-full`}
    >
      <div className="relative h-full rounded-2xl border md:rounded-3xl">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl dark:shadow-[0px_0px_27px_0px_#2D2D2D] p-2">
          <div className="relative flex flex-1 flex-col justify-center">
            <div className="flex flex-row justify-start gap-2 align-middle">
              <div className="w-fit rounded-lg border border-gray-600 p-2 self-center">
                {icon}
              </div>
              <div className="-tracking-4 pt-0.5 font-sans text-md text-wra self-center text-black dark:text-white truncate">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

type GlowingCardInputType = {
  headerPhotoPath: string;
  logo: React.ReactNode;
  title: string;
  description?: string;
  link?: string;
  clickable: boolean;
  dialogBody?: React.ReactNode;
};

export default function GlowingCardGrid({
  cards,
  gridStyling,
}: {
  cards: GlowingCardInputType[];
  gridStyling: string;
}) {
  const { theme } = useSiteContext();
  return (
    <div className={gridStyling}>
      {cards.map((item: GlowingCardInputType, key: number) => {
        return (
          <div key={key}>
            {item.clickable ? (
              <Dialog>
                <DialogTrigger className="w-full">
                  <GridItem
                    area=""
                    icon={item.logo}
                    title={item.title}
                    clickable={item.clickable}
                  />
                </DialogTrigger>
                <DialogContent
                  className={`${theme} dark:text-foreground flex flex-col gap-8`}
                >
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription className="whitespace-pre-line">
                      {item.description}
                    </DialogDescription>
                  </DialogHeader>

                  {item.dialogBody ? item.dialogBody : null}

                  {item.link ? (
                    <Button variant="outline">
                      <Link href={item.link} className="size-full">
                        See more
                      </Link>
                    </Button>
                  ) : null}
                </DialogContent>
              </Dialog>
            ) : (
              <GridItem
                area=""
                icon={item.logo}
                title={item.title}
                clickable={item.clickable}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

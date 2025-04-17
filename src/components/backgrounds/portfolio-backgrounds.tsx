"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { useSiteContext } from "@/contexts/site-context";
import { Maximize2, Minus, X } from "lucide-react";
import { motion } from "motion/react";

function LaptopBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 pt-3 h-full">
      <div className="dark:bg-gray-800 bg-gray-600 rounded-3xl h-full p-1">
        <div className="dark:bg-black bg-gray-500 rounded-3xl h-full p-5 flex flex-col">
          <div className="rounded-full bg-gray-600 size-4 mb-5 self-center"></div>
          <div className="bg-background text-foreground h-full">
            <AuroraBackground>
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="size-full p-3 pb-8"
              >
                <div className="my-4 pb-16 size-full dark:bg-white/10 bg-gray-400/30 backdrop-blur-xs rounded-md">
                  <div className="dark:bg-white/15 bg-gray-400/40 rounded-t-md px-2 flex flex-row w-full">
                    <div className="flex flex-row gap-2 items-center my-3 self-start">
                      <div className="bg-red-600 rounded-full p-0.5 ">
                        <X className="size-2 text-red-950" strokeWidth={2.75} />
                      </div>
                      <div className="bg-yellow-600 rounded-full p-0.5">
                        <Minus
                          className="size-2 text-yellow-950"
                          strokeWidth={2.75}
                        />
                      </div>
                      <div className="bg-green-600 rounded-full p-0.5">
                        <Maximize2
                          className="size-2 text-green-950"
                          strokeWidth={2.75}
                        />
                      </div>
                    </div>

                    <div className="border self-center text-foreground rounded-lg p-1 text-xs m-auto w-1/2 flex flex-row">
                      <div className="m-auto">ssdfsdf</div>
                    </div>
                  </div>

                  <div>{children}</div>
                </div>
              </motion.div>
            </AuroraBackground>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-center size-full">
      <div className="relative w-1/3 m-4 p-5 rounded-4xl border-2 border-gray-400 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black w-36 h-14 rounded-3xl"></div>
        <div className="rounded-4xl bg-gray-300 size-full">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

function ArcadeBackground() {}

export default function PortfolioBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { type } = useSiteContext();

  switch (type) {
    case "laptop":
      return <LaptopBackground>{children}</LaptopBackground>;

    case "phone":
      return <PhoneBackground>{children}</PhoneBackground>;

    // case "arcade":
    //     return (

    //     );

    default: {
      return <div>{children}</div>;
    }
  }
}

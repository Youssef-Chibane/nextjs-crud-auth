import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-30 flex items-center justify-center px-6 overflow-hidden">
      <div className="text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Plants Inventory Management
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Easily track, organize, and manage your plant inventory with a
          streamlined system built for efficiency.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="/plants">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

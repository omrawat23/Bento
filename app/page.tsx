"use client"

import Banner from "@/components/Banner"
import Projects from "@/components/Projects"
import Socials from "@/components/Socials"
import Work from "@/components/Work"

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen mt-[-14px]">
      <div className="w-full max-w-[1300px] px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          <div className="flex flex-col space-y-5 w-full lg:w-2/3">
            <Banner />
            <div className="block 2xl:hidden">
              <Projects />
            </div>
            <Work />
            <Socials />
          </div>

          <div className="w-full lg:w-2/3 hidden 2xl:block">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
}
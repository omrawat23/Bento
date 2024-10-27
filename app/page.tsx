"use client"

import Banner from "@/components/Banner"
import Projects from "@/components/Projects"
import Socials from "@/components/Socials"
import Work from "@/components/Work"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col space-y-12 w-full lg:w-3/4 order-1 lg:order-1"> 
        <Banner />
        <div className="block lg:hidden">
          <Projects />
        </div>
        <Work />
        <Socials />
      </div>

      <div className="w-full lg:w-2/3 lg:mr-12 order-2 lg:order-2 hidden lg:block"> 
        <Projects />
      </div>
    </div>
  )
}
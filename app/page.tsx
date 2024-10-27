"use client"

import Component from "@/components/Banner"
import CurameSection from "@/components/Bento"
import ThankYouSection from "@/components/End"
import TableOfContents from "@/components/Work"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col space-y-12 w-full lg:w-3/4 order-1 lg:order-1"> 
        <Component />
        <div className="block lg:hidden">
          <CurameSection />
        </div>
        <TableOfContents />
        <ThankYouSection />
      </div>

      <div className="w-full lg:w-2/3 lg:mr-12 order-2 lg:order-2 hidden lg:block mt-4"> 
        <CurameSection />
      </div>
    </div>
  )
}
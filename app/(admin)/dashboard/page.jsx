'use client'
 import Admininfocard from '@/components/adminpages/Admin-info-card'
 import LargeCards from '@/components/adminpages/LargeCards'
import Smallcards from '@/components/adminpages/Smallcards'
import React from 'react'
 import Analysischarts from '@/components/adminpages/Analysischarts';
 import Transtation from '@/components/adminpages/Transtation';
 import Outofstock from '@/components/adminpages/Outofstock';

export default function page() {
  return (
   <div className="main-content w-full">
    <div className="first-main flex  mobile:flex-col  ">
      {/* Admin-info */}
<Admininfocard/>
<div className="grid grid-cols-2 gap-4 w-[50%] mobile:w-full ">
<Smallcards title="Order" ordersdata="200" salesdata="4000"/>
<Smallcards title="Order" ordersdata="200" salesdata="4000"/>
<Smallcards title="Order" ordersdata="200" salesdata="4000"/>
<Smallcards title="Order" ordersdata="200" salesdata="4000"/>

</div>

    </div>
    <div className=" grid grid-cols-4 mobile:grid mobile:grid-cols-1 w-full gap-3">
  <LargeCards  title={"weekly Sales"} sales={"3000"} />
  <LargeCards title={"weekly Sales"} sales={"3000"}  />
  <LargeCards title={"weekly Sales"} sales={"3000"}  />
  <LargeCards title={"weekly Sales"} sales={"3000"}   />
</div>
<div className="analysis-charts mt-3 min-h-min">
<Analysischarts/>
</div>
<div className=" mt-5 mobile:grid mobile:grid-cols-1  grid grid-cols-2 gap-3">
<Transtation/>
<Outofstock/>
</div>
   </div>

  )
}

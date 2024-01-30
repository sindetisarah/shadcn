import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";

import Card2 ,{ SalesProps } from "@/components/Card2";
import PageTitle from "@/components/PageTitle"
import { Activity, Banknote, CreditCard, DollarSign, Users } from "lucide-react";
const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "KSH 4,500,089",
    description: "+20% from last month",
    icon: Banknote
  },
  {
    label: "Subscriptions",
    amount: "+2500",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Applications",
    amount: "+12,230",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Users",
    amount: "+573",
    description: "+20 since last hour",
    icon: Activity
  }
];
//sales dummy data
const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Magendo",
    email: "olivia.magendo@email.com",
    saleAmount: "KSH 1,999.00"
  },
  {
    name: "Jackson Lee Chan",
    email: "jacklee@email.com",
    saleAmount: "KSH 1,999.00"
  },
  {
    name: "Isabella Ngendo",
    email: "isabella.ngen@email.com",
    saleAmount: "KSH 39.00"
  },
  {
    name: "Eric Kim",
    email: "eric@email.com",
    saleAmount: "KSH 299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "KSH 39.00"
  }
];

export default function Home() {
  return (
   
   <div className="flex flex-col gap-5  w-full">
     <PageTitle title="Dashboard"/>
     <div> <h3 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h3></div>
     <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      {/* <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-1">

        <CardContent>
          <p className="p-4 font-semibold">Analytics</p>

          <BarChart />
        </CardContent>
      

      </section> */}
      <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-1">

      <CardContent className="flex justify-between gap-4">
         
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          {uesrSalesData.map((d, i) => (
            <Card2
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section>
      </div>
  )
}

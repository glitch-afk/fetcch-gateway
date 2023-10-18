import type { MetaFunction } from "@remix-run/node"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import CryptoForm from "~/components/crypto-form"
import Checkout from "~/components/checkout-section"

export const meta: MetaFunction = () => {
  return [
    { title: "Payment Gateway" },
    { name: "description", content: "Welcome to Fetcch!" },
  ]
}

export default function Index() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center overflow-auto bg-[#F7F9FC] lg:flex-row">
      <Checkout />
      <section className="mt-12 h-[84vh] w-full lg:mt-0 lg:w-1/2">
        <Tabs defaultValue="crypto" className="flex flex-col items-center">
          <TabsList className="mb-8 h-10 max-w-[373px] rounded-[60px] border-2 border-primary bg-input md:h-16">
            <TabsTrigger
              value="card"
              className="w-20 px-8 py-1 text-sm data-[state=active]:rounded-[55px] data-[state=active]:bg-primary data-[state=active]:text-white md:w-[119px] md:px-[39.5px] md:py-3 md:text-lg"
            >
              Card
            </TabsTrigger>
            <TabsTrigger
              value="after_pay"
              className="w-20 px-8 py-1 text-sm data-[state=active]:rounded-[55px] data-[state=active]:bg-primary data-[state=active]:text-white md:w-[119px] md:px-[39.5px] md:py-3 md:text-lg"
            >
              After Pay
            </TabsTrigger>
            <TabsTrigger
              value="crypto"
              className="w-20 px-8 py-1 text-sm data-[state=active]:rounded-[55px] data-[state=active]:bg-primary data-[state=active]:text-white md:w-[119px] md:px-[39.5px] md:py-3 md:text-lg"
            >
              Crypto
            </TabsTrigger>
          </TabsList>
          <TabsContent value="crypto" className="w-full max-w-[421px]">
            <CryptoForm />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

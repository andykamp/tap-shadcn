import { Button } from '@/components/ui/button'
import Balancer from 'react-wrap-balancer'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { TypographyHero, TypographyMuted } from '@/components/ui/typography';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-2 w-2/3">

      <TypographyHero>
        <Balancer>Slack is not built for alerts u sick little bastard</Balancer>
      </TypographyHero>
      <TypographyMuted>Don't drown in notifications and keep your workspace focused</TypographyMuted>

      <div className="flex justify-center gap-2 ">
        <Button className="group">
          Get Started
          <ArrowRightIcon className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />

        </Button>
        <Button variant="outline">Star us on Github</Button>
      </div>

    </section>
  )

}

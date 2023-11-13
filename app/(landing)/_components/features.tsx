import Balancer from 'react-wrap-balancer'
import { FeatureCard } from './feature-card'
import { ReactNode } from 'react';
import { VercelLogoIcon } from '@radix-ui/react-icons'
import { TypographyH1, TypographyMuted } from '@/components/ui/typography';

type FeatureCardProps = {
  emoji: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

export const features: FeatureCardProps[] = [
  {
    emoji: (
      <VercelLogoIcon />
    ),
    className: "lg:grid-in-leftTop",
    title: "Insights & Analytics",
    children: (
      <p>
        Indulged in the art of procrastination all week? Brace yourself for the
        truth: zero accomplishments. Prepare to be awestruck.
      </p>
    ),
  },
  {
    emoji: (
      <VercelLogoIcon />
    ),
    title: "Powerful Note Taking",
    className: "lg:grid-in-centerTop",
    children: (
      <p>
        Brace yourself! Experience note-taking that defies gravity. Get ready to
        be smitten by its remarkable charm, leaving those pen-and-paper users in
        lectures questioning their existence.
      </p>
    ),
  },
  {
    emoji: (
      <VercelLogoIcon />
    ),
    className: "lg:grid-in-right",
    title: "Flashcards",
    children: (
      <p>
        Guess what? Noodle doesn&apos;t do ordinary flashcards. No, no,
        we&apos;ve revolutionized the game. <br /> <br /> Say goodbye to the
        tedious task of creating your own flashcards. With Noodle, as you jot
        down your notes, like magic, we&apos;ll conjure up customized flashcards
        for you. <br /> <br /> But here&apos;s the thing, don&apos;t you even
        think about slacking off on your flashcard homework. Our AI takes it
        personally, and trust me, you don&apos;t want to face the wrath of a
        peeved AI.
      </p>
    ),
  },
  {
    emoji: (
      <VercelLogoIcon />
    ),
    title: "AI this & Automations that",
    className: "lg:grid-in-leftBottom",
    children: (
      <p>
        Embrace the brilliance of our wonderfully mediocre AI! It&apos;s here to
        save the day, helping you fix mistakes and put information in the right
        place. Because, you know, we get it—you&apos;re not the sharpest tool in
        the shed.
      </p>
    ),
  },
  {
    emoji: (
      <VercelLogoIcon />
    ),
    title: "Open Source",
    className: "lg:grid-in-centerBottom",
    children: (
      <p>
        Apart from the glamour of being open source, Noodle&apos;s codebase is
        actually open for contributions I mean if you even dare!
      </p>
    ),
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="container mx-auto flex flex-col gap-6"
    >
      <TypographyH1 className="text-center">
        <Balancer>A new era of productive students begins.</Balancer>
      </TypographyH1>
      <TypographyMuted className="mx-auto max-w-[70ch] text-center">
        <Balancer>
          Noodle is designed to keep you on top of your education, with
          powerful insights and automations, you&apos;ll never miss a thing
          again.
        </Balancer>
      </TypographyMuted>
      <div className="lg:grid-areas-featuresWide grid grid-cols-1 gap-8 lg:grid-cols-7 lg:grid-rows-2">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>

  )
}

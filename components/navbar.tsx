import Link from "next/link";
import { ThemeToggle } from '@/components/theme-toggle';
import {VercelLogoIcon} from '@radix-ui/react-icons'


export const Navbar: React.FC = () => {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="mr-4 shrink-0">
            Shadcn UI
          </Link>
          <VercelLogoIcon/>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


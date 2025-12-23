import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 bg-white">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/CT-logo.png" 
              alt="Cred Techno" 
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3"
              priority
            />
            <span className="text-xl sm:text-2xl font-bold text-black">Cred Techno</span>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

// This tells Next.js to not use the default layout
ServicesLayout.displayName = 'ServicesLayout';

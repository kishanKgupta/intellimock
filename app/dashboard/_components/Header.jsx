'use client'
import { UserButton } from '@clerk/nextjs';
import React,{useEffect} from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
 
  const path = usePathname();
  useEffect(() => {
    
    console.log(path)


  },[])


  return (
    <div className="flex p-4 items-center justify-between bg-secondry shadow-md">
      <img src={"./logo.svg"} width={100} height={60} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/new" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/upgrade" && "text-primary font-bold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/work" && "text-primary font-bold"
          }`}
        >
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header
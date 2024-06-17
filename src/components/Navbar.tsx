'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return(
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
           > 
           <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active}
            item="Home">
            <HoveredLink href="/#">Home</HoveredLink>
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active}
            item="Products & Tools ">
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/products">All Products & Tools</HoveredLink>
               <HoveredLink href="/products">AI Image Generator</HoveredLink>
               <HoveredLink href="/products">Entry Level VR Headset Package</HoveredLink>
               <HoveredLink href="/products">Premium Level Headset Package </HoveredLink>
               <HoveredLink href="/products">Industry Level Mixed Tech Headset</HoveredLink>
               </div>
               
            </MenuItem>
            

            <MenuItem
            setActive={setActive} active={active}
            item="Sign up ">
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/products">All Products & Tools</HoveredLink>
               <HoveredLink href="/products">AI Image Generator</HoveredLink>
               <HoveredLink href="/products">Entry Level VR Headset Package</HoveredLink>
               <HoveredLink href="/products">Premium Level Headset Package </HoveredLink>
               <HoveredLink href="/products">Industry Level Mixed Tech Headset</HoveredLink>
               </div>
               
            </MenuItem>

            <MenuItem
            setActive={setActive} active={active}
            item="Login ">
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/products">All Products & Tools</HoveredLink>
               <HoveredLink href="/products">AI Image Generator</HoveredLink>
               <HoveredLink href="/products">Entry Level VR Headset Package</HoveredLink>
               <HoveredLink href="/products">Premium Level Headset Package </HoveredLink>
               <HoveredLink href="/products">Industry Level Mixed Tech Headset</HoveredLink>
               </div>
               
            </MenuItem>

            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active}
            item="Contact us">
             <HoveredLink href="/contact">Contact us</HoveredLink> 
            </MenuItem>
            </Link>
           </Menu>
           </div>
           
    )
}

export default Navbar
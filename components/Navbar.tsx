"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="/menu.svg"
        id="menu"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => {
          const sideNavBar = document.getElementById("side-nav-bar");
          sideNavBar?.classList.toggle("hidden");
        }}
      />
      <SideNavBar />
    </nav>
  );
};

const SideNavBar = () => {
  return (
    <div
      id="side-nav-bar"
      className="hidden fixed top-0 right-0 h-screen w-80 bg-white z-40 flex flex-col gap-12 p-8"
    >
      <div className="flex justify-end">
        <Image
          src="/close.svg"
          id="close"
          alt="close"
          width={24}
          height={24}
          className="inline-block cursor-pointer bg-green-90 rounded-full"
          onClick={() => {
            const sideNavBar = document.getElementById("side-nav-bar");
            sideNavBar?.classList.toggle("hidden");
          }}
        />
      </div>
      <ul className="flex flex-col gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={() => {
              const sideNavBar = document.getElementById("side-nav-bar");
              sideNavBar?.classList.toggle("hidden");
            }}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Button
        type="button"
        title="Login"
        icon="/user.svg"
        variant="btn_dark_green"
      />
    </div>
  );
};

export default Navbar;

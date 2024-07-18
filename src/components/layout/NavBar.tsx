"use client";
import React, { FC, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  return (
    <header className="w-full sticky top-0 z-40 py-6 px-3 lg:px-8 bg-white border-b">
      <nav className="flex flex-row items-center justify-between gap-20">
        <h1 className="font-semibold text-3xl">
          <Link href={"/"}>shopedia</Link>
        </h1>
        <div className="border-2 rounded-lg py-2 px-4 w-full hidden lg:flex flex-row items-center gap-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            className="w-full outline-none bg-transparent"
            type="text"
            placeholder="Laptop Macbook Air M1 2020"
          />
        </div>
        <div className="hidden lg:flex flex-row gap-5 items-center ">
          <Link href={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
          <Link href={"/register"}>
            <Button>Register</Button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            onClick={() => setShowMenuMobile(!showMenuMobile)}
            className="p-2"
            variant={"outline"}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
        <div
          className={`w-full h-screen fixed top-0 left-0 z-50 bg-white ${
            !showMenuMobile ? "translate-x-full" : "translate-x-0"
          } duration-300 transition-all ease-in-out`}
        >
          <div className="w-full flex justify-end py-6 px-3 ">
            <Button
              onClick={() => setShowMenuMobile(!showMenuMobile)}
              className="p-2"
              variant={"outline"}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="mt-5 px-6">
            <h1 className="font-semibold text-3xl">
              <Link href={"/"}>shopedia</Link>
            </h1>
            <div className="my-10">
              <p>Search Products : </p>
              <div className="border-2 rounded-lg py-2 px-4 w-full flex flex-row items-center gap-2 ">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  className="w-full outline-none bg-transparent"
                  type="text"
                  placeholder="Laptop Macbook Air M1 2020"
                />
              </div>
            </div>
            <div className="my-20 flex flex-col gap-5 items-center ">
              <Link href={"/login"}>
                <Button className="w-full" variant={"outline"}>
                  Login
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

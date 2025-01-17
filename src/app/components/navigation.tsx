"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignIn, SignedOut } from "@clerk/nextjs";
export const Navigation = () => {
  const pathName = usePathname();
  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        href="/"
        className={pathName === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathName === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"
        }
      >
        About
      </Link>
      <Link
        href="/products/1"
        className={
          pathName.startsWith("/products/1")
            ? "font-bold mr-4"
            : "mr-4 text-blue-500"
        }
      >
        Product 1
      </Link>
      <SignedOut>
        <SignInButton mode="modal"></SignInButton>
      </SignedOut>
      <UserButton>
        <SignIn></SignIn>
      </UserButton>
      <Link
        href="/articles/breaking-news?lang=en"
        className={
          pathName.startsWith("/articles/breaking-news?lang=en")
            ? "font-bold mr-4"
            : "mr-4 text-blue-500"
        }
      >
        Read in English
      </Link>
      <Link
        href="/articles/breaking-news?lang=fr"
        className={
          pathName.startsWith("/articles/breaking-news?lang=fr")
            ? "font-bold mr-4"
            : "mr-4 text-blue-500"
        }
      >
        Read in French
      </Link>
    </nav>
  );
};

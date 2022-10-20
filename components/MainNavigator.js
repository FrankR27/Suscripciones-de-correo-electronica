import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function MainNavigator() {
  const router = useRouter();
  const activeLink = (pathname) => router.pathname === pathname;
  return (
    <nav className="bg-zinc-900 text-zinc-100">
      <ul className="container mx-auto p-4 flex items-center justify-center gap-2">
        <li
          className={`${
            activeLink("/") && "text-yellow-200 font-bold"
          } hover:text-zinc-200 hover:underline transition-all`}
        >
          <Link href="/">Crear</Link>
        </li>
        <li
          className={`${
            activeLink("/editar") && "text-yellow-200 font-bold"
          } hover:text-zinc-200 hover:underline transition-all`}
        >
          <Link href="/editar">Editar</Link>
        </li>
        <li
          className={`${
            activeLink("/eliminar") && "text-yellow-200 font-bold"
          } hover:text-zinc-200 hover:underline transition-all`}
        >
          <Link href="/eliminar">Eliminar</Link>
        </li>
        <li
          className={`${
            activeLink("/admin") && "text-yellow-200 font-bold"
          } hover:text-zinc-200 hover:underline transition-all`}
        >
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigator;

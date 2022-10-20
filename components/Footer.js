import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-zinc-800 text-zinc-100">
      <div className="container mx-auto p-4">
        {new Date().getFullYear()} Made with{" "}
        <span className="text-red-600">♥</span> by Frank.Dev
      </div>
    </footer>
  );
}

export default Footer;

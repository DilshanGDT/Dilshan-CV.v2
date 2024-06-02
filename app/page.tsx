"use client";

import React from "react";
import NavBar from "@/components/navbar/NavBar";
import Header from "@/components/header/Header";
import Service from "@/components/servicess/Service";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <Header />
    </main>
  );
}

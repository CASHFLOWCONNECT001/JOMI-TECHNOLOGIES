import React from "react";

export function AfricaBackground({ children }: { children: React.ReactNode }) {
  return (
    <main className="section-y pt-0 relative overflow-x-clip africa-bg-responsive">
      {children}
    </main>
  );
}

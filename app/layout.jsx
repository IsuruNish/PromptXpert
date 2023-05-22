"use client";

import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "PromptXpert",
  desciption: "Discover and Share AI Prompts",
};
const RootLayout = ({ children }) => {
  const searchParams = useSearchParams();
  const actionName = searchParams.get("action");

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            {!actionName && <Nav />}

            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

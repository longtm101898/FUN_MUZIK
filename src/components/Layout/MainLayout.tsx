import React from "react";
import { HelmetProvider } from "react-helmet-async";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

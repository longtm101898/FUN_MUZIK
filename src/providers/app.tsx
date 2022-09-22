import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Internal Import
import { MainLayout } from "@components/Layout";

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MainLayout>
      <Router>{children}</Router>
    </MainLayout>
  );
};

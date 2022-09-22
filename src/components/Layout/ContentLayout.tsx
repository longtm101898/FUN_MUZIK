import React from "react";

import { Head } from "../Head";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export const ContentLayout = ({
  children,
  title,
  description,
}: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      {children}
    </>
  );
};

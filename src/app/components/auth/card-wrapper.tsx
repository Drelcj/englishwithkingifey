"use client";

import React from 'react';

import AuthHeader from "./auth-header";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  title: string;
  showSocial?: boolean;
  backButtonHref: string;
}

const CardWrapper = ({ children, headerLabel, title, backButtonLabel, backButtonHref }: CardWrapperProps) => {
  return (
    <div className="card xl:w-1/4 md:w-1/2 bg-white shadow-md">
      <div className="card-header">
        <AuthHeader label={headerLabel} title={title} />
      </div>
      <div className="card-body">
        {children}
      </div>
      <div className="card-footer">
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </div>
    </div>
  );
};

export default CardWrapper;
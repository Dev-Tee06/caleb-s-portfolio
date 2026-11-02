"use client";

import { ViewTransition, type ReactNode } from "react";
import { useDocumentVisible } from "@/lib/useDocumentVisible";

type SafeViewTransitionProps = {
  children: ReactNode;
  name?: string;
};

export default function SafeViewTransition({
  children,
  name,
}: SafeViewTransitionProps) {
  const isDocumentVisible = useDocumentVisible();

  if (!isDocumentVisible) {
    return children;
  }

  return <ViewTransition name={name}>{children}</ViewTransition>;
}

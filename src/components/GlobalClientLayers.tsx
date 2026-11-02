"use client";

/**
 * GlobalClientLayers — Client Component for browser-only UI such as the
 * scroll progress indicator.
 * Must be a Client Component because it uses dynamic() with ssr:false,
 * which is not allowed in Next.js 16 Server Components.
 */

import dynamic from "next/dynamic";

const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"),     { ssr: false });

export default function GlobalClientLayers() {
  return <ScrollProgress />;
}

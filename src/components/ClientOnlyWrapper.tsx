"use client";

/**
 * ClientOnlyWrapper — server-rendered dynamic imports for interactive
 * components. Their effects enhance the markup after hydration.
 */

import dynamic from "next/dynamic";

// Animation primitives
export const ScrollReveal = dynamic(() => import("@/components/animations/ScrollReveal"));

export const SplitText = dynamic(() => import("@/components/animations/SplitText"));

export const MagneticButton = dynamic(() => import("@/components/animations/MagneticButton"));

export const ParallaxLayer = dynamic(() => import("@/components/animations/ParallaxLayer"));

// Section components
export const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));

export const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects"));

export const PortfolioShowcase = dynamic(() => import("@/components/sections/PortfolioShowcase"));

// Global helpers
export const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"));

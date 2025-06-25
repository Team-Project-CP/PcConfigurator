import { useState, useEffect } from "react";

/**
 * loader.tsx
 *
 * Loader component that displays a full-screen animated loading indicator with a gooey black hole effect.
 * Used to indicate loading state in the application.
 */

/**
 * Loader component
 *
 * Renders a full-screen overlay with a custom SVG filter and animated bubbles for a loading effect.
 *
 * @returns {JSX.Element} The loader UI.
 */
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* SVG filter for gooey effect */}
      <svg width="0" height="0">
        <filter id="gooey-black-hole">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" />
        </filter>
      </svg>
      {/* Animated loader bubbles */}
      <div className="black-hole"> 
        <ul className="gooey-container">
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
          <li className="bubble"></li>
        </ul>
      </div>
    </div>
  );
}

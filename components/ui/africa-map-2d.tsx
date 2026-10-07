"use client";

import React from 'react';
import { useTheme } from "@/components/providers/theme-provider";

const AfricaMap2D = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const mapFill = isDark ? '#8B0000' : '#DC143C';
  const strokeColor = '#FF4500';

  return (
    <div 
      className="africa-map-bg"
      style={{
        zIndex: 0,
        opacity: 0.28, // further increased for visibility
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <svg 
        viewBox="0 0 1000 800" 
        preserveAspectRatio="xMidYMid meet"
        className="africa-map-svg"
      >
        {/* Silhouette */}
        <path 
          d="M120 120Q150 150 180 140L210 130Q240 120 270 140L300 150Q330 160 360 150L390 140Q420 130 450 150L480 160Q510 170 540 160L570 150Q600 140 630 160L660 170Q690 180 720 170L750 160Q780 150 810 170L840 180Q870 190 900 180L930 170Q960 160 980 170L1000 180Q980 200 960 210L940 220Q920 230 900 220L880 210Q860 200 840 220L820 230Q800 240 780 230L760 220Q740 210 720 230L700 240Q680 250 660 240L640 230Q620 220 600 240L580 250Q560 260 540 250L520 240Q500 230 480 250L460 260Q440 270 420 260L400 250Q380 240 360 260L340 270Q320 280 300 270L280 260Q260 250 240 270L220 280Q200 290 180 280L160 270Q140 260 120 280L100 290Q80 300 60 290L40 280Q20 270 10 260L30 250Q50 240 70 250L90 260Q110 270 120 260Z M100 300Q130 320 160 310L190 300Q220 290 250 310L280 320Q310 330 340 320L370 310Q400 300 430 320L460 330Q490 340 520 330L550 320Q580 310 610 330L640 340Q670 350 700 340L730 330Q760 320 790 340L820 350Q850 360 880 350L910 340Q940 330 970 350L1000 360Q980 380 960 390L940 400Q920 410 900 400L880 390Q860 380 840 400L820 410Q800 420 780 410L760 400Q740 390 720 410L700 420Q680 430 660 420L640 410Q620 400 600 420L580 430Q560 440 540 430L520 420Q500 410 480 430L460 440Q440 450 420 440L400 430Q380 420 360 440L340 450Q320 460 300 450L280 440Q260 430 240 450L220 460Q200 470 180 460L160 450Q140 440 120 460L100 470Q80 480 60 470L40 460Q20 450 10 440L30 430Q50 420 70 430L90 440Q110 450 120 440Z"
          fill={mapFill}
          stroke={strokeColor}
          strokeWidth="2"
          className="africa-country animate-country-glow"
        />
        {/* Countries */}
        <path 
          d="M350 300Q380 330 410 320L440 310Q470 300 450 280L420 290L390 300L360 290Z"
          fill="#FF0000"
          stroke={strokeColor}
          strokeWidth="3"
          className="africa-country"
        /> {/* Nigeria */}
        <path 
          d="M650 450Q680 480 710 470L740 460Q770 450 750 430L720 440L690 450Z"
          fill="#FF0000"
          stroke={strokeColor}
          strokeWidth="3"
          className="africa-country"
        /> {/* South Africa */}
        <path 
          d="M480 100Q510 130 540 120L570 110Q600 100 580 90L550 100L520 110Z"
          fill="#FF0000"
          stroke={strokeColor}
          strokeWidth="3"
          className="africa-country"
        /> {/* Egypt */}
        <path 
          d="M280 260Q310 290 340 280L370 270Q400 260 380 240L350 250Z"
          fill="#FF0000"
          stroke={strokeColor}
          strokeWidth="3"
          className="africa-country"
        /> {/* Kenya */}
        {/* Glow effect */}
        <rect x="100" y="80" width="400" height="600" fill="none" stroke="#FF4500" strokeWidth="4" opacity="0.4" className="continent-glow" />
      </svg>
    </div>
  );
};

export default AfricaMap2D;


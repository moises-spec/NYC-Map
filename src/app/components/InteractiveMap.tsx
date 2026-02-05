import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import useSWR from 'swr';
import { geoMercator, geoPath } from 'd3-geo';
import PopUp from './PopUp';

// --- Types ---

interface FeatureProperty {
  CounDist: number; // District Number (e.g., 1, 10, 51)
  BoroCode: number; // 1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens, 5=Staten Island
  Shape__Area: number;
  Shape__Length: number;
  // Add other properties as needed from the API response
}

interface GeoJSONFeature {
  type: "Feature";
  properties: FeatureProperty;
  geometry: any; // GeoJSON geometry
}

interface GeoJSONCollection {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

interface InteractiveMapProps {
  className?: string;
}

// --- Fetcher ---
const fetcher = (url: string) => fetch(url).then(r => r.json());

const GEOJSON_URL = "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/NYC_City_Council_Districts/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=pgeojson";

export function InteractiveMap({ className }: InteractiveMapProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Use SWR for data fetching with caching
  const { data, error, isLoading } = useSWR<GeoJSONCollection>(GEOJSON_URL, fetcher, {
    revalidateOnFocus: false, // Don't refetch just because window focused
  });

  // --- Map Projection ---
  const { paths, projection } = useMemo(() => {
    if (!data || !data.features) return { paths: [], projection: null };

    // 1. Setup Projection
    // We render into a 1000x1000 square.
    // geoMercator is standard. 
    // .fitSize will automatically scale and translate the map to fit the container.
    const width = 1000;
    const height = 1000;
    const projection = geoMercator().fitSize([width, height], data);
    const pathGenerator = geoPath().projection(projection);

    // 2. Generate Paths
    const paths = data.features.map((feature) => {
      const d = pathGenerator(feature);
      return {
        id: feature.properties.CounDist,
        d: d,
        boroughCode: feature.properties.BoroCode,
        properties: feature.properties
      };
    });

    return { paths, projection };
  }, [data]);

  // --- Helper to get Borough Name ---
  const getBoroughName = (code: number) => {
    switch(code) {
      case 1: return "Manhattan";
      case 2: return "Bronx";
      case 3: return "Brooklyn";
      case 4: return "Queens";
      case 5: return "Staten Island";
      default: return "NYC";
    }
  };

  // --- Loading / Error States ---
  if (isLoading) {
    return (
      <div className={twMerge("w-full h-full flex flex-col items-center justify-center bg-gray-50 p-4", className)}>
        <div className="flex items-center space-x-2">
           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="mt-4 text-gray-500 text-sm">Loading District Boundaries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={twMerge("w-full h-full flex flex-col items-center justify-center bg-gray-50 p-4", className)}>
        <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
          <p className="font-bold">Error Loading Map</p>
          <p className="text-sm">Could not fetch district data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={twMerge("w-full h-full flex flex-col items-center justify-center bg-gray-50 p-4", className)}>
      <div className="relative w-full max-w-5xl aspect-square bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Map Container */}
        <div className="w-full h-full relative p-4 bg-[#F8FAFC]">
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }}
          >
            {/* Background Water Context (Optional) */}
            {/* Since we don't know exact water bounds without more geojson, we just use a subtle background color for the container */}
            
            {/* Districts */}
            {paths.map((district) => {
              if (!district.d) return null; // Skip invalid geometries

              const isHovered = hoveredId === district.id;
              const isDimmed = hoveredId !== null && !isHovered;
              
              const boroughName = getBoroughName(district.boroughCode);
              const baseFill = '#cccccc'; // Updated to #cccccc as requested

              return (
                <motion.path
                  key={district.id}
                  d={district.d}
                  stroke="#ffffff" // Changed stroke to white so districts are distinct from the gray fill
                  strokeWidth={isHovered ? 1.5 : 0.5}
                  fill={baseFill}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isDimmed ? 0.25 : 1,
                    scale: isHovered ? 1.02 : 1,
                    fill: isHovered ? '#a3a3a3' : baseFill, // Darker gray on hover
                    zIndex: isHovered ? 50 : 1
                  }}
                  // When map loads, animate in
                  transition={{ 
                    duration: 0.3,
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  onMouseEnter={() => setHoveredId(district.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="cursor-pointer outline-none focus:outline-none"
                  style={{
                    transformOrigin: 'center', // This might need refinement for complex shapes, but works okay usually
                    vectorEffect: 'non-scaling-stroke'
                  }}
                >
                  <title>{`District ${district.id} - ${boroughName}`}</title>
                </motion.path>
              );
            })}
          </svg>
        </div>

        {/* Floating Tooltip with PopUp Design */}
        <AnimatePresence>
          {hoveredId && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-6 left-6 pointer-events-none z-50"
            >
               {/* 
                 Note: We're using the provided design component.
                 Since we don't have real "Council Member" data, we use placeholders as per design.
                 The "DISTRICT X" title is dynamic.
               */}
               <PopUp 
                 title={`DISTRICT ${hoveredId}`} 
                 subtitle="Council Member Name" 
                 footer="100 Properties" 
               />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

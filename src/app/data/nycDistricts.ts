import { District } from './nycDistricts';

// NYC Council Districts Data
// Coordinates are based on a 1000x1000 grid representing the NYC bounding box.
// Top-Left (0,0) is approx roughly North Bronx/Riverdale.
// Bottom-Right (1000,1000) is approx Far Rockaway.
// Geography is simplified but retains true relative size and position (True North projection).

export type { District };

export const DISTRICTS_DATA: District[] = [
  // --- MANHATTAN (Districts 1-10) ---
  // Manhattan is long, narrow, and tilted North-East.
  
  { 
    id: '1', 
    name: 'District 1', 
    borough: 'Manhattan', 
    d: 'M 365 670 L 375 650 L 390 645 L 395 660 L 380 685 L 365 670 Z' // Battery Park, Tribeca, Financial District
  },
  { 
    id: '2', 
    name: 'District 2', 
    borough: 'Manhattan', 
    d: 'M 390 645 L 395 620 L 415 615 L 420 630 L 405 655 L 395 660 Z' // Lower East Side, East Village
  },
  { 
    id: '3', 
    name: 'District 3', 
    borough: 'Manhattan', 
    d: 'M 375 650 L 380 600 L 400 600 L 395 620 L 390 645 Z' // Greenwich Village, Chelsea, Hell's Kitchen
  },
  { 
    id: '4', 
    name: 'District 4', 
    borough: 'Manhattan', 
    d: 'M 400 600 L 410 550 L 430 545 L 425 600 L 415 615 L 395 620 Z' // Midtown East, Stuyvesant Town
  },
  { 
    id: '5', 
    name: 'District 5', 
    borough: 'Manhattan', 
    d: 'M 410 550 L 415 510 L 440 500 L 435 540 L 430 545 Z' // Upper East Side
  },
  { 
    id: '6', 
    name: 'District 6', 
    borough: 'Manhattan', 
    d: 'M 380 600 L 390 510 L 415 510 L 410 550 L 400 600 Z' // Upper West Side
  },
  { 
    id: '7', 
    name: 'District 7', 
    borough: 'Manhattan', 
    d: 'M 390 510 L 400 450 L 425 445 L 415 510 Z' // West Harlem, Hamilton Heights
  },
  { 
    id: '8', 
    name: 'District 8', 
    borough: 'Manhattan', 
    d: 'M 415 510 L 425 445 L 460 440 L 480 480 L 450 500 L 440 500 Z' // East Harlem + South Bronx (Mott Haven)
  },
  { 
    id: '9', 
    name: 'District 9', 
    borough: 'Manhattan', 
    d: 'M 400 450 L 410 400 L 435 400 L 425 445 Z' // Central Harlem
  },
  { 
    id: '10', 
    name: 'District 10', 
    borough: 'Manhattan', 
    d: 'M 410 400 L 425 320 L 450 330 L 435 400 Z' // Washington Heights, Inwood
  },

  // --- BRONX (Districts 11-18) ---
  // North and East of Manhattan
  
  { 
    id: '11', 
    name: 'District 11', 
    borough: 'Bronx', 
    d: 'M 450 330 L 460 250 L 520 260 L 500 340 L 450 330 Z' // Riverdale, Kingsbridge
  },
  { 
    id: '12', 
    name: 'District 12', 
    borough: 'Bronx', 
    d: 'M 500 340 L 520 260 L 580 270 L 560 350 Z' // Wakefield, Williamsbridge
  },
  { 
    id: '13', 
    name: 'District 13', 
    borough: 'Bronx', 
    d: 'M 560 350 L 580 270 L 640 300 L 660 380 L 600 400 Z' // Pelham Parkway, City Island
  },
  { 
    id: '14', 
    name: 'District 14', 
    borough: 'Bronx', 
    d: 'M 435 400 L 450 330 L 500 340 L 520 380 L 480 420 Z' // Morris Heights, University Heights
  },
  { 
    id: '15', 
    name: 'District 15', 
    borough: 'Bronx', 
    d: 'M 480 420 L 520 380 L 560 350 L 580 400 L 540 430 Z' // Belmont, West Farms
  },
  { 
    id: '16', 
    name: 'District 16', 
    borough: 'Bronx', 
    d: 'M 460 440 L 480 420 L 540 430 L 520 480 L 480 480 Z' // Highbridge, Concourse
  },
  { 
    id: '17', 
    name: 'District 17', 
    borough: 'Bronx', 
    d: 'M 520 480 L 540 430 L 580 400 L 600 400 L 620 460 L 560 500 Z' // Hunts Point, Longwood
  },
  { 
    id: '18', 
    name: 'District 18', 
    borough: 'Bronx', 
    d: 'M 620 460 L 600 400 L 660 380 L 680 460 L 640 500 Z' // Castle Hill, Parkchester
  },

  // --- QUEENS (Districts 19-32) ---
  // Huge area to the East
  
  { 
    id: '19', 
    name: 'District 19', 
    borough: 'Queens', 
    d: 'M 700 350 L 800 330 L 880 360 L 820 420 L 760 400 Z' // Whitestone, College Point, North Flushing
  },
  { 
    id: '20', 
    name: 'District 20', 
    borough: 'Queens', 
    d: 'M 680 440 L 760 400 L 800 440 L 740 480 L 700 460 Z' // Flushing
  },
  { 
    id: '21', 
    name: 'District 21', 
    borough: 'Queens', 
    d: 'M 560 480 L 640 420 L 680 440 L 700 460 L 660 520 L 600 500 Z' // East Elmhurst, Corona
  },
  { 
    id: '22', 
    name: 'District 22', 
    borough: 'Queens', 
    d: 'M 580 400 L 640 420 L 560 480 L 520 440 Z' // Astoria, Rikers
  },
  { 
    id: '23', 
    name: 'District 23', 
    borough: 'Queens', 
    d: 'M 800 440 L 820 420 L 880 360 L 950 450 L 850 500 Z' // Bayside, Douglaston
  },
  { 
    id: '24', 
    name: 'District 24', 
    borough: 'Queens', 
    d: 'M 740 480 L 800 440 L 820 520 L 760 540 Z' // Kew Gardens Hills
  },
  { 
    id: '25', 
    name: 'District 25', 
    borough: 'Queens', 
    d: 'M 660 520 L 700 460 L 740 480 L 760 540 L 700 560 Z' // Jackson Heights, Elmhurst
  },
  { 
    id: '26', 
    name: 'District 26', 
    borough: 'Queens', 
    d: 'M 520 500 L 600 500 L 660 520 L 620 580 L 540 560 Z' // Sunnyside, LIC, Woodside
  },
  { 
    id: '27', 
    name: 'District 27', 
    borough: 'Queens', 
    d: 'M 820 580 L 850 500 L 950 550 L 900 650 L 840 640 Z' // St. Albans, Cambria Heights
  },
  { 
    id: '28', 
    name: 'District 28', 
    borough: 'Queens', 
    d: 'M 780 620 L 820 520 L 850 500 L 820 580 L 840 640 L 800 680 Z' // Jamaica, Rochdale
  },
  { 
    id: '29', 
    name: 'District 29', 
    borough: 'Queens', 
    d: 'M 700 560 L 760 540 L 820 520 L 780 620 L 720 600 Z' // Forest Hills, Rego Park
  },
  { 
    id: '30', 
    name: 'District 30', 
    borough: 'Queens', 
    d: 'M 620 580 L 700 560 L 720 600 L 680 640 L 640 620 Z' // Maspeth, Middle Village, Glendale
  },
  { 
    id: '31', 
    name: 'District 31', 
    borough: 'Queens', 
    d: 'M 840 640 L 900 650 L 980 700 L 920 780 L 820 720 Z' // Rosedale, Laurelton
  },
  { 
    id: '32', 
    name: 'District 32', 
    borough: 'Queens', 
    d: 'M 700 680 L 750 640 L 800 680 L 820 720 L 920 780 L 880 820 L 680 840 Z' // The Rockaways + Ozone Park (Connected strip)
  },

  // --- BROOKLYN (Districts 33-48) ---
  // South of Manhattan/Queens
  
  { 
    id: '33', 
    name: 'District 33', 
    borough: 'Brooklyn', 
    d: 'M 420 630 L 520 500 L 540 560 L 520 660 L 480 680 L 420 680 Z' // Brooklyn Heights, Greenpoint (Wraps around navy yard)
  },
  { 
    id: '34', 
    name: 'District 34', 
    borough: 'Brooklyn', 
    d: 'M 540 560 L 620 580 L 640 620 L 580 680 L 550 660 Z' // Williamsburg, Bushwick
  },
  { 
    id: '35', 
    name: 'District 35', 
    borough: 'Brooklyn', 
    d: 'M 480 680 L 520 660 L 550 660 L 540 720 L 500 740 Z' // Fort Greene, Clinton Hill
  },
  { 
    id: '36', 
    name: 'District 36', 
    borough: 'Brooklyn', 
    d: 'M 540 720 L 550 660 L 580 680 L 600 740 L 560 760 Z' // Bed-Stuy
  },
  { 
    id: '37', 
    name: 'District 37', 
    borough: 'Brooklyn', 
    d: 'M 580 680 L 640 620 L 680 640 L 650 750 L 600 740 Z' // Bushwick, ENY
  },
  { 
    id: '38', 
    name: 'District 38', 
    borough: 'Brooklyn', 
    d: 'M 420 720 L 480 700 L 500 740 L 460 780 Z' // Sunset Park, Red Hook
  },
  { 
    id: '39', 
    name: 'District 39', 
    borough: 'Brooklyn', 
    d: 'M 480 700 L 500 740 L 520 720 L 540 780 L 480 760 Z' // Park Slope, Kensington
  },
  { 
    id: '40', 
    name: 'District 40', 
    borough: 'Brooklyn', 
    d: 'M 500 740 L 540 720 L 560 760 L 540 800 L 520 780 Z' // Flatbush
  },
  { 
    id: '41', 
    name: 'District 41', 
    borough: 'Brooklyn', 
    d: 'M 560 760 L 600 740 L 620 780 L 580 800 Z' // Brownsville
  },
  { 
    id: '42', 
    name: 'District 42', 
    borough: 'Brooklyn', 
    d: 'M 650 750 L 680 640 L 750 640 L 700 680 L 680 780 Z' // East New York, Starrett City
  },
  { 
    id: '43', 
    name: 'District 43', 
    borough: 'Brooklyn', 
    d: 'M 400 800 L 460 780 L 480 840 L 440 850 Z' // Bay Ridge
  },
  { 
    id: '44', 
    name: 'District 44', 
    borough: 'Brooklyn', 
    d: 'M 460 780 L 520 780 L 540 800 L 520 840 L 480 840 Z' // Borough Park
  },
  { 
    id: '45', 
    name: 'District 45', 
    borough: 'Brooklyn', 
    d: 'M 540 800 L 580 800 L 620 780 L 640 820 L 600 860 Z' // Flatlands, East Flatbush
  },
  { 
    id: '46', 
    name: 'District 46', 
    borough: 'Brooklyn', 
    d: 'M 600 860 L 640 820 L 680 780 L 700 820 L 640 880 Z' // Canarsie, Bergen Beach
  },
  { 
    id: '47', 
    name: 'District 47', 
    borough: 'Brooklyn', 
    d: 'M 480 840 L 520 840 L 580 860 L 540 900 L 480 880 Z' // Coney Island, Bensonhurst
  },
  { 
    id: '48', 
    name: 'District 48', 
    borough: 'Brooklyn', 
    d: 'M 520 840 L 600 860 L 640 880 L 600 900 L 540 900 Z' // Brighton Beach, Sheepshead Bay
  },

  // --- STATEN ISLAND (Districts 49-51) ---
  // Bottom Left (South West)
  
  { 
    id: '49', 
    name: 'District 49', 
    borough: 'Staten Island', 
    d: 'M 180 680 L 260 640 L 300 700 L 280 740 L 220 760 Z' // North Shore
  },
  { 
    id: '50', 
    name: 'District 50', 
    borough: 'Staten Island', 
    d: 'M 150 750 L 220 760 L 280 740 L 300 780 L 200 850 Z' // Mid-Island
  },
  { 
    id: '51', 
    name: 'District 51', 
    borough: 'Staten Island', 
    d: 'M 60 880 L 150 750 L 200 850 L 180 920 L 100 940 Z' // South Shore
  },
];

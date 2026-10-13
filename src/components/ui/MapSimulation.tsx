"use client";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define custom base64 SVG icons to bypass Next.js relative assets path resolution issues
const truckIcon = L.icon({
  iconUrl: "data:image/svg+xml;base64," + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23F5A623" width="32" height="32">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-6.5h-3V9h3v3z"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const nodeIcon = L.icon({
  iconUrl: "data:image/svg+xml;base64," + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230B1121" width="20" height="20">
      <circle cx="12" cy="12" r="7" fill="%230B1121" stroke="white" stroke-width="2"/>
      <circle cx="12" cy="12" r="2.5" fill="%23F5A623"/>
    </svg>
  `),
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export default function MapSimulation() {
  const tanzaniaCenter: [number, number] = [-5.5, 37.8]; // Centered to view Dar es Salaam, Dodoma and Arusha
  const defaultZoom = 7;

  // Transit coordinate coordinates: Dar es Salaam -> Dodoma -> Arusha
  const routeCoords: [number, number][] = [
    [-6.7924, 39.2083], // Dar es Salaam
    [-6.1722, 35.7395], // Dodoma
    [-3.3728, 36.6828], // Arusha
  ];

  const truckPos: [number, number] = [-6.1722, 35.7395]; // Positioned at Dodoma (halfway node)

  return (
    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md z-10 border border-slate-100 bg-[#f4f3f0]">
      <MapContainer
        center={tanzaniaCenter}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* CartoDB Positron Lightweight Map Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Draw routing line (Amber) */}
        <Polyline
          positions={routeCoords}
          pathOptions={{ color: "#F5A623", weight: 4, opacity: 0.95 }}
        />

        {/* Dar es Salaam Terminal Pin */}
        <Marker position={routeCoords[0]} icon={nodeIcon}>
          <Popup>
            <div className="text-xs font-sans text-navy">
              <span className="font-bold block">Dar es Salaam Port Hub</span>
              Status: Origin Gate release confirmed
            </div>
          </Popup>
        </Marker>

        {/* Arusha Terminal Pin */}
        <Marker position={routeCoords[2]} icon={nodeIcon}>
          <Popup>
            <div className="text-xs font-sans text-navy">
              <span className="font-bold block">Arusha Inland Depot</span>
              Status: Destination ETA active
            </div>
          </Popup>
        </Marker>

        {/* Live Truck Asset Pin */}
        <Marker position={truckPos} icon={truckIcon}>
          <Popup>
            <div className="text-xs font-sans text-navy">
              <span className="font-bold text-amber block">APEX Transit Cargo #0806</span>
              Speed: 64 km/h <br />
              Status: In Transit (Dodoma Central Corridor) <br />
              Temp: Checked / Normal
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

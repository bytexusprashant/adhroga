import { useRef, useState } from "react";
import {
  Circle,
  Crosshair,
  GraduationCap,
  Hospital,
  MapPin,
  Maximize,
  Plane,
  ShoppingBag,
  TrainFront,
} from "lucide-react";

const landmarks = [
  { icon: Plane, name: "Chandigarh International Airport", distance: "12 km" },
  { icon: MapPin, name: "Mohali Business District", distance: "5 km" },
  {
    icon: GraduationCap,
    name: "Top Schools & Universities",
    distance: "3 – 10 km",
  },
  { icon: Hospital, name: "Hospitals", distance: "4 km" },
  { icon: ShoppingBag, name: "Shopping & Entertainment", distance: "5 km" },
  { icon: TrainFront, name: "Upcoming Metro Corridor", distance: "6 km" },
];

export default function ProjectLocation() {
  const [mapMode, setMapMode] = useState("Map");
  const [zoom, setZoom] = useState(12);
  const mapRef = useRef(null);
  const mapUrl = `https://maps.google.com/maps?q=30.7046,76.7179&t=${mapMode === "Satellite" ? "k" : "m"}&z=${zoom}&output=embed`;

  return (
    <section className="v2-location-section v2-section" id="location">
      <div className="v2-section-heading">
        {/* <div className="v2-eyebrow">LOCATION</div> */}
        <h2>Project Location</h2>
      </div>
      <div className="v2-location-stage">
        <div className="v2-location-map" ref={mapRef}>
          <iframe
            title="Map centered on The Green Estate in Mohali"
            src={mapUrl}
            loading="lazy"
          />
          <div className="v2-map-mode" role="group" aria-label="Map type">
            {["Map", "Satellite"].map((mode) => (
              <button
                key={mode}
                type="button"
                className={mapMode === mode ? "v2-map-mode-active" : ""}
                aria-pressed={mapMode === mode}
                onClick={() => setMapMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
          <button
            className="v2-map-fullscreen"
            type="button"
            aria-label="Expand map"
            onClick={() => mapRef.current?.requestFullscreen?.()}
          >
            <Maximize size={18} />
          </button>
          <div className="v2-map-zoom" aria-label="Map zoom controls">
            <button
              type="button"
              aria-label="Zoom in"
              onClick={() => setZoom((value) => Math.min(value + 1, 17))}
            >
              +
            </button>
            <button
              type="button"
              aria-label="Zoom out"
              onClick={() => setZoom((value) => Math.max(value - 1, 8))}
            >
              −
            </button>
          </div>
          <div className="v2-map-project-pin">
            <MapPin size={30} fill="currentColor" />
            <span>
              <b>The Green Estate</b>
              <small>Mohali, Punjab</small>
            </span>
          </div>
          <span className="v2-map-credit">Map data © Google</span>
        </div>
        <aside className="v2-landmarks">
          <h3>Nearby Landmarks</h3>
          <ul>
            {landmarks.map(({ icon: Icon, name, distance }) => (
              <li key={name}>
                <Icon size={20} />
                <span>{name}</span>
                <b>{distance}</b>
              </li>
            ))}
          </ul>
          <a
            className="v2-directions-button"
            href="https://www.google.com/maps/dir/?api=1&destination=30.7046,76.7179"
            target="_blank"
            rel="noreferrer"
          >
            <Crosshair size={17} />
            Get Directions
          </a>
        </aside>
      </div>
    </section>
  );
}

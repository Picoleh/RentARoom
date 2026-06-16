import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapLoader() {
  const position: [number, number] = [50.80156934250092, 11.573895384775291]; // São Paulo

  return (
    <div className="w-full h-72 ">
      <MapContainer
        center={position}
        zoom={13}
        className="w-full h-full rounded-3xl z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Meu marcador</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
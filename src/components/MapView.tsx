import { MapPin, Navigation, Locate } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapView = () => {
  return (
    <div className="relative h-64 bg-gradient-to-br from-muted to-accent overflow-hidden">
      {/* Mock Map Background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Street Lines */}
          <path
            d="M0 80 L400 80 M0 120 L400 120"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <path
            d="M100 0 L100 200 M200 0 L200 200 M300 0 L300 200"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          
          {/* Buildings */}
          <rect x="50" y="60" width="40" height="40" fill="hsl(var(--muted))" />
          <rect x="120" y="40" width="60" height="60" fill="hsl(var(--muted))" />
          <rect x="220" y="50" width="50" height="50" fill="hsl(var(--muted))" />
          <rect x="320" y="30" width="70" height="70" fill="hsl(var(--muted))" />
          
          <rect x="50" y="140" width="40" height="40" fill="hsl(var(--muted))" />
          <rect x="120" y="120" width="60" height="60" fill="hsl(var(--muted))" />
          <rect x="220" y="130" width="50" height="50" fill="hsl(var(--muted))" />
          <rect x="320" y="110" width="70" height="70" fill="hsl(var(--muted))" />
        </svg>
      </div>

      {/* Route Line */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 100 Q150 50 250 80 T350 100"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeDasharray="8 4"
          fill="none"
          className="animate-pulse"
        />
      </svg>

      {/* Pickup Location Pin */}
      <div className="absolute top-16 left-12 transform -translate-x-1/2 -translate-y-full">
        <div className="relative">
          <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-success text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Pickup
          </div>
        </div>
      </div>

      {/* Destination Pin */}
      <div className="absolute top-16 right-12 transform translate-x-1/2 -translate-y-full">
        <div className="relative">
          <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <Navigation className="w-4 h-4 text-white" />
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-destructive text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Destination
          </div>
        </div>
      </div>

      {/* Driver Location (Moving) */}
      <div className="absolute top-20 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
            <span className="text-xs font-bold text-primary-foreground">🏍️</span>
          </div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <Button size="sm" variant="secondary" className="w-8 h-8 p-0 shadow-lg">
          <Locate className="w-4 h-4" />
        </Button>
      </div>

      {/* Live Tracking Indicator */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-xs font-medium">Live tracking</span>
        </div>
      </div>

      {/* ETA Display */}
      <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <Navigation className="w-3 h-3 text-primary-foreground" />
          <span className="text-xs font-medium text-primary-foreground">3 mins away</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
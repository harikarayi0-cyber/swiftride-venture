import { useState } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingFormProps {
  onConfirm: () => void;
}

const BookingForm = ({ onConfirm }: BookingFormProps) => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("standard");

  const rideTypes = [
    { id: "standard", name: "Standard", price: "₹85", time: "18 min", icon: "🏍️" },
    { id: "premium", name: "Premium", price: "₹120", time: "15 min", icon: "🏍️✨" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup && destination) {
      onConfirm();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Where to?</h3>
        <p className="text-muted-foreground text-sm">Enter your pickup and destination</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup Location */}
        <div className="space-y-2">
          <Label htmlFor="pickup" className="flex items-center">
            <div className="w-3 h-3 bg-success rounded-full mr-2"></div>
            Pickup Location
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="pickup"
              type="text"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Destination */}
        <div className="space-y-2">
          <Label htmlFor="destination" className="flex items-center">
            <div className="w-3 h-3 bg-destructive rounded-full mr-2"></div>
            Destination
          </Label>
          <div className="relative">
            <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="destination"
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Ride Type Selection */}
        <div className="space-y-3">
          <Label>Choose Ride Type</Label>
          <div className="space-y-2">
            {rideTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 rounded-lg border cursor-pointer transition-smooth ${
                  rideType === type.id
                    ? "bg-accent border-primary shadow-primary"
                    : "bg-card border-border hover:bg-muted"
                }`}
                onClick={() => setRideType(type.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{type.icon}</span>
                    <div>
                      <h4 className="font-medium">{type.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {type.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{type.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Location Buttons */}
        <div className="space-y-2">
          <Label>Quick Locations</Label>
          <div className="flex space-x-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setPickup("Current Location")}
              className="flex-1"
            >
              📍 Current
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setDestination("Home")}
              className="flex-1"
            >
              🏠 Home
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setDestination("Office")}
              className="flex-1"
            >
              🏢 Work
            </Button>
          </div>
        </div>

        {/* Confirm Button */}
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-smooth"
          disabled={!pickup || !destination}
        >
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
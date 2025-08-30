import { Star, Phone, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import driverAvatar from "@/assets/driver-avatar.jpg";

interface DriverCardProps {
  name: string;
  rating: number;
  vehicleNumber: string;
  eta: string;
  imageUrl?: string;
}

const DriverCard = ({ name, rating, vehicleNumber, eta, imageUrl }: DriverCardProps) => {
  return (
    <Card className="p-4 shadow-card">
      <div className="flex items-center space-x-4">
        {/* Driver Avatar */}
        <div className="relative">
          <img
            src={imageUrl || driverAvatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center space-x-1 bg-accent px-2 py-1 rounded-full">
              <Star className="w-3 h-3 fill-primary text-primary" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">{vehicleNumber}</p>
              <div className="flex items-center text-sm text-primary font-medium">
                <Navigation className="w-3 h-3 mr-1" />
                Arriving in {eta}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-4">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-success text-success hover:bg-success hover:text-success-foreground hover-lift"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Chat
        </Button>
      </div>

      {/* Trip Status */}
      <div className="mt-4 p-3 bg-accent rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-accent-foreground">Driver is on the way</span>
          </div>
          <span className="text-xs text-muted-foreground">Track live location</span>
        </div>
      </div>
    </Card>
  );
};

export default DriverCard;
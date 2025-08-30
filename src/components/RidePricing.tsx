import { Clock, MapPin, Tag, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RidePricingProps {
  distance: string;
  duration: string;
  fare: number;
  originalFare?: number;
}

const RidePricing = ({ distance, duration, fare, originalFare }: RidePricingProps) => {
  const savings = originalFare ? originalFare - fare : 0;

  return (
    <Card className="p-4 shadow-card">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Trip Details</h3>
          {savings > 0 && (
            <div className="flex items-center bg-success/10 text-success px-2 py-1 rounded-full">
              <Tag className="w-3 h-3 mr-1" />
              <span className="text-xs font-medium">₹{savings} saved</span>
            </div>
          )}
        </div>

        {/* Trip Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="font-medium">{distance}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-medium">{duration}</p>
            </div>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="space-y-3 pt-3 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Base fare</span>
            <span>₹40</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Distance ({distance})</span>
            <span>₹{fare - 45}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Platform fee</span>
            <span>₹5</span>
          </div>

          {savings > 0 && (
            <div className="flex items-center justify-between text-success">
              <span className="flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                Flash discount
              </span>
              <span>-₹{savings}</span>
            </div>
          )}

          {/* Total */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="font-semibold text-lg">Total fare</span>
            <div className="text-right">
              {originalFare && (
                <span className="text-sm text-muted-foreground line-through mr-2">
                  ₹{originalFare}
                </span>
              )}
              <span className="font-bold text-xl text-primary">₹{fare}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">₹</span>
              </div>
              <span className="text-sm font-medium">Cash Payment</span>
            </div>
            <button className="text-xs text-primary hover:underline">
              Change
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RidePricing;
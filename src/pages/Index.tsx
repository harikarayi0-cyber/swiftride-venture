import { useState } from "react";
import { MapPin, Clock, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import DriverCard from "@/components/DriverCard";
import RidePricing from "@/components/RidePricing";
import MapView from "@/components/MapView";
import swiftrideLogo from "@/assets/swiftride-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [rideRequested, setRideRequested] = useState(false);

  const handleBookRide = () => {
    setShowBooking(true);
  };

  const handleConfirmRide = () => {
    setRideRequested(true);
    setShowBooking(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4 shadow-card">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <img src={swiftrideLogo} alt="SwiftRide" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-foreground">SwiftRide</h1>
          </div>
          <Button variant="ghost" size="sm">
            <Navigation className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">
            Swift. Safe. Smart.
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-sm">
            Book your bike taxi in seconds and reach your destination faster
          </p>
          {!showBooking && !rideRequested && (
            <Button 
              onClick={handleBookRide}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift shadow-glow"
            >
              Book Your Ride
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto p-4 space-y-6">
        
        {/* Booking Form */}
        {showBooking && !rideRequested && (
          <Card className="p-6 shadow-card">
            <BookingForm onConfirm={handleConfirmRide} />
          </Card>
        )}

        {/* Ride Status */}
        {rideRequested && (
          <div className="space-y-4">
            {/* Map View */}
            <Card className="overflow-hidden shadow-card">
              <MapView />
            </Card>

            {/* Driver Card */}
            <DriverCard 
              name="Raj Kumar"
              rating={4.8}
              vehicleNumber="MH 01 AB 1234"
              eta="3 mins"
              imageUrl="/src/assets/driver-avatar.jpg"
            />

            {/* Ride Pricing */}
            <RidePricing 
              distance="5.2 km"
              duration="18 min"
              fare={85}
              originalFare={95}
            />

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="flex-1 border-muted hover:bg-muted"
              >
                Call Driver
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                Cancel Ride
              </Button>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        {!showBooking && !rideRequested && (
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 hover-lift cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Saved Places</h3>
                  <p className="text-sm text-muted-foreground">Home, Work</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 hover-lift cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Schedule</h3>
                  <p className="text-sm text-muted-foreground">Book later</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Recent Rides */}
        {!showBooking && !rideRequested && (
          <Card className="p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Recent Rides
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">Home to Office</p>
                    <p className="text-sm text-muted-foreground">Yesterday, 9:15 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹75</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 fill-primary text-primary mr-1" />
                    4.9
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium">Mall to Home</p>
                    <p className="text-sm text-muted-foreground">2 days ago, 7:30 PM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹92</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 fill-primary text-primary mr-1" />
                    4.7
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
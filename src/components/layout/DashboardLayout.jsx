import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    // The main container now has the dark background color.
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar /> {/* Fixed at the top */}
      
      {/* Main Content Area - Scrollable */}
      {/* The background is removed to let the main container's color show through. */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* This now uses the dark 'card' color from your theme. */}
          <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-8 border border-border min-h-[calc(100vh-10rem)]"> 
            <React.Suspense fallback={<div className="text-center py-20 text-lg text-muted-foreground">Loading page content...</div>}>
              <Outlet />
            </React.Suspense>
          </div>
        </div>
      </main>
      
      <Footer /> {/* Fixed at the bottom */}
    </div>
  );
}
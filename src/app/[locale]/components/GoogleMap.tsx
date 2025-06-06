'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FiX } from 'react-icons/fi';

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  height?: string;
  showPlaces?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  latitude, 
  longitude, 
  height = '500px',
  showPlaces = false 
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [places, setPlaces] = useState<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      setMapLoaded(true);
      return;
    }

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      setMapLoaded(false);
    };
  }, []);

  const initMap = async () => {
    if (!window.google) return;

    try {
      const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
      const center = new google.maps.LatLng(latitude, longitude);

      mapRef.current = new Map(document.getElementById('map') as HTMLElement, {
        center: center,
        zoom: 15,
        mapId: 'DEMO_MAP_ID',
      });

      // Add marker
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        title: 'Location',
      });

      if (showPlaces) {
        nearbySearch();
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const nearbySearch = async () => {
    if (!mapRef.current) return;

    try {
      const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      const { LatLngBounds } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;

      const center = new google.maps.LatLng(latitude, longitude);
      const bounds = new LatLngBounds();

      const placeTypes = ['restaurant', 'school', 'shopping_mall', 'supermarket', 'train_station', 'bus_station', 'hospital', 'pharmacy'];
      const allResults: any[] = [];

      for (const type of placeTypes) {
        const request = {
          fields: ['displayName', 'location', 'businessStatus', 'rating', 'userRatingCount', 'formattedAddress'],
          locationRestriction: {
            center: center,
            radius: 1000,
          },
          includedPrimaryTypes: [type],
          maxResultCount: 5,
          rankPreference: SearchNearbyRankPreference.POPULARITY,
          language: 'en-US',
        };

        try {
          const { places } = await Place.searchNearby(request);
          
          if (places.length) {
            allResults.push(...places);
            
            places.forEach((place) => {
              if (place.location) {
                const marker = new AdvancedMarkerElement({
                  map: mapRef.current,
                  position: place.location,
                  title: place.displayName,
                });

                marker.addListener('click', () => {
                  setSelectedPlace(place);
                });

                bounds.extend(place.location as google.maps.LatLng);
              }
            });
          }
        } catch (error) {
          console.error(`Error searching for ${type}:`, error);
        }
      }

      setPlaces(allResults);
      
      if (allResults.length > 0) {
        mapRef.current.fitBounds(bounds);
      }
    } catch (error) {
      console.error('Error in nearby search:', error);
    }
  };

  useEffect(() => {
    if (mapLoaded) {
      initMap();
    }
  }, [mapLoaded]);

  return (
    <div className="relative">
      <div id="map" className={`w-full rounded-md`} style={{ height }} />
      
      {showPlaces && (
        <>
          {/* Places List */}
          <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-md shadow-lg p-4 max-h-[calc(100%-2rem)] overflow-y-auto w-72 z-10">
            <h3 className="text-lg font-semibold mb-3 text-green-600 sticky top-0 bg-white dark:bg-slate-800 pb-2">Nearby Places</h3>
            <div className="space-y-2">
              {places.map((place, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded cursor-pointer transition-colors duration-200"
                  onClick={() => setSelectedPlace(place)}
                >
                  <div className="font-medium text-sm">{place.displayName}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {place.businessStatus === 'OPERATIONAL' ? 'Open' : place.businessStatus}
                  </div>
                </div>
              ))}
              {places.length === 0 && (
                <div className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No places found nearby
                </div>
              )}
            </div>
          </div>

          {/* Place Details */}
          {selectedPlace && (
            <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 rounded-md shadow-lg p-4 max-w-sm z-10">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                onClick={() => setSelectedPlace(null)}
              >
                <FiX className="w-5 h-5" />
              </button>
              <div className="pr-6">
                <h3 className="text-lg font-semibold mb-2">{selectedPlace.displayName}</h3>
                {selectedPlace.rating && (
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{selectedPlace.rating}</span>
                    {selectedPlace.userRatingCount && (
                      <span className="text-sm text-gray-500 ml-1">
                        ({selectedPlace.userRatingCount} reviews)
                      </span>
                    )}
                  </div>
                )}
                {selectedPlace.formattedAddress && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedPlace.formattedAddress}</p>
                )}
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {selectedPlace.businessStatus === 'OPERATIONAL' ? 'Open' : selectedPlace.businessStatus}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Loading State */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex items-center justify-center rounded-md">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap; 
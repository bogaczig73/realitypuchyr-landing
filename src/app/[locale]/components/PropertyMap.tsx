'use client'
import React, { useEffect, useState, useRef, memo } from 'react';
import { FiX, FiMapPin, FiStar, FiClock, FiNavigation } from 'react-icons/fi';

interface PropertyMapProps {
  latitude: number;
  longitude: number;
}

interface Landmark {
  id: string;
  name: string;
  type: string;
  distance: number;
  rating?: number;
  userRatingCount?: number;
  businessStatus?: string;
  formattedAddress?: string;
  location?: google.maps.LatLng;
}

interface LandmarkCategory {
  key: string;
  label: string;
  icon: string;
  color: string;
  placeTypes: string[];
}

const landmarkCategories: LandmarkCategory[] = [
  { key: 'vecerka', label: 'Večerka', icon: '🛒', color: 'bg-blue-100 text-blue-600', placeTypes: ['convenience_store'] },
  { key: 'hospoda', label: 'Hospoda', icon: '🍺', color: 'bg-amber-100 text-amber-600', placeTypes: ['bar'] },
  { key: 'cukrarna', label: 'Cukrárna', icon: '🍰', color: 'bg-pink-100 text-pink-600', placeTypes: ['bakery', 'cafe'] },
  { key: 'veterinar', label: 'Veterinář', icon: '🐾', color: 'bg-purple-100 text-purple-600', placeTypes: ['veterinary_care'] },
  { key: 'divadlo', label: 'Divadlo', icon: '🎭', color: 'bg-indigo-100 text-indigo-600', placeTypes: ['movie_theater', 'performing_arts'] },
  { key: 'hriste', label: 'Hřiště', icon: '⚽', color: 'bg-green-100 text-green-600', placeTypes: ['park'] },
  { key: 'kino', label: 'Kino', icon: '🎬', color: 'bg-red-100 text-red-600', placeTypes: ['movie_theater'] },
  { key: 'prirodni', label: 'Přírodní zajímavost', icon: '🌳', color: 'bg-emerald-100 text-emerald-600', placeTypes: ['natural_feature', 'park'] },
  { key: 'lekarna', label: 'Lékárna', icon: '💊', color: 'bg-cyan-100 text-cyan-600', placeTypes: ['pharmacy'] },
  { key: 'bus', label: 'Bus MHD', icon: '🚌', color: 'bg-orange-100 text-orange-600', placeTypes: ['bus_station', 'transit_station'] },
  { key: 'skolka', label: 'Školka', icon: '👶', color: 'bg-yellow-100 text-yellow-600', placeTypes: ['preschool'] },
  { key: 'restaurace', label: 'Restaurace', icon: '🍽️', color: 'bg-rose-100 text-rose-600', placeTypes: ['restaurant'] },
  { key: 'bankomat', label: 'Bankomat', icon: '🏧', color: 'bg-gray-100 text-gray-600', placeTypes: ['atm'] },
  { key: 'lekar', label: 'Lékař', icon: '👨‍⚕️', color: 'bg-teal-100 text-teal-600', placeTypes: ['doctor', 'health'] },
  { key: 'vlak', label: 'Vlak', icon: '🚂', color: 'bg-blue-100 text-blue-600', placeTypes: ['train_station'] },
  { key: 'skola', label: 'Škola', icon: '🎓', color: 'bg-violet-100 text-violet-600', placeTypes: ['school'] },
  { key: 'tram', label: 'Tram', icon: '🚊', color: 'bg-lime-100 text-lime-600', placeTypes: ['transit_station'] },
  { key: 'obchod', label: 'Obchod', icon: '🛍️', color: 'bg-sky-100 text-sky-600', placeTypes: ['store', 'shopping_mall', 'supermarket'] },
  { key: 'posta', label: 'Pošta', icon: '📮', color: 'bg-slate-100 text-slate-600', placeTypes: ['post_office'] },
  { key: 'sportoviste', label: 'Sportoviště', icon: '🏃', color: 'bg-fuchsia-100 text-fuchsia-600', placeTypes: ['gym', 'stadium'] },
  { key: 'metro', label: 'Metro', icon: '🚇', color: 'bg-amber-100 text-amber-600', placeTypes: ['subway_station'] },
];

const PropertyMap = memo(({ latitude, longitude }: PropertyMapProps) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [landmarks, setLandmarks] = useState<{ [key: string]: Landmark[] }>({});
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [loading, setLoading] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: string]: google.maps.marker.AdvancedMarkerElement[] }>({});

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      setMapLoaded(true);
      return;
    }

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      setMapLoaded(false);
    };
  }, []);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const initMap = async () => {
    if (!window.google) return;

    try {
      const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
      const center = new google.maps.LatLng(latitude, longitude);

      mapRef.current = new Map(document.getElementById('property-map') as HTMLElement, {
        center: center,
        zoom: 15,
        mapId: 'DEMO_MAP_ID',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      // Add property marker
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      const propertyMarker = new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        title: 'Property Location',
      });

      // Add property marker to markers ref
      markersRef.current['property'] = [propertyMarker];

      // Start searching for landmarks
      searchLandmarks();
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const searchLandmarks = async () => {
    if (!mapRef.current) return;

    setLoading(true);
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const { LatLngBounds } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;

    const center = new google.maps.LatLng(latitude, longitude);
    const bounds = new LatLngBounds();
    const allLandmarks: { [key: string]: Landmark[] } = {};

    // Clear existing markers
    Object.values(markersRef.current).flat().forEach(marker => marker.map = null);
    markersRef.current = {};

    for (const category of landmarkCategories) {
      const categoryLandmarks: Landmark[] = [];

      for (const placeType of category.placeTypes) {
        const request = {
          fields: ['displayName', 'location', 'businessStatus', 'rating', 'userRatingCount', 'formattedAddress'],
          locationRestriction: {
            center: center,
            radius: 2000, // 2km radius
          },
          includedPrimaryTypes: [placeType],
          maxResultCount: 3,
          rankPreference: SearchNearbyRankPreference.POPULARITY,
          language: 'cs-CZ',
        };

        try {
          const { places } = await Place.searchNearby(request);
          
          if (places.length) {
            places.forEach((place) => {
              if (place.location) {
                const distance = calculateDistance(
                  latitude, 
                  longitude, 
                  (place.location as google.maps.LatLng).lat(), 
                  (place.location as google.maps.LatLng).lng()
                );

                const landmark: Landmark = {
                  id: `${category.key}-${place.displayName || 'Unknown'}`,
                  name: place.displayName || 'Unknown',
                  type: category.key,
                  distance: distance,
                  rating: place.rating || undefined,
                  userRatingCount: place.userRatingCount || undefined,
                  businessStatus: place.businessStatus || undefined,
                  formattedAddress: place.formattedAddress || undefined,
                  location: place.location,
                };

                categoryLandmarks.push(landmark);

                // Create marker
                const marker = new AdvancedMarkerElement({
                  map: mapRef.current,
                  position: place.location,
                  title: place.displayName || 'Unknown',
                });

                // Add click listener
                marker.addListener('click', () => {
                  setSelectedLandmark(landmark);
                });

                // Store marker reference
                if (!markersRef.current[category.key]) {
                  markersRef.current[category.key] = [];
                }
                markersRef.current[category.key].push(marker);

                bounds.extend(place.location as google.maps.LatLng);
              }
            });
          }
        } catch (error) {
          console.error(`Error searching for ${placeType}:`, error);
        }
      }

      // Sort by distance and take closest 2
      categoryLandmarks.sort((a, b) => a.distance - b.distance);
      allLandmarks[category.key] = categoryLandmarks.slice(0, 2);
    }

    setLandmarks(allLandmarks);
    
    // Fit map to show all markers
    if (Object.values(allLandmarks).flat().length > 0) {
      mapRef.current.fitBounds(bounds);
    }

    setLoading(false);
  };

  const handleLandmarkClick = (landmark: Landmark) => {
    setSelectedLandmark(landmark);
    if (landmark.location && mapRef.current) {
      mapRef.current.setCenter(landmark.location);
      mapRef.current.setZoom(17);
    }
  };

  const clearSelection = () => {
    setSelectedLandmark(null);
    if (mapRef.current) {
      const center = new google.maps.LatLng(latitude, longitude);
      mapRef.current.setCenter(center);
      mapRef.current.setZoom(15);
    }
  };

  useEffect(() => {
    if (mapLoaded) {
      initMap();
    }
  }, [mapLoaded]);

  const getCategoryInfo = (type: string) => {
    return landmarkCategories.find(cat => cat.key === type) || landmarkCategories[0];
  };

  return (
    <div className="space-y-6">
      {/* Map */}
      <div className="relative">
        <div id="property-map" className="w-full h-[500px] rounded-lg shadow-md" />
        
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex items-center justify-center rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Hledám zajímavá místa...</span>
            </div>
          </div>
        )}

        {/* Selected landmark details */}
        {selectedLandmark && (
          <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 max-w-sm z-10">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              onClick={clearSelection}
            >
              <FiX className="w-5 h-5" />
            </button>
            <div className="pr-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{getCategoryInfo(selectedLandmark.type).icon}</span>
                <h3 className="text-lg font-semibold">{selectedLandmark.name}</h3>
              </div>
              {selectedLandmark.rating && (
                <div className="flex items-center mb-2">
                  <FiStar className="text-yellow-400 w-4 h-4" />
                  <span className="ml-1 text-sm">{selectedLandmark.rating}</span>
                  {selectedLandmark.userRatingCount && (
                    <span className="text-sm text-gray-500 ml-1">
                      ({selectedLandmark.userRatingCount} hodnocení)
                    </span>
                  )}
                </div>
              )}
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <FiNavigation className="w-4 h-4 mr-1" />
                <span>{selectedLandmark.distance.toFixed(1)} km</span>
              </div>
              {selectedLandmark.formattedAddress && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{selectedLandmark.formattedAddress}</p>
              )}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiClock className="w-4 h-4 mr-1" />
                <span>{selectedLandmark.businessStatus === 'OPERATIONAL' ? 'Otevřeno' : 'Zavřeno'}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Landmarks List */}
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
          <FiMapPin className="mr-2" />
          Zajímavá místa v okolí
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {landmarkCategories.map((category) => {
            const categoryLandmarks = landmarks[category.key] || [];
            
            return (
              <div key={category.key} className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <h4 className="font-medium text-gray-900 dark:text-white">{category.label}</h4>
                </div>
                
                <div className="space-y-2">
                  {categoryLandmarks.length > 0 ? (
                    categoryLandmarks.map((landmark) => (
                      <div
                        key={landmark.id}
                        className="p-2 hover:bg-gray-50 dark:hover:bg-slate-700 rounded cursor-pointer transition-colors duration-200"
                        onClick={() => handleLandmarkClick(landmark)}
                      >
                        <div className="font-medium text-sm text-gray-900 dark:text-white">
                          {landmark.name}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span>{landmark.distance.toFixed(1)} km</span>
                          {landmark.rating && (
                            <div className="flex items-center">
                              <FiStar className="text-yellow-400 w-3 h-3 mr-1" />
                              <span>{landmark.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-400 dark:text-gray-500 italic">
                      Žádné místo nenalezeno
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

PropertyMap.displayName = 'PropertyMap';

export default PropertyMap; 
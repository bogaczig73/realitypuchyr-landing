'use client'
import React, { useEffect, useState, useRef, memo } from 'react';
import { FiX, FiMapPin, FiStar, FiClock, FiNavigation } from 'react-icons/fi';

interface PropertyMapProps {
  latitude: number;
  longitude: number;
  onLandmarksLoaded?: (landmarks: { [key: string]: Landmark[] }) => void;
  enablePlacesSearch?: boolean;
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
  { key: 'vecerka', label: 'Večerka', icon: '🏪', color: 'bg-blue-600 text-white', placeTypes: ['convenience_store'] },
  { key: 'hospoda', label: 'Hospoda', icon: '🍺', color: 'bg-orange-600 text-white', placeTypes: ['bar'] },
  { key: 'cukrarna', label: 'Cukrárna', icon: '🍰', color: 'bg-pink-600 text-white', placeTypes: ['bakery', 'cafe'] },
  { key: 'veterinar', label: 'Veterinář', icon: '🐾', color: 'bg-purple-600 text-white', placeTypes: ['veterinary_care'] },
  { key: 'divadlo', label: 'Divadlo', icon: '🎭', color: 'bg-indigo-600 text-white', placeTypes: ['movie_theater'] },
  { key: 'hriste', label: 'Hřiště', icon: '⚽', color: 'bg-green-600 text-white', placeTypes: ['park'] },
  { key: 'kino', label: 'Kino', icon: '🎬', color: 'bg-red-600 text-white', placeTypes: ['movie_theater'] },
  { key: 'prirodni', label: 'Přírodní zajímavost', icon: '🌳', color: 'bg-emerald-600 text-white', placeTypes: ['park'] },
  { key: 'lekarna', label: 'Lékárna', icon: '💊', color: 'bg-cyan-600 text-white', placeTypes: ['pharmacy'] },
  { key: 'bus', label: 'Bus MHD', icon: '🚌', color: 'bg-amber-600 text-white', placeTypes: ['bus_station', 'transit_station'] },
  { key: 'skolka', label: 'Školka', icon: '👶', color: 'bg-yellow-600 text-white', placeTypes: ['preschool'] },
  { key: 'restaurace', label: 'Restaurace', icon: '🍽️', color: 'bg-rose-600 text-white', placeTypes: ['restaurant'] },
  { key: 'bankomat', label: 'Bankomat', icon: '🏧', color: 'bg-gray-600 text-white', placeTypes: ['atm'] },
  { key: 'lekar', label: 'Lékař', icon: '👨‍⚕️', color: 'bg-teal-600 text-white', placeTypes: ['doctor'] },
  { key: 'vlak', label: 'Vlak', icon: '🚂', color: 'bg-blue-700 text-white', placeTypes: ['train_station'] },
  { key: 'skola', label: 'Škola', icon: '🎓', color: 'bg-violet-600 text-white', placeTypes: ['school'] },
  { key: 'tram', label: 'Tram', icon: '🚊', color: 'bg-lime-600 text-white', placeTypes: ['transit_station'] },
  { key: 'obchod', label: 'Obchod', icon: '🛍️', color: 'bg-sky-600 text-white', placeTypes: ['store', 'shopping_mall', 'supermarket'] },
  { key: 'posta', label: 'Pošta', icon: '📮', color: 'bg-slate-600 text-white', placeTypes: ['post_office'] },
  { key: 'sportoviste', label: 'Sportoviště', icon: '🏃', color: 'bg-fuchsia-600 text-white', placeTypes: ['gym', 'stadium'] },
  { key: 'metro', label: 'Metro', icon: '🚇', color: 'bg-amber-700 text-white', placeTypes: ['subway_station'] },
];

// Custom icon SVGs for map markers
const getCustomIcon = (categoryKey: string): string => {
  const icons: { [key: string]: string } = {
    vecerka: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#3B82F6" stroke="white" stroke-width="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <path d="M10 10h4v4h-4z" fill="#3B82F6"/>
    </svg>`,
    hospoda: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#F59E0B" stroke="white" stroke-width="2"/>
      <path d="M7 9h10v6H7z" fill="white"/>
      <path d="M9 11h6v2H9z" fill="#F59E0B"/>
    </svg>`,
    cukrarna: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#EC4899" stroke="white" stroke-width="2"/>
      <path d="M8 10h8v6H8z" fill="white"/>
      <path d="M10 12h4v2h-4z" fill="#EC4899"/>
    </svg>`,
    veterinar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#8B5CF6" stroke="white" stroke-width="2"/>
      <path d="M9 9h6v6H9z" fill="white"/>
      <path d="M11 11h2v2h-2z" fill="#8B5CF6"/>
    </svg>`,
    divadlo: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#6366F1" stroke="white" stroke-width="2"/>
      <path d="M6 8h12v8H6z" fill="white"/>
      <path d="M8 10h8v4H8z" fill="#6366F1"/>
    </svg>`,
    hriste: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#10B981" stroke="white" stroke-width="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <circle cx="12" cy="12" r="3" fill="#10B981"/>
    </svg>`,
    kino: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#EF4444" stroke="white" stroke-width="2"/>
      <path d="M7 8h10v8H7z" fill="white"/>
      <path d="M9 10h6v4H9z" fill="#EF4444"/>
    </svg>`,
    prirodni: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#059669" stroke="white" stroke-width="2"/>
      <path d="M12 6l3 6-3 6-3-6z" fill="white"/>
      <path d="M12 8l2 4-2 4-2-4z" fill="#059669"/>
    </svg>`,
    lekarna: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#06B6D4" stroke="white" stroke-width="2"/>
      <path d="M9 8h6v8H9z" fill="white"/>
      <path d="M11 10h2v4h-2z" fill="#06B6D4"/>
    </svg>`,
    bus: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#F97316" stroke="white" stroke-width="2"/>
      <path d="M6 8h12v8H6z" fill="white"/>
      <path d="M8 10h8v4H8z" fill="#F97316"/>
    </svg>`,
    skolka: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#EAB308" stroke="white" stroke-width="2"/>
      <path d="M10 8h4v8h-4z" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="#EAB308"/>
    </svg>`,
    restaurace: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#E11D48" stroke="white" stroke-width="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <path d="M10 10h4v4h-4z" fill="#E11D48"/>
    </svg>`,
    bankomat: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#6B7280" stroke="white" stroke-width="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <path d="M10 10h4v4h-4z" fill="#6B7280"/>
    </svg>`,
    lekar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#14B8A6" stroke="white" stroke-width="2"/>
      <path d="M9 8h6v8H9z" fill="white"/>
      <path d="M11 10h2v4h-2z" fill="#14B8A6"/>
    </svg>`,
    vlak: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#3B82F6" stroke="white" stroke-width="2"/>
      <path d="M6 8h12v8H6z" fill="white"/>
      <path d="M8 10h8v4H8z" fill="#3B82F6"/>
    </svg>`,
    skola: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#8B5CF6" stroke="white" stroke-width="2"/>
      <path d="M8 6h8v10H8z" fill="white"/>
      <path d="M10 8h4v6h-4z" fill="#8B5CF6"/>
    </svg>`,
    tram: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#84CC16" stroke="white" stroke-width="2"/>
      <path d="M6 8h12v8H6z" fill="white"/>
      <path d="M8 10h8v4H8z" fill="#84CC16"/>
    </svg>`,
    obchod: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#0EA5E9" stroke="white" stroke-width="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <path d="M10 10h4v4h-4z" fill="#0EA5E9"/>
    </svg>`,
    posta: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#64748B" stroke="white" stroke-width="2"/>
      <path d="M8 8h8v8H8z" fill="white"/>
      <path d="M10 10h4v4h-4z" fill="#64748B"/>
    </svg>`,
    sportoviste: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#D946EF" stroke="white" stroke-width="2"/>
      <path d="M9 9h6v6H9z" fill="white"/>
      <path d="M11 11h2v2h-2z" fill="#D946EF"/>
    </svg>`,
    metro: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#F59E0B" stroke="white" stroke-width="2"/>
      <path d="M6 8h12v8H6z" fill="white"/>
      <path d="M8 10h8v4H8z" fill="#F59E0B"/>
    </svg>`,
  };
  
  return icons[categoryKey] || icons.obchod; // Default to obchod icon if category not found
};

const createCustomIcon = (categoryKey: string) => {
  const colors: { [key: string]: string } = {
    vecerka: '#3B82F6', hospoda: '#F59E0B', cukrarna: '#EC4899', veterinar: '#8B5CF6',
    divadlo: '#6366F1', hriste: '#10B981', kino: '#EF4444', prirodni: '#059669',
    lekarna: '#06B6D4', bus: '#F97316', skolka: '#EAB308', restaurace: '#E11D48',
    bankomat: '#6B7280', lekar: '#14B8A6', vlak: '#3B82F6', skola: '#8B5CF6',
    tram: '#84CC16', obchod: '#0EA5E9', posta: '#64748B', sportoviste: '#D946EF', metro: '#F59E0B'
  };
  
  const color = colors[categoryKey] || '#0EA5E9';
  
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="${color}" stroke="white" stroke-width="2"/>
        <path d="M8 8h8v8H8z" fill="white"/>
        <path d="M10 10h4v4h-4z" fill="${color}"/>
      </svg>
    `)}`,
    scaledSize: new google.maps.Size(24, 24),
    anchor: new google.maps.Point(12, 12)
  };
};

const PropertyMap = memo(({ latitude, longitude, onLandmarksLoaded, enablePlacesSearch = false }: PropertyMapProps) => {
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

    // Load Google Maps script (without places library if not needed)
    const script = document.createElement('script');
    const libraries = enablePlacesSearch ? 'places' : '';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}${libraries ? `&libraries=${libraries}` : ''}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    return () => {
      setMapLoaded(false);
    };
  }, [enablePlacesSearch]);

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
        content: new google.maps.marker.PinElement({
          background: '#FF6B35',
          borderColor: '#00a63e',
          glyph: '⭐',
          scale: 1.5
        }).element
      });

      // Add property marker to markers ref
      markersRef.current['property'] = [propertyMarker];

      // Start searching for landmarks only if enabled
      if (enablePlacesSearch) {
        searchLandmarks();
      }
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

    // Clear existing markers (except property marker)
    Object.entries(markersRef.current).forEach(([key, markers]) => {
      if (key !== 'property') {
        markers.forEach(marker => marker.map = null);
      }
    });
    // Keep property marker but clear other categories
    const propertyMarkers = markersRef.current['property'] || [];
    markersRef.current = { property: propertyMarkers };

    for (const category of landmarkCategories) {
      const categoryLandmarks: Landmark[] = [];
      let landmarkCounter = 0;

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
                  id: `${category.key}-${place.displayName || 'Unknown'}-${landmarkCounter++}`,
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
                  content: new google.maps.marker.PinElement({
                    background: getCategoryInfo(category.key).color.split(' ')[0].replace('bg-', '#'),
                    borderColor: '#00a63e',
                    glyph: category.icon,
                    scale: 1.2
                  }).element
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

    if (onLandmarksLoaded) {
      onLandmarksLoaded(allLandmarks);
    }
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

      {/* Landmarks List - Only show if places search is enabled */}
      {enablePlacesSearch && (
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
      )}
    </div>
  );
});

PropertyMap.displayName = 'PropertyMap';

export default PropertyMap; 
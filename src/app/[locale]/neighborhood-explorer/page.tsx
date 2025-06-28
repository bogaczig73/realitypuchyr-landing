'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FiSearch, FiMapPin, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import PropertyMap from '../components/PropertyMap';
import PropertyDescriptionGenerator from '../components/property-description-generator';

interface AutocompletePrediction {
  description: string;
  place_id: string;
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

export default function NeighborhoodExplorer() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<AutocompletePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [landmarks, setLandmarks] = useState<{ [key: string]: Landmark[] }>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const predictionsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('neighborhoodExplorer');

  // Load Google Maps script with Places library
  useEffect(() => {
    if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  // Handle clicks outside of predictions dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (predictionsRef.current && !predictionsRef.current.contains(event.target as Node)) {
        setShowPredictions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getPlacePredictions = async (input: string) => {
    if (!input.trim() || !window.google) {
      setPredictions([]);
      setShowPredictions(false);
      return;
    }

    try {
      const { Place } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
      
      const request = {
        textQuery: input,
        language: 'cs',
        maxResultCount: 5,
        fields: ['displayName', 'id', 'location', 'formattedAddress']
      };

      const { places } = await Place.searchByText(request);
      
      if (places && places.length > 0) {
        const predictions = places.map(place => ({
          description: place.displayName || 'Unknown',
          place_id: place.id || `place_${Math.random()}`
        }));
        
        setPredictions(predictions);
        setShowPredictions(true);
        setSelectedIndex(-1);
      } else {
        setPredictions([]);
        setShowPredictions(false);
      }
    } catch (error) {
      console.error('Error getting predictions:', error);
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const handleAddressChange = (value: string) => {
    setAddress(value);
    // Clear previous results when user starts typing
    if (coordinates) {
      setCoordinates(null);
      setLandmarks({});
    }
    if (value.trim()) {
      getPlacePredictions(value);
    } else {
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const selectPrediction = async (prediction: AutocompletePrediction) => {
    setAddress(prediction.description);
    setShowPredictions(false);
    setSelectedIndex(-1);
    
    // Clear previous results
    setCoordinates(null);
    setLandmarks({});
    
    // Geocode the selected prediction
    await geocodeAddress(prediction.description, prediction.place_id);
  };

  const geocodeAddress = async (address: string, placeId?: string) => {
    if (!address.trim()) {
      setError('Prosím zadejte adresu');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { Place } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;

      // Search by text
      const { places } = await Place.searchByText({
        textQuery: address,
        fields: ['displayName', 'location', 'formattedAddress'],
        language: 'cs',
        maxResultCount: 1
      });

      const place = places[0];

      if (place && place.location) {
        setCoordinates({
          lat: (place.location as google.maps.LatLng).lat(),
          lng: (place.location as google.maps.LatLng).lng()
        });
        setError(null);
      } else {
        setError('Adresa nebyla nalezena. Zkuste zadat přesnější adresu.');
      }
    } catch (err) {
      console.error('Geocoding error:', err);
      setError('Nepodařilo se najít adresu. Zkuste to prosím znovu.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear previous results
    setCoordinates(null);
    setLandmarks({});
    geocodeAddress(address);
  };

  const handleLandmarksLoaded = (landmarksData: { [key: string]: Landmark[] }) => {
    setLandmarks(landmarksData);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && predictions[selectedIndex]) {
        selectPrediction(predictions[selectedIndex]);
      } else {
        geocodeAddress(address);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < predictions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Escape') {
      setShowPredictions(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <>
      <Navbar navClass={''} topnavClass={''} tagline={false}/>
      
      <section className="relative md:py-24 pt-24 pb-16">
        <div className="container relative">
          <div className="grid grid-cols-1 gap-8">
            
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('description')}
              </p>
            </div>

            {/* Search Form */}
            <div className="max-w-2xl mx-auto w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative" ref={predictionsRef}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={address}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                      if (predictions.length > 0) {
                        setShowPredictions(true);
                      }
                    }}
                    placeholder={t('addressPlaceholder')}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-slate-800 dark:text-white"
                    disabled={loading}
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    disabled={loading || !address.trim()}
                    className="absolute inset-y-0 right-0 px-4 flex items-center bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-r-lg transition-colors duration-200"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <FiSearch className="h-5 w-5" />
                    )}
                  </button>

                  {/* Autocomplete Predictions */}
                  {showPredictions && predictions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {predictions.map((prediction, index) => (
                        <button
                          key={prediction.place_id}
                          type="button"
                          onClick={() => selectPrediction(prediction)}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 ${
                            index === selectedIndex 
                              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' 
                              : 'text-gray-900 dark:text-white'
                          } ${index === 0 ? 'rounded-t-lg' : ''} ${index === predictions.length - 1 ? 'rounded-b-lg' : ''}`}
                        >
                          <div className="flex items-center">
                            <FiMapPin className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{prediction.description}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {error && (
                  <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                    <FiAlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </form>

              {/* Example Addresses */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('exampleAddresses')}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Václavské náměstí, Praha', 'Náměstí Republiky, Praha', 'Karlův most, Praha'].map((example: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        setAddress(example);
                        geocodeAddress(example);
                      }}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Landmarks */}
            {coordinates && (
              <div className="mt-8 space-y-8">
                <PropertyMap 
                  latitude={coordinates.lat} 
                  longitude={coordinates.lng} 
                  onLandmarksLoaded={handleLandmarksLoaded}
                />
                
                {/* Property Description Generator */}
                <PropertyDescriptionGenerator 
                  landmarks={landmarks}
                  address={address}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer/>
      <Switcher/>
    </>
  );
} 
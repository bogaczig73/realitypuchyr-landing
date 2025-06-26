'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FiSearch, FiMapPin, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import PropertyMap from '../components/PropertyMap';

interface AutocompletePrediction {
  description: string;
  place_id: string;
}

export default function NeighborhoodExplorer() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<AutocompletePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const predictionsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('neighborhoodExplorer');

  // Load Google Maps script with Places library
  useEffect(() => {
    if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,geocoding`;
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
      const { AutocompleteService } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
      const service = new AutocompleteService();

      service.getPlacePredictions({
        input: input,
        componentRestrictions: { country: 'cz' }, // Restrict to Czech Republic
        types: ['geocode', 'establishment'], // Include addresses and establishments
        language: 'cs'
      }, (predictions, status) => {
        if (status === 'OK' && predictions) {
          setPredictions(predictions);
          setShowPredictions(true);
          setSelectedIndex(-1);
        } else {
          setPredictions([]);
          setShowPredictions(false);
        }
      });
    } catch (error) {
      console.error('Error getting predictions:', error);
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const handleAddressChange = (value: string) => {
    setAddress(value);
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
      const { Geocoder } = await google.maps.importLibrary('geocoding') as google.maps.GeocodingLibrary;
      const geocoder = new Geocoder();

      const geocodeRequest = placeId 
        ? { placeId: placeId }
        : { 
            address: address,
            region: 'cz',
            language: 'cs'
          };

      const result = await geocoder.geocode(geocodeRequest);

      if (result.results.length > 0) {
        const location = result.results[0].geometry.location;
        setCoordinates({
          lat: location.lat(),
          lng: location.lng()
        });
        setError(null);
      } else {
        setError('Adresa nebyla nalezena. Zkuste zadat přesnější adresu.');
      }
    } catch (err) {
      setError('Nepodařilo se najít adresu. Zkuste to prosím znovu.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    geocodeAddress(address);
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
              <div className="mt-8">
                <PropertyMap latitude={coordinates.lat} longitude={coordinates.lng} />
              </div>
            )}

            {/* Instructions */}
            {!coordinates && !loading && (
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8">
                  <FiMapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    {t('howToUse')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {t('howToUseDescription')}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {t('step1Title')}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('step1Description')}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {t('step2Title')}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('step2Description')}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {t('step3Title')}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('step3Description')}
                      </p>
                    </div>
                  </div>
                </div>
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
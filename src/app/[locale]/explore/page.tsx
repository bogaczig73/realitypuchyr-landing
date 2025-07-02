'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiSearch, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import PropertyMap from '../components/PropertyMap';

export default function NeighborhoodExplorer() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('neighborhoodExplorer');

  const geocodeAddress = async (address: string) => {
    if (!address.trim()) {
      setError('Prosím zadejte adresu');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Check if Google Maps is loaded
      if (!window.google) {
        // Load Google Maps script if not already loaded
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=geocoding`;
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          performGeocoding(address);
        };
        
        script.onerror = () => {
          setError('Nepodařilo se načíst Google Maps. Zkuste to prosím znovu.');
          setLoading(false);
        };
        
        document.head.appendChild(script);
      } else {
        await performGeocoding(address);
      }
    } catch (err) {
      setError('Nepodařilo se najít adresu. Zkuste to prosím znovu.');
      setLoading(false);
    }
  };

  const performGeocoding = async (address: string) => {
    try {
      const { Geocoder } = await google.maps.importLibrary('geocoding') as google.maps.GeocodingLibrary;
      const geocoder = new Geocoder();

      const result = await geocoder.geocode({
        address: address,
        region: 'cz', // Czech Republic
        language: 'cs'
      });

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      geocodeAddress(address);
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
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('addressPlaceholder')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-slate-800 dark:text-white"
                    disabled={loading}
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
                <PropertyMap 
                  latitude={coordinates.lat} 
                  longitude={coordinates.lng} 
                  enablePlacesSearch={false}
                />
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
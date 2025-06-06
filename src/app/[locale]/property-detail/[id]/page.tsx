'use client'
import React, { useEffect, useState, useCallback, memo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { LiaCompressArrowsAltSolid } from 'react-icons/lia';
import { LuBath, LuBedDouble } from 'react-icons/lu';
import { FiMapPin, FiPhone, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Switcher from '../../components/switcher';
import { API_BASE_URL } from '../../../../services/api';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Property } from '@/types/property';
import { useApiClient } from '@/hooks/useApiClient';
import { useTranslations } from 'next-intl';

declare global {
  interface Window {
    google: typeof google;
  }
}

const VirtualTour = memo(({ url }: { url: string }) => {

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe 
        width="100%" 
        height="100%" 
        src={url}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
});

VirtualTour.displayName = 'VirtualTour';

const GoogleMap = memo(({ latitude, longitude }: { latitude: number; longitude: number }) => {
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
      // Don't remove the script on unmount as it might be needed by other components
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

      // Add property marker
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      new AdvancedMarkerElement({
        map: mapRef.current,
        position: center,
        title: 'Property Location',
      });

      // Start nearby search
      nearbySearch();
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

      // Search for different types of places
      const placeTypes = ['restaurant', 'school', 'shopping_mall', 'supermarket', 'train_station', 'bus_station', 'hospital', 'pharmacy'];
      const allResults: any[] = [];

      for (const type of placeTypes) {
        const request = {
          fields: ['displayName', 'location', 'businessStatus', 'rating', 'userRatingCount', 'formattedAddress'],
          locationRestriction: {
            center: center,
            radius: 1000, // 1km radius
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
            
            // Add markers for each place
            places.forEach((place) => {
              if (place.location) {
                const marker = new AdvancedMarkerElement({
                  map: mapRef.current,
                  position: place.location,
                  title: place.displayName,
                });

                // Add click listener to marker
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
      
      // Fit map to show all markers
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
      <div id="map" className="w-full h-[500px] rounded-md" />
      
      {/* Places List */}
      <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-md shadow-lg p-4 max-h-[calc(500px-2rem)] overflow-y-auto w-72 z-10">
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

      {/* Loading State */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex items-center justify-center rounded-md">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-600"></div>
        </div>
      )}
    </div>
  );
});

GoogleMap.displayName = 'GoogleMap';

export default function PropertyDetail() {
  const params = useParams();
  const id = parseInt(String(params?.id || 0));
  const locale = params?.locale as string;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ url: string; name: string } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const apiClient = useApiClient();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const t = useTranslations('propertyDetail');

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getPropertyById(id);
        setProperty(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0].url);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching property:', err);
        setError('Failed to load property details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id, apiClient, locale]);

  if (loading) {
    return (
      <>
        <Navbar navClass={''} topnavClass={''} tagline={false}/>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
        </div>
        <Footer/>
        <Switcher/>
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <Navbar navClass={''} topnavClass={''} tagline={false}/>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-red-500">{error || 'Property not found'}</div>
        </div>
        <Footer/>
        <Switcher/>
      </>
    );
  }

  const formatValue = (value: any) => {
    if (value === null || value === undefined || value === '') {
      return <span className="text-gray-400 italic">-</span>;
    }
    if (typeof value === 'object' && value !== null) {
      if ('name' in value && 'slug' in value && 'image' in value) {
        return <span>{String(value.name)}</span>;
      }
      console.log('Unknown object:', value);
      return <span className="text-gray-400 italic">-</span>;
    }
    return <span>{String(value)}</span>;
  };

  const getGoogleMapsUrl = () => {
    if (property.latitude && property.longitude) {
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000!2d${property.longitude}!3d${property.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${property.latitude}%2C${property.longitude}!5e0!3m2!1sen!2s!4v1`;
    }
    return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin';
  };

  const handleImageClick = (url: string, name: string) => {
    setZoomedImage({ url, name });
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <Navbar navClass={''} topnavClass={''} tagline={false}/>
      <section className="relative md:py-24 pt-24 pb-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-7">
              <div className="grid grid-cols-1 relative">
                <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                      {property.images.map((image, index) => (
                        <div className="flex-[0_0_100%] min-w-0" key={image.id}>
                          <div 
                            className="cursor-zoom-in" 
                            onClick={() => handleImageClick(image.url, `Image ${index + 1}`)}
                          >
                            <Image 
                              src={image.url} 
                              width={0} 
                              height={0} 
                              sizes='100vw' 
                              style={{width:'100%', height:'auto'}} 
                              className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" 
                              alt={`${property.name} - Image ${index + 1}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
                    onClick={() => emblaApi?.scrollPrev()}
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
                    onClick={() => emblaApi?.scrollNext()}
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>

                  {/* Dots Navigation */}
                  <div className="flex justify-center gap-2 mt-4">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === selectedIndex 
                            ? 'bg-green-600 scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-medium mt-6 mb-3">{property.name}</h4>
              <span className="text-slate-400 flex items-center">
                <FiMapPin className="size-5 me-2"/> {property.street}, {property.city}, {property.country}
              </span>

              <ul className="py-6 flex items-center list-none">
                <li className="flex items-center lg:me-6 me-4">
                  <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600"/>
                  <span className="lg:text-xl">{property.size} {t('sqft')}</span>
                </li>

                <li className="flex items-center lg:me-6 me-4">
                  <LuBedDouble className="lg:text-3xl text-2xl me-2 text-green-600"/>
                  <span className="lg:text-xl">{property.beds} {t('beds')}</span>
                </li>

                <li className="flex items-center lg:me-6 me-4">
                  <LuBath className="lg:text-3xl text-2xl me-2 text-green-600"/>
                  <span className="lg:text-xl">{property.baths} {t('baths')}</span>
                </li>

                <li className="flex items-center">
                  <i className="mdi mdi-floor-plan text-2xl me-2 text-green-600"></i>
                  <span className="lg:text-xl">{property.layout}</span>
                </li>
              </ul>

              <p className="text-slate-400">{property.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-green-600">{t('basicInformation')}</h5>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('category')}:</span>
                      <span className="text-right">{formatValue(property.category)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('status')}:</span>
                      <span className="text-right">{formatValue(property.status)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('ownershipType')}:</span>
                      <span className="text-right">{formatValue(property.ownershipType)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('size')}:</span>
                      <span className="text-right">{formatValue(property.size)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('beds')}:</span>
                      <span className="text-right">{formatValue(property.beds)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('layout')}:</span>
                      <span className="text-right">{formatValue(property.layout)}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4 text-green-600">{t('location')}</h5>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('street')}:</span>
                      <span className="text-right">{formatValue(property.street)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('city')}:</span>
                      <span className="text-right">{formatValue(property.city)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('country')}:</span>
                      <span className="text-right">{formatValue(property.country)}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-green-600">{t('buildingDetails')}</h5>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('buildingStories')}:</span>
                      <span className="text-right">{formatValue(property.buildingStoriesNumber)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('buildingCondition')}:</span>
                      <span className="text-right">{formatValue(property.buildingCondition)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('apartmentCondition')}:</span>
                      <span className="text-right">{formatValue(property.apartmentCondition)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('aboveGroundFloors')}:</span>
                      <span className="text-right">{formatValue(property.aboveGroundFloors)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('totalAboveGroundFloors')}:</span>
                      <span className="text-right">{formatValue(property.totalAboveGroundFloors)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('totalUndergroundFloors')}:</span>
                      <span className="text-right">{formatValue(property.totalUndergroundFloors)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('reconstructionYearApartment')}:</span>
                      <span className="text-right">{formatValue(property.reconstructionYearApartment)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('reconstructionYearBuilding')}:</span>
                      <span className="text-right">{formatValue(property.reconstructionYearBuilding)}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4 text-green-600">{t('areas')}</h5>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('floorArea')}:</span>
                      <span className="text-right">{formatValue(property.floorArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('builtUpArea')}:</span>
                      <span className="text-right">{formatValue(property.builtUpArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('gardenHouseArea')}:</span>
                      <span className="text-right">{formatValue(property.gardenHouseArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('terraceArea')}:</span>
                      <span className="text-right">{formatValue(property.terraceArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('totalLandArea')}:</span>
                      <span className="text-right">{formatValue(property.totalLandArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('gardenArea')}:</span>
                      <span className="text-right">{formatValue(property.gardenArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('garageArea')}:</span>
                      <span className="text-right">{formatValue(property.garageArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('balconyArea')}:</span>
                      <span className="text-right">{formatValue(property.balconyArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('pergolaArea')}:</span>
                      <span className="text-right">{formatValue(property.pergolaArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('basementArea')}:</span>
                      <span className="text-right">{formatValue(property.basementArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('workshopArea')}:</span>
                      <span className="text-right">{formatValue(property.workshopArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('totalObjectArea')}:</span>
                      <span className="text-right">{formatValue(property.totalObjectArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('usableArea')}:</span>
                      <span className="text-right">{formatValue(property.usableArea)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('landArea')}:</span>
                      <span className="text-right">{formatValue(property.landArea)}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-green-600">{t('objectDetails')}</h5>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('objectType')}:</span>
                      <span className="text-right">{formatValue(property.objectType)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('objectLocationType')}:</span>
                      <span className="text-right">{formatValue(property.objectLocationType)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('houseEquipment')}:</span>
                      <span className="text-right">{formatValue(property.houseEquipment)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('accessRoad')}:</span>
                      <span className="text-right">{formatValue(property.accessRoad)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('objectCondition')}:</span>
                      <span className="text-right">{formatValue(property.objectCondition)}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4 text-green-600">{t('additionalInformation')}</h5>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('equipmentDescription')}:</span>
                      <span className="text-right">{formatValue(property.equipmentDescription)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('additionalSources')}:</span>
                      <span className="text-right">{formatValue(property.additionalSources)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('buildingPermit')}:</span>
                      <span className="text-right">{formatValue(property.buildingPermit)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('buildability')}:</span>
                      <span className="text-right">{formatValue(property.buildability)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('utilitiesOnLand')}:</span>
                      <span className="text-right">{formatValue(property.utilitiesOnLand)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('utilitiesOnAdjacentRoad')}:</span>
                      <span className="text-right">{formatValue(property.utilitiesOnAdjacentRoad)}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">{t('payments')}:</span>
                      <span className="text-right">{formatValue(property.payments)}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Floorplans Section */}
              {property.floorplans && property.floorplans.length > 0 && (
                <div className="mt-6 rounded-md bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-xl font-medium mb-4">{t('floorplans')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {property.floorplans.map((floorplan) => (
                        <div key={floorplan.id} className="rounded-md overflow-hidden">
                          <h6 className="text-lg font-medium mb-2">{floorplan.name}</h6>
                          <div 
                            className="cursor-zoom-in" 
                            onClick={() => handleImageClick(floorplan.url, floorplan.name)}
                          >
                            <Image 
                              src={floorplan.url} 
                              width={0} 
                              height={0} 
                              sizes='100vw' 
                              style={{width:'100%', height:'auto'}} 
                              className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" 
                              alt={`${floorplan.name} - Floorplan`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Virtual Tour Section */}
              {property.virtualTour && (
                <div className="mt-6 rounded-md bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-xl font-medium mb-4">{t('virtualTour')}</h5>
                    <VirtualTour url={property.virtualTour} />
                  </div>
                </div>
              )}

              {/* Zoomed Image Modal */}
              {zoomedImage && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                  onClick={closeZoomedImage}
                >
                  <div className="relative max-w-7xl w-full max-h-[90vh]">
                    <button
                      className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                      onClick={closeZoomedImage}
                    >
                      <FiX className="w-8 h-8" />
                    </button>
                    <div className="relative w-full h-full">
                      <Image
                        src={zoomedImage.url}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }}
                        className="rounded-lg"
                        alt={`${zoomedImage.name} - Zoomed Floorplan`}
                      />
                    </div>
                  </div>
                </div>
              )}
          
              <div className="w-full leading-[0] border-0 mt-6">
                {property.latitude && property.longitude ? (
                  <GoogleMap latitude={property.latitude} longitude={property.longitude} />
                ) : (
                  <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">{t('noLocationAvailable')}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-5">
              <div className="sticky top-20">
                {property.status === 'SOLD' ? (
                  <div className="rounded-md bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-800 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                    <div className="p-6 text-center">
                      <h5 className="text-3xl font-bold text-red-600 mb-4">{t('sold')}</h5>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{t('propertySoldMessage')}</p>
                      <div className="mt-6">
                        <Link href="/contact" className="btn bg-transparent hover:bg-red-600 border border-red-600 text-red-600 hover:text-white rounded-md">
                          <FiPhone className="align-middle me-2"/> {t('contactUs')}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-2xl font-medium">{t('price')}:</h5>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-medium">{formatPrice(property.price)} Kč</span>
                        {property.discountedPrice && (
                          <span className="text-xl font-medium line-through text-red-500">{formatPrice(property.discountedPrice)} Kč</span>
                        )}
                        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                          {formatValue(property.category)}
                        </span>
                      </div>

                      <ul className="list-none mt-4">
                        <li className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm">{t('pricePerM2')}</span>
                          <span className="font-medium text-sm">{formatPrice(Math.round(property.price / property.size))} Kč</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-1">
                      <a 
                        href="tel:+420733781696" 
                        className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full flex items-center justify-center"
                      >
                        <FiPhone className="align-middle me-2"/> {t('bookNow')}
                      </a>
                    </div>
                  </div>
                )}

                {/* Files Section in Sidebar */}
                {property.files && property.files.length > 0 && (
                  <div className="mt-6 rounded-md bg-slate-50 dark:bg-slate-800 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-xl font-medium mb-4">{t('files')}</h5>
                      <div className="space-y-3">
                        {property.files.map((file) => (
                          <div 
                            key={file.id} 
                            className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-3 min-w-0">
                              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-md flex-shrink-0">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <h6 className="font-medium text-sm truncate">{file.name}</h6>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  {file.type} • {(file.size / 1024).toFixed(1)} KB
                                </p>
                              </div>
                            </div>
                            <a 
                              href={file.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-500 transition-colors duration-200 flex-shrink-0"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Tour Section in Sidebar */}
                {property.videoUrl && (
                  <div className="mt-6 rounded-md bg-slate-50 dark:bg-slate-800 shadow-sm shadow-gray-200 dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-xl font-medium mb-4">{t('videoTour')}</h5>
                      <div className="aspect-w-16 aspect-h-9">
                        {(() => {
                          let embedUrl = property.videoUrl;
                          if (property.videoUrl.includes('youtube.com/watch')) {
                            const videoId = property.videoUrl.split('v=')[1];
                            embedUrl = `https://www.youtube.com/embed/${videoId}`;
                          } else if (property.videoUrl.includes('youtu.be/')) {
                            const videoId = property.videoUrl.split('youtu.be/')[1];
                            embedUrl = `https://www.youtube.com/embed/${videoId}`;
                          }
                          return (
                            <iframe
                              src={embedUrl}
                              title="Property Video Tour"
                              className="w-full h-full rounded-md"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-12 text-center">
                  <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">{t('haveQuestion')}</h3>

                  <div className="mt-6">
                    <Link href="/contact" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md">
                      <FiPhone className="align-middle me-2"/> {t('contactUs')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <Switcher/>
    </>
  )
} 
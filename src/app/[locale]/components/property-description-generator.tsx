'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiCopy, FiCheck, FiFileText } from 'react-icons/fi';

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

interface PropertyDescriptionGeneratorProps {
  landmarks: { [key: string]: Landmark[] };
  address: string;
}

const PropertyDescriptionGenerator: React.FC<PropertyDescriptionGeneratorProps> = ({ landmarks, address }) => {
  const [generatedDescription, setGeneratedDescription] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = useTranslations('neighborhoodExplorer.propertyDescription');

  const generateDescription = () => {
    setIsGenerating(true);
    
    // Simulate generation time
    setTimeout(() => {
      const description = createPropertyDescription(landmarks, address);
      setGeneratedDescription(description);
      setIsGenerating(false);
    }, 1000);
  };

  const createPropertyDescription = (landmarks: { [key: string]: Landmark[] }, address: string): string => {
    const allLandmarks = Object.values(landmarks).flat();
    
    if (allLandmarks.length === 0) {
      return '';
    }

    // Group landmarks by type for better organization
    const transportLandmarks = [
      ...(landmarks['metro'] || []),
      ...(landmarks['tram'] || []),
      ...(landmarks['bus'] || []),
      ...(landmarks['vlak'] || [])
    ].sort((a, b) => a.distance - b.distance);

    const shoppingLandmarks = [
      ...(landmarks['obchod'] || []),
      ...(landmarks['vecerka'] || [])
    ].sort((a, b) => a.distance - b.distance);

    const educationLandmarks = [
      ...(landmarks['skola'] || []),
      ...(landmarks['skolka'] || [])
    ].sort((a, b) => a.distance - b.distance);

    const healthcareLandmarks = [
      ...(landmarks['lekarna'] || []),
      ...(landmarks['lekar'] || [])
    ].sort((a, b) => a.distance - b.distance);

    const entertainmentLandmarks = [
      ...(landmarks['restaurace'] || []),
      ...(landmarks['cukrarna'] || []),
      ...(landmarks['kino'] || []),
      ...(landmarks['divadlo'] || []),
      ...(landmarks['hospoda'] || [])
    ].sort((a, b) => a.distance - b.distance);

    const otherLandmarks = [
      ...(landmarks['posta'] || []),
      ...(landmarks['bankomat'] || []),
      ...(landmarks['sportoviste'] || []),
      ...(landmarks['hriste'] || []),
      ...(landmarks['prirodni'] || []),
      ...(landmarks['veterinar'] || [])
    ].sort((a, b) => a.distance - b.distance);

    let description = `Jedná se o rezidenční bydlení s velmi příjemnou lokalitou v srdci ${address}. `;

    // Add transportation information
    if (transportLandmarks.length > 0) {
      const closestTransport = transportLandmarks[0];
      const transportType = getTransportType(closestTransport.type);
      const distanceInMeters = Math.round(closestTransport.distance * 1000);
      
      description += `Skvělou dopravní dostupnost zajišťuje ${transportType} ${closestTransport.name} (${distanceInMeters} m)`;
      
      if (transportLandmarks.length > 1) {
        const secondTransport = transportLandmarks[1];
        const secondTransportType = getTransportType(secondTransport.type);
        const secondDistanceInMeters = Math.round(secondTransport.distance * 1000);
        description += ` nebo ${secondTransportType} ${secondTransport.name} (${secondDistanceInMeters} m)`;
      }
      description += '. ';
    }

    // Add amenities information with distances
    const amenitiesWithDistances: string[] = [];

    if (educationLandmarks.length > 0) {
      const closestSchool = educationLandmarks[0];
      const distanceInMeters = Math.round(closestSchool.distance * 1000);
      amenitiesWithDistances.push(`školy, školky (nejbližší ${closestSchool.name} - ${distanceInMeters} m)`);
    }

    if (healthcareLandmarks.length > 0) {
      const closestPharmacy = healthcareLandmarks[0];
      const distanceInMeters = Math.round(closestPharmacy.distance * 1000);
      amenitiesWithDistances.push(`lékárny (nejbližší ${closestPharmacy.name} - ${distanceInMeters} m)`);
    }

    if (shoppingLandmarks.length > 0) {
      const shoppingDetails = shoppingLandmarks.slice(0, 3).map(l => {
        const distanceInMeters = Math.round(l.distance * 1000);
        return `${l.name} (${distanceInMeters} m)`;
      });
      amenitiesWithDistances.push(`obchody (${shoppingDetails.join(', ')})`);
    }

    if (entertainmentLandmarks.length > 0) {
      const entertainmentDetails = entertainmentLandmarks.slice(0, 3).map(l => {
        const distanceInMeters = Math.round(l.distance * 1000);
        return `${l.name} (${distanceInMeters} m)`;
      });
      amenitiesWithDistances.push(...entertainmentDetails);
    }

    if (otherLandmarks.length > 0) {
      const otherDetails = otherLandmarks.slice(0, 3).map(l => {
        const distanceInMeters = Math.round(l.distance * 1000);
        return `${l.name} (${distanceInMeters} m)`;
      });
      amenitiesWithDistances.push(...otherDetails);
    }

    if (amenitiesWithDistances.length > 0) {
      description += `V okolí najdete veškerou občanskou vybavenost, jako jsou ${amenitiesWithDistances.join(', ')}`;
      description += '. ';
    }

    // Add relaxation/sports information with distances
    const relaxationLandmarks = [
      ...(landmarks['prirodni'] || []),
      ...(landmarks['sportoviste'] || []),
      ...(landmarks['hriste'] || [])
    ].sort((a, b) => a.distance - b.distance);

    if (relaxationLandmarks.length > 0) {
      const closestRelaxation = relaxationLandmarks[0];
      const distanceInMeters = Math.round(closestRelaxation.distance * 1000);
      description += `K relaxaci a sportu láká ${closestRelaxation.name} (${distanceInMeters} m)`;
      if (relaxationLandmarks.length > 1) {
        const secondRelaxation = relaxationLandmarks[1];
        const secondDistanceInMeters = Math.round(secondRelaxation.distance * 1000);
        description += ` a ${secondRelaxation.name} (${secondDistanceInMeters} m)`;
      }
      description += '.';
    }

    return description;
  };

  const getTransportType = (type: string): string => {
    switch (type) {
      case 'metro': return 'stanice metra';
      case 'tram': return 'tramvajová zastávka';
      case 'bus': return 'autobusová zastávka';
      case 'vlak': return 'vlakové nádraží';
      default: return 'zastávka';
    }
  };

  const getEntertainmentType = (type: string): string => {
    switch (type) {
      case 'restaurace': return 'restaurace';
      case 'cukrarna': return 'cukrárny';
      case 'kino': return 'kino';
      case 'divadlo': return 'divadlo';
      case 'hospoda': return 'hospody';
      default: return '';
    }
  };

  const getOtherType = (type: string): string => {
    switch (type) {
      case 'posta': return 'pošta';
      case 'bankomat': return 'bankomaty';
      case 'sportoviste': return 'fitness centra';
      case 'hriste': return 'dětské hřiště';
      case 'prirodni': return 'parky';
      case 'veterinar': return 'veterinární klinika';
      default: return '';
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedDescription);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const hasLandmarks = Object.values(landmarks).flat().length > 0;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <FiFileText className="h-6 w-6 text-green-600 mr-3" />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {t('title')}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {t('description')}
      </p>

      {!hasLandmarks ? (
        <div className="text-center py-8">
          <FiFileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">
            {t('noLandmarks')}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <button
            onClick={generateDescription}
            disabled={isGenerating}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {t('generating')}
              </>
            ) : (
              t('generateButton')
            )}
          </button>

          {generatedDescription && (
            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Vygenerovaný popis:
                </h4>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <FiCheck className="h-4 w-4" />
                      <span className="text-sm">{t('copied')}</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="h-4 w-4" />
                      <span className="text-sm">{t('copyButton')}</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {generatedDescription}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyDescriptionGenerator; 
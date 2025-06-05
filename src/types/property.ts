export interface PropertyImage {
    id: number;
    url: string;
    is_featured: boolean;
}

export interface PropertyFloorplan {
    id: number;
    url: string;
    name: string;
}

export interface PropertyCategory {
    id: number;
    name: string;
    slug: string;
    image: string;
}

export interface Property {
    // Basic Information
    id: number;
    name: string;
    description: string;
    price: number;
    discountedPrice?: number;
    size: number;
    beds: number;
    baths: number;
    
    // Location
    city: string;
    street: string;
    country: string;
    latitude: number;
    longitude: number;
    
    // Category and Status
    category: PropertyCategory;
    status: string;
    ownershipType: string;
    
    // Building Details
    buildingStoriesNumber: number;
    buildingCondition: string;
    apartmentCondition: string;
    aboveGroundFloors: number;
    totalAboveGroundFloors: number;
    totalUndergroundFloors: number;
    reconstructionYearApartment: number;
    reconstructionYearBuilding: number;
    
    // Areas
    floorArea: number;
    builtUpArea: number;
    gardenHouseArea: number;
    terraceArea: number;
    totalLandArea: number;
    gardenArea: number;
    garageArea: number;
    balconyArea: number;
    pergolaArea: number;
    basementArea: number;
    workshopArea: number;
    totalObjectArea: number;
    usableArea: number;
    landArea: number;
    
    // Additional Details
    objectType: string;
    objectLocationType: string;
    houseEquipment: string;
    accessRoad: string;
    objectCondition: string;
    reservationPrice: number;
    equipmentDescription: string;
    additionalSources: string;
    buildingPermit: string;
    buildability: string;
    utilitiesOnLand: string;
    utilitiesOnAdjacentRoad: string;
    payments: string;
    
    // Agent Information
    brokerId: number;
    secondaryAgent: string;
    
    // Media
    virtualTour?: string;
    videoUrl?: string;
    layout?: string;
    images: PropertyImage[];
    floorplans: PropertyFloorplan[];
    
    // Timestamps
    createdAt: string;
    updatedAt: string;
}

export interface Pagination {
    total: number;
    pages: number;
    currentPage: number;
    limit: number;
}

export interface PaginatedResponse {
    properties: Property[];
    pagination: Pagination;
} 
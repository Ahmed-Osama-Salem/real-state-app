export const properties = [
  {
    Title: "Luxury Villa - Sea Breeze",
    Location: "North Coast, Egypt",
    unitStatus: "Available",
    DeliveryIn: 2025,
    DeveloperLogo: "https://example.com/logo1.jpg",
    sliderImages: {
      Slider1: "https://example.com/slider1-1.jpg",
      Slider2: "https://example.com/slider1-2.jpg",
      Slider3: "https://example.com/slider1-3.jpg",
    },
    investmentStatus: "Premium Investment",
    Attributes: {
      Bedrooms: 5,
      Bathrooms: 4,
      Space: 350,
    },
    Price: {
      TotalPrice: 12000000,
      monthlyInstallment: 150000,
      yearsOfInstallment: 5,
    },
    AgentWhatsappNumber: "+201234567890",
    AgentCallNumber: "+201234567890",
    AgentEmail: "agent1@example.com",
  },
  {
    Title: "Penthouse - Skyline Views",
    Location: "Cairo, Egypt",
    unitStatus: "Under Construction",
    DeliveryIn: 2026,
    DeveloperLogo: "https://example.com/logo2.jpg",
    sliderImages: {
      Slider1: "https://example.com/slider2-1.jpg",
      Slider2: "https://example.com/slider2-2.jpg",
      Slider3: "https://example.com/slider2-3.jpg",
    },
    investmentStatus: "Moderate Investment",
    Attributes: {
      Bedrooms: 4,
      Bathrooms: 3,
      Space: 200,
    },
    Price: {
      TotalPrice: 8500000,
      monthlyInstallment: 100000,
      yearsOfInstallment: 6,
    },
    AgentWhatsappNumber: "+201245678901",
    AgentCallNumber: "+201245678901",
    AgentEmail: "agent2@example.com",
  },
  {
    Title: "Beachfront Chalet - Coral Bay",
    Location: "Hurghada, Egypt",
    unitStatus: "Being Sold",
    DeliveryIn: 2024,
    DeveloperLogo: "https://example.com/logo3.jpg",
    sliderImages: {
      Slider1: "https://example.com/slider3-1.jpg",
      Slider2: "https://example.com/slider3-2.jpg",
      Slider3: "https://example.com/slider3-3.jpg",
    },
    investmentStatus: "High Demand",
    Attributes: {
      Bedrooms: 3,
      Bathrooms: 2,
      Space: 150,
    },
    Price: {
      TotalPrice: 6500000,
      monthlyInstallment: 75000,
      yearsOfInstallment: 4,
    },
    AgentWhatsappNumber: "+201256789012",
    AgentCallNumber: "+201256789012",
    AgentEmail: "agent3@example.com",
  },
  {
    Title: "Townhouse - Palm Hills",
    Location: "Sheikh Zayed, Egypt",
    unitStatus: "Available",
    DeliveryIn: 2023,
    DeveloperLogo: "https://example.com/logo4.jpg",
    sliderImages: {
      Slider1: "https://example.com/slider4-1.jpg",
      Slider2: "https://example.com/slider4-2.jpg",
      Slider3: "https://example.com/slider4-3.jpg",
    },
    investmentStatus: "Solid Investment",
    Attributes: {
      Bedrooms: 4,
      Bathrooms: 3,
      Space: 280,
    },
    Price: {
      TotalPrice: 9500000,
      monthlyInstallment: 120000,
      yearsOfInstallment: 5,
    },
    AgentWhatsappNumber: "+201267890123",
    AgentCallNumber: "+201267890123",
    AgentEmail: "agent4@example.com",
  },
  {
    Title: "Apartment - Downtown Oasis",
    Location: "New Cairo, Egypt",
    unitStatus: "Sold Out",
    DeliveryIn: 2026,
    DeveloperLogo: "https://example.com/logo5.jpg",
    sliderImages: {
      Slider1: "https://example.com/slider5-1.jpg",
      Slider2: "https://example.com/slider5-2.jpg",
      Slider3: "https://example.com/slider5-3.jpg",
    },
    investmentStatus: "Stable",
    Attributes: {
      Bedrooms: 3,
      Bathrooms: 2,
      Space: 180,
    },
    Price: {
      TotalPrice: 7500000,
      monthlyInstallment: 95000,
      yearsOfInstallment: 6,
    },
    AgentWhatsappNumber: "+201278901234",
    AgentCallNumber: "+201278901234",
    AgentEmail: "agent5@example.com",
  },
  {
    Title: "Mountain View Villa - Sky Ridge",
    Location: "Ain Sokhna, Egypt",
    unitStatus: "Available",
    DeliveryIn: 2027,
    DeveloperLogo: "https://example.com/logo6.jpg",
    sliderImages: {
      Slider1: "https://example.com/slider6-1.jpg",
      Slider2: "https://example.com/slider6-2.jpg",
      Slider3: "https://example.com/slider6-3.jpg",
    },
    investmentStatus: "Great Investment",
    Attributes: {
      Bedrooms: 6,
      Bathrooms: 5,
      Space: 500,
    },
    Price: {
      TotalPrice: 20000000,
      monthlyInstallment: 250000,
      yearsOfInstallment: 8,
    },
    AgentWhatsappNumber: "+201289012345",
    AgentCallNumber: "+201289012345",
    AgentEmail: "agent6@example.com",
  },
];

export interface Property {
  Title: string;
  Location: string;
  unitStatus: string;
  DeliveryIn: number;
  DeveloperLogo: string;
  sliderImages: {
    Slider1: string;
    Slider2: string;
    Slider3: string;
  };
  investmentStatus: string;
  Attributes: {
    Bedrooms: number;
    Bathrooms: number;
    Space: number;
  };
  Price: {
    TotalPrice: number;
    monthlyInstallment: number;
    yearsOfInstallment: number;
  };
  AgentWhatsappNumber: string;
  AgentCallNumber: string;
  AgentEmail: string;
}

export type Properties = Property[];

import React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  priceRange: string;
  image: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  stars: number;
  text: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: string;
  label: string;
}

export interface NavItem {
  label: string;
  path: string;
}
import { Hammer, Layers, Grid3X3, Grid2X2 } from 'lucide-react';
import { Service, Testimonial, GalleryItem, NavItem } from './types';

// Updated to the direct image link from the provided Imgur ID (JRctfKJ)
export const LOGO_URL = "https://i.imgur.com/JRctfKJ.png";

export const PHONE_NUMBER = "(910) 890-4787";
export const EMAIL_ADDRESS = "quotes@bigtonysflooring.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Tony', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'hardwood',
    title: 'Hardwood Installation',
    shortDesc: 'Classic, durable, and timeless real wood floors.',
    fullDesc: 'Nothing beats the warmth and value of real hardwood. Whether it’s solid oak, maple, or walnut, Big Tony installs it with precision, ensuring proper acclimation and a finish that lasts generations.',
    benefits: ['Increases home value', 'Can be refinished', 'Timeless aesthetic'],
    priceRange: '$$-$$$',
    image: 'https://picsum.photos/id/102/800/600',
    icon: Hammer,
  },
  {
    id: 'lvp',
    title: 'LVP (Luxury Vinyl Plank)',
    shortDesc: 'Waterproof wood-look planks. Tough as nails.',
    fullDesc: 'Luxury Vinyl Plank is the king of durability. Perfect for basements, kitchens, and homes with pets. It looks like wood but handles water like a champ. We get these clicked and locked tight.',
    benefits: ['100% Waterproof', 'Scratch Resistant', 'Quick Installation'],
    priceRange: '$-$$',
    image: 'https://picsum.photos/id/103/800/600',
    icon: Layers,
  },
  {
    id: 'lvt',
    title: 'LVT (Luxury Vinyl Tile)',
    shortDesc: 'Stone-look durability without the cold feel.',
    fullDesc: 'Get the high-end look of stone or ceramic with the warmth and resilience of vinyl. Luxury Vinyl Tile is perfect for bathrooms, laundry rooms, and kitchens.',
    benefits: ['Softer underfoot', 'Water resistant', 'Modern designs'],
    priceRange: '$-$$',
    image: 'https://picsum.photos/id/449/800/600',
    icon: Grid2X2,
  },
  {
    id: 'tile',
    title: 'Tile Flooring',
    shortDesc: 'Ceramic, porcelain, or stone for high-traffic areas.',
    fullDesc: 'From intricate mosaics to large-format porcelain. We handle the mud-setting, grouting, and sealing so you don’t have to worry about cracks or uneven lines.',
    benefits: ['Extremely Durable', 'Water Resistant', 'Cool in Summer'],
    priceRange: '$$-$$$',
    image: 'https://picsum.photos/id/104/800/600',
    icon: Grid3X3,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Wilmington',
    stars: 5,
    text: "Tony didn't try to upsell me. He looked at my subfloor, told me exactly what needed to be done, and the LVP looks incredible. Honest guy.",
  },
  {
    id: '2',
    name: 'Mike Kowalski',
    location: 'Wrightsville Beach',
    stars: 5,
    text: "Fast. That's the best word. Crew showed up at 7AM sharp, ripped out the old floor, and had the new hardwood down by dinner. Zero mess left behind.",
  },
  {
    id: '3',
    name: 'Brenda T.',
    location: 'Leland',
    stars: 5,
    text: "I was worried about the cost, but Big Tony gave me a quote that beat the big box stores, and the quality is way better. Highly recommend!",
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', category: 'Kitchen', label: 'Modern Oak Kitchen', image: 'https://picsum.photos/id/1080/600/600' },
  { id: '2', category: 'Living Room', label: 'Herringbone LVP', image: 'https://picsum.photos/id/129/600/600' },
  { id: '3', category: 'Commercial', label: 'Office LVT', image: 'https://picsum.photos/id/20/600/600' },
  { id: '4', category: 'Stairs', label: 'Hardwood Stair Runner', image: 'https://picsum.photos/id/24/600/600' },
  { id: '5', category: 'Before & After', label: 'Basement Transformation', image: 'https://picsum.photos/id/60/600/600' },
  { id: '6', category: 'Tile', label: 'Bathroom Marble', image: 'https://picsum.photos/id/48/600/600' },
];
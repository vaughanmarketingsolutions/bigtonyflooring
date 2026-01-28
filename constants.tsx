import { Hammer, Layers, Grid3X3, Grid2X2 } from 'lucide-react';
import { Service, Testimonial, GalleryItem, NavItem } from './types';

export const BRAND_NAME = "421Floors";
export const LOGO_URL = "https://i.imgur.com/3EYFKM6.png";

export const PHONE_NUMBER = "(910) 890-4787";
export const EMAIL_ADDRESS = "quotes@anthonygori.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/wilmington-flooring-services' },
  { label: 'Gallery', path: '/flooring-installation-gallery' },
  { label: 'About Us', path: '/about-421floors-wilmington' },
  { label: 'Contact', path: '/contact-for-free-flooring-estimate' },
];

export const SERVICES: Service[] = [
  {
    id: 'hardwood',
    title: 'Hardwood Installation',
    shortDesc: 'Classic, durable, and timeless real wood floors.',
    fullDesc: 'Nothing beats the warmth and value of real hardwood. Whether it’s solid oak, maple, or walnut, 421Floors installs it with precision, ensuring proper acclimation and a finish that lasts generations.',
    benefits: ['Increases home value', 'Can be refinished', 'Timeless aesthetic'],
    priceRange: '$$-$$$',
    image: 'https://i.imgur.com/CkoeAfW.png',
    icon: Hammer,
  },
  {
    id: 'lvp',
    title: 'LVP (Luxury Vinyl Plank)',
    shortDesc: 'Waterproof wood-look planks. Tough as nails.',
    fullDesc: 'Luxury Vinyl Plank is the king of durability. Perfect for basements, kitchens, and homes with pets. It looks like wood but handles water like a champ. We get these clicked and locked tight.',
    benefits: ['100% Waterproof', 'Scratch Resistant', 'Quick Installation'],
    priceRange: '$-$$',
    image: 'https://i.imgur.com/s5VQyVZ.png',
    icon: Layers,
  },
  {
    id: 'lvt',
    title: 'LVT (Luxury Vinyl Tile)',
    shortDesc: 'Stone-look durability without the cold feel.',
    fullDesc: 'Get the high-end look of stone or ceramic with the warmth and resilience of vinyl. Luxury Vinyl Tile is perfect for bathrooms, laundry rooms, and kitchens.',
    benefits: ['Softer underfoot', 'Water resistant', 'Modern designs'],
    priceRange: '$-$$',
    image: 'https://i.imgur.com/FBrj4cC.png',
    icon: Grid2X2,
  },
  {
    id: 'tile',
    title: 'Tile Flooring',
    shortDesc: 'Ceramic, porcelain, or stone for high-traffic areas.',
    fullDesc: 'From intricate mosaics to large-format porcelain. We handle the mud-setting, grouting, and sealing so you don’t have to worry about cracks or uneven lines.',
    benefits: ['Extremely Durable', 'Water Resistant', 'Cool in Summer'],
    priceRange: '$$-$$$',
    image: 'https://i.imgur.com/KNwI7BL.png',
    icon: Grid3X3,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Desiree Nuissl Jaeger',
    location: 'Facebook Review',
    stars: 5,
    text: "Tony does an excellent job! I highly recommend him for your flooring installation!",
  },
  {
    id: '2',
    name: 'Sean',
    location: 'Facebook Review',
    stars: 5,
    text: "Tony is Guaranteed to take care of you! Great Customer Support and he doesn't give up on helping you achieve what you want in your home, 10/10 👍",
  },
  {
    id: '3',
    name: 'Brad Schwartz',
    location: 'Facebook Review',
    stars: 5,
    text: "Tony and Chris are true perfectionists. The job they did for me was 100% professional and quality. Tony is a great guy and will go beyond the extra mile...",
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/f8DH0vR.png' },
  { id: '2', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/4EcLvZp.png' },
  { id: '3', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/9aI0tcm.png' },
  { id: '4', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/xfimx40.png' },
  { id: '5', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/A7eqt5I.png' },
  { id: '6', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/zfT0jnu.png' },
  { id: '7', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/iQzZzhN.png' },
  { id: '8', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/5jMdpKu.png' },
  { id: '9', category: 'Project', label: 'Recent Installation', image: 'https://i.imgur.com/FSuLGQi.png' },
];
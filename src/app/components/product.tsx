// components/products.ts

import photo1 from '../../../public/photos/1.jpeg';
import photo2 from '../../../public/photos/2.jpg';
import photo3 from '../../../public/photos/3.jpeg';
import photo4 from '../../../public/photos/4.jpeg';
import photo5 from '../../../public/photos/5.jpeg';
import photo6 from '../../../public/photos/6.jpeg';
import photo7 from '../../../public/photos/7.jpeg';
import photo8 from '../../../public/photos/8.jpeg';
import photo9 from '../../../public/photos/9.jpeg';
import photo10 from '../../../public/photos/10.jpg';
import { StaticImageData } from 'next/image';

export type Product = {
    category: string;   
    id: string;
    name: string;
    description: string;
    price: number;
    src: StaticImageData;
};

export const products: Product[] = [
    {
        id: "1",
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with a sleek design and adjustable DPI.",
        price: 25.99,
        src: photo1,
        category: 'Accessories'
    },
    {
        id: "2",
        name: "Bluetooth Headphones",
        description: "Noise-canceling Bluetooth headphones with up to 20 hours of battery life.",
        price: 89.99,
        src: photo2,
        category: 'Electronics'
    },
    {
        id: "3",
        name: "Laptop Stand",
        description: "Adjustable laptop stand with a built-in cooling fan and ergonomic design.",
        price: 39.99,
        src: photo3,
        category: 'Accessories'
    },
    {
        id: "4",
        name: "4K Monitor",
        description: "27-inch 4K UHD monitor with high color accuracy and low blue light technology.",
        price: 299.99,
        src: photo4,
        category: 'Electronics'
    },
    {
        id: "5",
        name: "Keyboard and Mouse Combo",
        description: "Compact keyboard and mouse combo with quiet, responsive keys and ergonomic design.",
        price: 45.99,
        src: photo5,
        category: 'Accessories'
    },
    {
        id: "6",
        name: "USB-C Hub",
        description: "Multi-port USB-C hub with HDMI, USB-A, and SD card reader.",
        price: 29.99,
        src: photo6,
        category: 'Accessories'
    },
    {
        id: "7",
        name: "Portable SSD",
        description: "1TB portable SSD with fast data transfer speeds and rugged design.",
        price: 129.99,
        src: photo7,
        category: 'Accessories'
    },
    {
        id: "8",
        name: "Webcam",
        description: "1080p HD webcam with built-in microphone and auto-focus.",
        price: 59.99,
        src: photo8,
        category: 'Electronics'
    },
    {
        id: "9",
        name: "Ergonomic Chair",
        description: "Adjustable ergonomic chair with lumbar support and breathable mesh.",
        price: 199.99,
        src: photo9,
        category: 'Furniture'
    },
    {
        id: "10",
        name: "Gaming Keyboard",
        description: "Mechanical gaming keyboard with customizable RGB backlighting and programmable keys.",
        price: 79.99,
        src: photo10,
        category: 'Accessories'
    },
];

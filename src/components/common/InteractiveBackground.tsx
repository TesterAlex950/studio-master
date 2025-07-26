'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { 
  AreaChart, 
  GitCompareArrows, 
  Goal, 
  MousePointerClick, 
  ThumbsUp, 
  Wallet,
  Target,
  DollarSign,
  TrendingUp,
  Users,
  BarChart,
  Megaphone,
  Lightbulb,
  BadgeDollarSign,
  Briefcase,
  Calculator,
  Calendar,
  ClipboardList,
  Compass,
  CreditCard,
  Database,
  Filter,
  Globe,
  Key,
  Laptop,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Newspaper,
  PenTool,
  Percent,
  Phone,
  PieChart,
  Presentation,
  Rocket,
  Search,
  Settings,
  Share2,
  ShoppingBag,
  Signal,
  Smartphone,
  Speaker,
  Star,
  Tags,
  Trophy,
  Video,
  WalletCards,
  Rss,
  Shield
} from "lucide-react";

const ICON_SIZE = 28;
const LIGHT_RADIUS = 75; 
const CELL_SIZE = 45; // Controls density

interface IconData {
  id: number;
  Component: React.ElementType;
  x: number;
  y: number;
  rotation: number;
}

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [iconsData, setIconsData] = useState<IconData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize icons array to prevent recreation on every render
  const icons = useMemo(() => [
    MousePointerClick,
    ThumbsUp,
    AreaChart,
    Goal,
    GitCompareArrows,
    Wallet,
    Target,
    DollarSign,
    TrendingUp,
    Users,
    BarChart,
    Megaphone,
    Lightbulb,
    BadgeDollarSign,
    Briefcase,
    Calculator,
    Calendar,
    ClipboardList,
    Compass,
    CreditCard,
    Database,
    Filter,
    Globe,
    Key,
    Laptop,
    LineChart,
    Mail,
    MapPin,
    MessageCircle,
    Monitor,
    Newspaper,
    PenTool,
    Percent,
    Phone,
    PieChart,
    Presentation,
    Rocket,
    Search,
    Settings,
    Share2,
    ShoppingBag,
    Signal,
    Smartphone,
    Speaker,
    Star,
    Tags,
    Trophy,
    Video,
    WalletCards,
    Rss,
    Shield
  ], []);

  // Optimize mouse move handler with useCallback and throttling
  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Optimize icon generation with useCallback
  const generateIcons = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth: width, clientHeight: height } = containerRef.current;
    if (width === 0 || height === 0) return;

    const newIcons: IconData[] = [];
    const cols = Math.floor(width / CELL_SIZE);
    const rows = Math.floor(height / CELL_SIZE);
    
    let iconId = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const Component = icons[Math.floor(Math.random() * icons.length)];
          
          // Add random offset within the cell
          const x = j * CELL_SIZE + Math.random() * (CELL_SIZE - ICON_SIZE);
          const y = i * CELL_SIZE + Math.random() * (CELL_SIZE - ICON_SIZE);
          const rotation = Math.random() * 360;

          newIcons.push({ id: iconId++, Component, x, y, rotation });
      }
    }
    setIconsData(newIcons);
  }, [icons]);

  useEffect(() => {
    // Debounce resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(generateIcons, 100);
    };

    generateIcons();
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
        clearTimeout(resizeTimeout);
        window.removeEventListener('resize', handleResize);
    };
  }, [generateIcons]);

  // Memoize the mask style to prevent unnecessary re-renders
  const maskStyle = useMemo(() => ({
    maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black ${LIGHT_RADIUS}px, transparent ${LIGHT_RADIUS*2}px)`,
    WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black ${LIGHT_RADIUS}px, transparent ${LIGHT_RADIUS*2}px)`,
  }), [mousePos.x, mousePos.y]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-background"
      style={maskStyle}
    >
      {iconsData.map(({ id, Component, x, y, rotation }) => (
        <Component
          key={id}
          className="absolute text-muted-foreground/30"
          style={{
            left: x,
            top: y,
            width: ICON_SIZE,
            height: ICON_SIZE,
            transform: `rotate(${rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

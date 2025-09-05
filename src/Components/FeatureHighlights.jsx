import React, { useEffect, useState } from 'react';
import { Zap, DollarSign, Users, Star } from 'lucide-react';
import { features } from '../data/competitorsData';

const FeatureHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const icons = [Zap, DollarSign, Users, Star];
  const colors = [
    { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', glow: 'shadow-orange-200' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', glow: 'shadow-emerald-200' }, 
    { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', glow: 'shadow-blue-200' },
    { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600', glow: 'shadow-cyan-200' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-20 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"
          style={{ animation: 'drift 30s ease-in-out infinite alternate' }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out]' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Agencies Choose CloserX
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Built exclusively for agencies who demand{' '}
            <span className="font-semibold text-slate-800 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              professional results
            </span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = icons[index];
            const colorScheme = colors[index];
            
            return (
              <div 
                key={index} 
                className={`closerx-card p-10 text-center group relative overflow-hidden transition-all duration-700 ${isVisible ? `animate-[slideInUp_0.8s_ease-out_${(index + 1) * 0.1}s_both]` : 'opacity-0'}`}
              >
                {/* Card Background Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(45deg, ${colorScheme.bg}40, transparent)`,
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                />

                {/* Icon Container */}
                <div className={`relative w-20 h-20 ${colorScheme.bg} ${colorScheme.border} rounded-3xl flex items-center justify-center mx-auto mb-8 border-2 group-hover:scale-110 transition-transform duration-300 shadow-lg ${colorScheme.glow}`}>
                  <IconComponent 
                    className={`w-10 h-10 ${colorScheme.text}`}
                    style={{ animation: `iconPulse 3s ease-in-out infinite ${index * 0.5}s` }}
                  />
                  {/* Icon Glow Effect */}
                  <div 
                    className={`absolute inset-0 rounded-3xl ${colorScheme.bg} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
                    style={{ animation: 'glowPulse 2s ease-in-out infinite' }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors duration-300">
                  {feature.category}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Shimmer Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                  style={{ animation: 'shimmerMove 3s ease-in-out infinite' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;
import React, { useEffect, useState } from 'react';
import { CheckCircle, Zap, TrendingUp, Users, Clock } from 'lucide-react';

const ComparisonHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative overflow-hidden mb-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 closerx-gradient-animated"
          style={{ animation: 'gridMove 25s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full"
          style={{ animation: 'particleFloat 10s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-400 rounded-full"
          style={{ animation: 'orbFloat 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-orange-400 rounded-full"
          style={{ animation: 'caseStudyParticleDrift 12s ease-in-out infinite' }}
        />
      </div>

      <div className="relative text-center">
        {/* CloserX Logo/Brand Section */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'animate-[headerFadeIn_1.2s_ease-out]' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-6 mb-8">
            <div className="relative closerx-glow-effect closerx-sparkle">
              <div className="w-20 h-20 closerx-gradient rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Zap className="w-11 h-11 text-white" style={{ animation: 'iconPulse 3s ease-in-out infinite' }} />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold closerx-shimmer-text mb-2">CloserX</h1>
              <p className="text-slate-600 text-xl font-semibold">The #1 AI Calling Platform for Agencies</p>
            </div>
          </div>
        </div>

        {/* Animated Badge */}
        <div className={`inline-flex items-center relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-cyan-50 text-blue-800 px-10 py-5 rounded-full text-base font-bold mb-12 border-2 border-blue-200 shadow-xl transition-all duration-700 ${isLoaded ? 'animate-[fadeInDown_0.8s_ease-out_0.3s_both]' : 'opacity-0'}`}>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full transform -skew-x-12"
            style={{ animation: 'shimmerMove 4s ease-in-out infinite' }}
          />
          <CheckCircle className="w-6 h-6 mr-3 text-blue-600 animate-[checkPulse_2s_ease-in-out_infinite]" />
          <span className="relative z-10">Ultimate Platform Comparison Study</span>
        </div>

        {/* Main Heading with Animation */}
        <h2 className={`text-6xl lg:text-8xl font-bold text-slate-900 mb-10 leading-tight transition-all duration-1000 ${isLoaded ? 'animate-[fadeInUp_1s_ease-out_0.5s_both]' : 'opacity-0'}`}>
          CloserX vs{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[textShimmer_4s_ease-in-out_infinite]">
            Competitors
          </span>
        </h2>

        {/* Enhanced Subheading */}
        <p className={`text-2xl text-slate-600 max-w-5xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ${isLoaded ? 'animate-[fadeInUp_1s_ease-out_0.7s_both]' : 'opacity-0'}`}>
          The most comprehensive analysis of AI calling platforms. Discover exactly why{' '}
          <span className="font-bold text-slate-800 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            5,000+ successful agencies
          </span>{' '}
          choose CloserX over 15+ other platforms.
        </p>

        {/* Animated Key Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'animate-[statsFadeIn_1s_ease-out_0.9s_both]' : 'opacity-0'}`}>
          <div className="closerx-metric-card group delay-100">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-orange-600 animate-[headerIconBounce_2s_ease-in-out_infinite]" />
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-2">8 min</div>
            <div className="text-slate-600 font-semibold">Setup Time</div>
            <div className="text-sm text-slate-500 mt-2">vs weeks with competitors</div>
          </div>

          <div className="closerx-metric-card group delay-200">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600 animate-[headerIconBounce_2s_ease-in-out_infinite_0.5s]" />
            </div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
            <div className="text-slate-600 font-semibold">Booking Rate</div>
            <div className="text-sm text-slate-500 mt-2">5x better than manual</div>
          </div>

          <div className="closerx-metric-card group delay-300">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600 animate-[headerIconBounce_2s_ease-in-out_infinite_1s]" />
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-slate-600 font-semibold">Uptime SLA</div>
            <div className="text-sm text-slate-500 mt-2">Enterprise reliability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonHeader;
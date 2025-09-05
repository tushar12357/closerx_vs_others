import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Zap, Users, CheckCircle, TrendingUp } from 'lucide-react';

const ComparisonCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleTrialClick = () => {
    console.log('Start Free Trial clicked');
    // Add your trial logic here
  };

  const handleDemoClick = () => {
    console.log('Schedule Demo clicked');
    // Add your demo logic here
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"
          style={{ animation: 'drift 45s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
          style={{ animation: 'float 38s ease-in-out infinite reverse' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full"
          style={{ animation: 'orbFloat 25s ease-in-out infinite' }}
        />
      </div>

      <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-[ctaFadeIn_1s_ease-out]' : 'opacity-0'}`}>
        <div className="closerx-gradient-animated p-1 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-[22px] p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80h-80z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  animation: 'gridDrift 30s linear infinite'
                }}
              />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              {/* Header */}
              <div className="mb-12">
                <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Ready to Join the{' '}
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[textShimmer_3s_ease-in-out_infinite]">
                    Winners?
                  </span>
                </h2>
                <p className="text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                  <span className="font-bold text-slate-800 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    5,000+ agencies
                  </span>{' '}
                  chose CloserX over the competition. Setup takes 8 minutes, results start immediately.
                </p>
              </div>

              {/* Animated Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 shadow-lg animate-[statsFadeIn_0.8s_ease-out_0.2s_both]">
                  <Zap className="w-8 h-8 text-blue-600 animate-[iconPulse_2s_ease-in-out_infinite]" />
                  <div className="text-left">
                    <div className="font-bold text-blue-900 text-2xl">8 minutes</div>
                    <div className="text-blue-600 font-semibold">to launch</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200 shadow-lg animate-[statsFadeIn_0.8s_ease-out_0.4s_both]">
                  <TrendingUp className="w-8 h-8 text-emerald-600 animate-[iconPulse_2s_ease-in-out_infinite_0.5s]" />
                  <div className="text-left">
                    <div className="font-bold text-emerald-900 text-2xl">25% booking</div>
                    <div className="text-emerald-600 font-semibold">rate average</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 shadow-lg animate-[statsFadeIn_0.8s_ease-out_0.6s_both]">
                  <Calendar className="w-8 h-8 text-orange-600 animate-[iconPulse_2s_ease-in-out_infinite_1s]" />
                  <div className="text-left">
                    <div className="font-bold text-orange-900 text-2xl">$10K+ saved</div>
                    <div className="text-orange-600 font-semibold">annually</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12 animate-[buttonFadeIn_0.8s_ease-out_0.8s_both]">
                <button 
                  onClick={handleTrialClick}
                  className="group closerx-button-primary relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ animation: 'ctaButtonGlow 3s ease-in-out infinite' }}
                >
                  <span className="relative z-10 flex items-center text-xl">
                    Start Free Trial
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform animate-[iconBounce_2s_ease-in-out_infinite]" />
                  </span>
                  
                  {/* Button Shimmer Effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ animation: 'shimmerMove 2s ease-in-out infinite' }}
                  />
                </button>

                <button 
                  onClick={handleDemoClick}
                  className="group closerx-button-secondary text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-slate-500 font-semibold animate-[noticeFadeIn_0.8s_ease-out_1s_both]">
                <div className="closerx-trust-indicator">
                  <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                  No credit card required
                </div>
                <div className="closerx-trust-indicator delay-200">
                  <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                  Setup in 8 minutes
                </div>
                <div className="closerx-trust-indicator delay-400">
                  <CheckCircle className="w-5 h-5 mr-3 text-emerald-600" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCTA;
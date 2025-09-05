import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertTriangle, Zap, Shield, Clock, Users, Star } from 'lucide-react';

const KeyAdvantages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const closerxAdvantages = [
    { text: "8-minute setup", highlight: "vs weeks/months with competitors", icon: Zap },
    { text: "15-25% booking rates", highlight: "vs 8-12% industry average", icon: CheckCircle },
    { text: "Complete white-label", highlight: "- clients never see our brand", icon: Shield },
    { text: "50+ proven templates", highlight: "vs build-your-own complexity", icon: Star },
    { text: "No technical skills", highlight: "required for full functionality", icon: Users }
  ];

  const competitorLimitations = [
    { text: "Developer platforms", highlight: "require weeks of coding work", icon: Clock },
    { text: "Enterprise solutions", highlight: "have $50K+ minimums", icon: AlertTriangle },
    { text: "Generic scripts", highlight: "lead to poor conversion rates", icon: AlertTriangle },
    { text: "Limited white-label", highlight: "exposes third-party dependence", icon: AlertTriangle },
    { text: "Self-service support", highlight: "leaves agencies struggling alone", icon: AlertTriangle }
  ];

  return (
    <div className="mb-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full"
          style={{ animation: 'drift 40s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
          style={{ animation: 'float 35s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out]' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why CloserX Dominates the Market
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Clear advantages that drive{' '}
            <span className="font-bold text-slate-800 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              real business results
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CloserX Advantages */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out_0.2s_both]' : 'opacity-0'}`}>
            <div className="closerx-card p-12 relative overflow-hidden">
              {/* Card Background Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-50"
                style={{ animation: 'shimmer 6s ease-in-out infinite' }}
              />

              {/* Header */}
              <div className="flex items-center mb-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg closerx-glow-effect">
                  <CheckCircle className="w-9 h-9 text-white animate-[iconPulse_3s_ease-in-out_infinite]" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">CloserX Advantages</h3>
              </div>

              {/* Advantages List */}
              <ul className="space-y-8 relative z-10">
                {closerxAdvantages.map((advantage, index) => (
                  <li 
                    key={index} 
                    className={`closerx-advantage-item delay-${(index + 1) * 100}`}
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-md">
                      <advantage.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-slate-900 font-bold text-xl">{advantage.text}</span>
                      <span className="text-slate-600 ml-3 text-lg">{advantage.highlight}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"
                style={{ animation: 'shimmerMove 4s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* Competitor Limitations */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out_0.4s_both]' : 'opacity-0'}`}>
            <div className="closerx-card p-12 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 border-red-100 relative overflow-hidden">
              {/* Card Background Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-red-100 to-rose-100 opacity-30"
                style={{ animation: 'shimmer 6s ease-in-out infinite reverse' }}
              />

              {/* Header */}
              <div className="flex items-center mb-10 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <AlertTriangle className="w-9 h-9 text-white animate-[iconPulse_3s_ease-in-out_infinite_0.5s]" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Competitor Limitations</h3>
              </div>

              {/* Limitations List */}
              <ul className="space-y-8 relative z-10">
                {competitorLimitations.map((limitation, index) => (
                  <li 
                    key={index} 
                    className={`closerx-limitation-item delay-${(index + 1) * 100}`}
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-md">
                      <limitation.icon className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <span className="text-slate-900 font-bold text-xl">{limitation.text}</span>
                      <span className="text-slate-600 ml-3 text-lg">{limitation.highlight}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyAdvantages;
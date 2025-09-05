import React, { useEffect, useState } from 'react';
import { TrendingDown, DollarSign, Zap, Calculator } from 'lucide-react';
import { costData } from '../data/competitorsData';

const CostComparison = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCounters, setAnimateCounters] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 200);
    const timer2 = setTimeout(() => setAnimateCounters(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="mb-20 relative">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
          style={{ animation: 'caseStudyDrift 35s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-56 h-56 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{ animation: 'float 28s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out]' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Real-World Cost Analysis
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Actual costs for <span className="font-bold text-slate-800">5 clients</span> with{' '}
            <span className="font-bold text-slate-800">5,000 minutes</span> per month
          </p>
        </div>

        {/* Cost Comparison Container */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-[fadeInUp_1s_ease-out_0.3s_both]' : 'opacity-0'}`}>
          <div className="closerx-gradient-animated p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-[22px] p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    animation: 'gridDrift 20s linear infinite'
                  }}
                />
              </div>

              <div className="relative grid md:grid-cols-3 gap-8">
                {/* CloserX Cost */}
                <div className={`text-center p-10 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl border-2 border-emerald-200 relative overflow-hidden shadow-lg transition-all duration-700 ${animateCounters ? 'animate-savings-counter' : 'opacity-0'}`}>
                  <div className="absolute top-6 right-6">
                    <Zap className="w-10 h-10 text-emerald-600 animate-[iconPulse_2s_ease-in-out_infinite]" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-emerald-700 mb-3">${costData.closerx.total}</div>
                    <div className="text-slate-900 font-bold text-xl mb-2">CloserX Total Cost</div>
                    <div className="text-emerald-700 font-semibold text-lg">{costData.closerx.breakdown}</div>
                  </div>
                  
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-bold shadow-sm">
                    <TrendingDown className="w-5 h-5 mr-2 animate-[iconBounce_2s_ease-in-out_infinite]" />
                    Best Value
                  </div>

                  {/* Shimmer Effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{ animation: 'greenShimmer 3s ease-in-out infinite' }}
                  />
                </div>

                {/* Competitor Cost */}
                <div className={`text-center p-10 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl border-2 border-red-200 relative overflow-hidden shadow-lg transition-all duration-700 ${animateCounters ? 'animate-savings-counter delay-200' : 'opacity-0'}`}>
                  <div className="absolute top-6 right-6">
                    <DollarSign className="w-10 h-10 text-red-600 animate-[iconPulse_2s_ease-in-out_infinite_0.5s]" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-red-700 mb-3">${costData.synthflow.total}</div>
                    <div className="text-slate-900 font-bold text-xl mb-2">Synthflow Total Cost</div>
                    <div className="text-red-700 font-semibold text-lg">{costData.synthflow.breakdown}</div>
                  </div>
                  
                  <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold shadow-sm">
                    160% More Expensive
                  </div>
                </div>

                {/* Savings */}
                <div className={`text-center p-10 closerx-gradient-animated rounded-3xl text-white relative overflow-hidden shadow-xl transition-all duration-700 ${animateCounters ? 'animate-savings-counter delay-400' : 'opacity-0'}`}>
                  <div className="absolute top-6 right-6">
                    <Calculator className="w-10 h-10 text-white opacity-80 animate-[iconPulse_2s_ease-in-out_infinite_1s]" />
                  </div>
                  
                  <div className="mb-6 relative z-10">
                    <div className="text-5xl font-bold mb-3">${costData.savings.monthly}</div>
                    <div className="font-bold text-xl mb-2">Monthly Savings</div>
                    <div className="text-blue-100 font-semibold text-lg">${costData.savings.annual.toLocaleString()} saved annually</div>
                  </div>
                  
                  <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm">
                    <TrendingDown className="w-5 h-5 mr-2" />
                    ROI: 1,800%+
                  </div>

                  {/* Animated Background */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                      animation: 'orbFloat 8s ease-in-out infinite'
                    }}
                  />
                </div>
              </div>

              {/* Bottom Summary */}
              <div className={`mt-16 text-center transition-all duration-1000 ${animateCounters ? 'animate-[fadeInUp_0.8s_ease-out_0.6s_both]' : 'opacity-0'}`}>
                <div className="inline-flex items-center bg-slate-100 text-slate-800 px-8 py-4 rounded-full font-bold text-lg shadow-lg">
                  <DollarSign className="w-6 h-6 mr-3 text-slate-600" />
                  CloserX saves agencies{' '}
                  <span className="mx-2 text-emerald-600 font-black">${costData.savings.annual.toLocaleString()}</span>
                  annually vs nearest competitor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
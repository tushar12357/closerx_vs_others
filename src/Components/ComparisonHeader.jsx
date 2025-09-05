import React from 'react';
import { CheckCircle, Zap, TrendingUp, Users, Clock } from 'lucide-react';

const ComparisonHeader = () => {
  return (
    <div className="relative overflow-hidden mb-20">
      {/* Background Effects (static, no animations) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-400 rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-orange-400 rounded-full" />
      </div>

      <div className="relative text-center">
        

        {/* Badge */}
        <div className="inline-flex items-center relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-cyan-50 text-blue-800 px-10 py-5 rounded-full text-base font-bold mb-12 border-2 border-blue-200 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full transform -skew-x-12" />
          <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
          <span className="relative z-10">Ultimate Platform Comparison Study</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-10 leading-tight">
          CloserX vs{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Competitors
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-2xl text-slate-600 max-w-5xl mx-auto mb-12 leading-relaxed">
          The most comprehensive analysis of AI calling platforms. Discover exactly why{' '}
          <span className="font-bold text-slate-800">
            5,000+ successful agencies
          </span>{' '}
          choose CloserX over 15+ other platforms.
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border bg-white shadow">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-4xl font-bold text-orange-600 mb-2">8 min</div>
            <div className="text-slate-600 font-semibold">Setup Time</div>
            <div className="text-sm text-slate-500 mt-2">vs weeks with competitors</div>
          </div>

          <div className="p-6 rounded-2xl border bg-white shadow">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
            <div className="text-slate-600 font-semibold">Booking Rate</div>
            <div className="text-sm text-slate-500 mt-2">5x better than manual</div>
          </div>

          <div className="p-6 rounded-2xl border bg-white shadow">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600" />
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
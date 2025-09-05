import React from 'react';
import { CheckCircle, Zap, TrendingUp, Users, Clock } from 'lucide-react';

const ComparisonHeader = () => {
  return (
    <div className="relative overflow-hidden mb-20 bg-[#483D8B]">
      {/* Background Effects (static, no animations) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-400 rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-orange-400 rounded-full" />
      </div>

      <div className="relative text-center">
        {/* CloserX Logo/Brand Section */}
        

        {/* Badge */}
        

        {/* Main Heading */}
        <h2 className="text-6xl lg:text-8xl font-bold text-white mb-10 leading-tight">
          CloserX vs{' '}
          <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Competitors
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-2xl text-white/80 max-w-5xl mx-auto mb-12 leading-relaxed">
          The most comprehensive analysis of AI calling platforms. Discover exactly why{' '}
          <span className="font-bold text-white">
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
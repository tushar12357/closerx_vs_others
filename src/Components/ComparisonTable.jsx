import React, { useEffect, useState } from 'react';
import { CheckCircle, Award, AlertTriangle, X, Shield, Zap } from 'lucide-react';
import { competitors } from '../data/competitorsData';

const ComparisonTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateRows, setAnimateRows] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 200);
    const timer2 = setTimeout(() => setAnimateRows(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const getWhiteLabelStatus = (whiteLabel) => {
    if (whiteLabel === 'Complete') 
      return { colorClass: 'closerx-status-success', icon: CheckCircle };
    if (whiteLabel === 'Limited') 
      return { colorClass: 'closerx-status-warning', icon: AlertTriangle };
    return { colorClass: 'closerx-status-danger', icon: X };
  };

  const getSkillLevel = (skill) => {
    if (skill === 'None') 
      return { colorClass: 'closerx-status-success', icon: CheckCircle };
    if (skill === 'Medium') 
      return { colorClass: 'closerx-status-warning', icon: AlertTriangle };
    return { colorClass: 'closerx-status-danger', icon: X };
  };

  const getUptimeStatus = (uptime) => {
    if (uptime === '99.9%') 
      return { colorClass: 'closerx-status-success', icon: Shield };
    if (uptime === '99.5%') 
      return { colorClass: 'closerx-status-warning', icon: AlertTriangle };
    return { colorClass: 'text-slate-600 bg-slate-50', icon: null };
  };

  return (
    <div className="mb-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{ animation: 'float 25s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          style={{ animation: 'orbFloat 20s ease-in-out infinite' }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-[slideInUp_0.8s_ease-out]' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Complete Platform Comparison
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how CloserX dominates across all{' '}
            <span className="font-semibold text-slate-800">critical metrics</span>
          </p>
        </div>

        {/* Table Container */}
        <div className={`closerx-card overflow-hidden border-2 border-slate-200 transition-all duration-1000 ${isVisible ? 'animate-comparison-reveal' : 'opacity-0'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Enhanced Table Header */}
              <thead className="relative">
                <tr className="animate-table-header-glow">
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[160px] text-lg">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-blue-600" />
                      Platform
                    </div>
                  </th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[140px] text-lg">Setup Time</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[150px] text-lg">Monthly Cost</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[140px] text-lg">White Label</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[160px] text-lg">Templates</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[120px] text-lg">Skill Level</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[140px] text-lg">Booking Rate</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[120px] text-lg">Uptime</th>
                  <th className="text-left p-8 font-bold text-slate-900 min-w-[140px] text-lg">Support</th>
                </tr>
              </thead>

              <tbody>
                {competitors.map((competitor, index) => {
                  const whiteLabelStatus = getWhiteLabelStatus(competitor.whiteLabel);
                  const skillStatus = getSkillLevel(competitor.skillRequired);
                  const uptimeStatus = getUptimeStatus(competitor.uptime);

                  return (
                    <tr 
                      key={index} 
                      className={`
                        closerx-table-row relative
                        ${competitor.isRecommended ? 'closerx-table-winner' : 'hover:bg-slate-50'}
                        ${animateRows ? `animate-competitor-slide delay-${index * 100}` : 'opacity-0'}
                      `}
                    >
                      {/* Platform Name */}
                      <td className="p-8">
                        <div className="flex items-center space-x-4">
                          <div className="font-bold text-slate-900 text-lg flex items-center">
                            {competitor.name}
                            {competitor.isRecommended && (
                              <div className="ml-4 inline-flex items-center">
                                <Award className="w-6 h-6 text-orange-600 animate-[headerIconBounce_2s_ease-in-out_infinite]" />
                                <span className="closerx-winner-badge ml-2">
                                  WINNER
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Setup Time */}
                      <td className="p-8">
                        <span className={`font-bold text-lg px-4 py-2 rounded-lg border ${
                          competitor.isRecommended 
                            ? 'closerx-status-success' 
                            : 'text-slate-600 bg-slate-50 border-slate-200'
                        }`}>
                          {competitor.setup}
                        </span>
                      </td>

                      {/* Monthly Cost */}
                      <td className="p-8">
                        <span className={`font-bold text-lg ${
                          competitor.isRecommended ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {competitor.cost}
                        </span>
                      </td>

                      {/* White Label */}
                      <td className="p-8">
                        <div className={`closerx-status-badge ${whiteLabelStatus.colorClass}`}>
                          <whiteLabelStatus.icon className="w-5 h-5 mr-2" />
                          <span className="font-semibold">{competitor.whiteLabel}</span>
                        </div>
                      </td>

                      {/* Templates */}
                      <td className="p-8">
                        <span className={`font-semibold text-lg ${
                          competitor.isRecommended ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {competitor.templates}
                        </span>
                      </td>

                      {/* Skill Level */}
                      <td className="p-8">
                        <div className={`closerx-status-badge ${skillStatus.colorClass}`}>
                          <skillStatus.icon className="w-5 h-5 mr-2" />
                          <span className="font-semibold">{competitor.skillRequired}</span>
                        </div>
                      </td>

                      {/* Booking Rate */}
                      <td className="p-8">
                        <span className={`font-bold text-xl ${
                          competitor.isRecommended ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {competitor.booking}
                        </span>
                      </td>

                      {/* Uptime */}
                      <td className="p-8">
                        <div className={`closerx-status-badge ${uptimeStatus.colorClass}`}>
                          {uptimeStatus.icon && <uptimeStatus.icon className="w-5 h-5 mr-2" />}
                          <span className="font-semibold">{competitor.uptime}</span>
                        </div>
                      </td>

                      {/* Support */}
                      <td className="p-8">
                        <span className="text-slate-600 font-medium text-lg">{competitor.support}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
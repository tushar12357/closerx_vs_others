import React from 'react';
import { CheckCircle, Award, AlertTriangle, X, Shield, Zap } from 'lucide-react';
import { competitors } from '../data/competitorsData';

const ComparisonTable = () => {
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
      {/* Background Effects removed animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 md:mb-4">
            Complete Platform Comparison
          </h2>
          <p className="text-xs md:text-base text-slate-600 max-w-3xl mx-auto">
            See how CloserX dominates across all{' '}
            <span className="font-semibold text-slate-800">critical metrics</span>
          </p>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4">
          {competitors.map((competitor, index) => {
            const whiteLabelStatus = getWhiteLabelStatus(competitor.whiteLabel);
            const skillStatus = getSkillLevel(competitor.skillRequired);
            const uptimeStatus = getUptimeStatus(competitor.uptime);

            return (
              <div
                key={index}
                className={`closerx-card p-4 ${competitor.isRecommended ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-slate-900 text-base">{competitor.name}</div>
                  {competitor.isRecommended && (
                    <div className="inline-flex items-center">
                      <Award className="w-4 h-4 text-orange-600" />
                      <span className="closerx-winner-badge ml-2">WINNER</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-slate-500">Setup Time</div>
                    <div className="mt-1">
                      <span className={`inline-flex items-center justify-center font-semibold text-xs h-8 px-3 rounded-full border whitespace-nowrap leading-none ${
                        competitor.isRecommended 
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                          : 'text-slate-700 bg-slate-100 border-slate-300'
                      }`}>
                        {competitor.setup}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Monthly Cost</div>
                    <div className="font-bold text-sm text-slate-700 mt-1 break-words">{competitor.cost}</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">White Label</div>
                    <div className={`closerx-status-badge mt-1 ${whiteLabelStatus.colorClass}`}>
                      <whiteLabelStatus.icon className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-xs">{competitor.whiteLabel}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Templates</div>
                    <div className="font-semibold text-sm mt-1 break-words">
                      {competitor.templates}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Skill Level</div>
                    <div className={`closerx-status-badge mt-1 ${skillStatus.colorClass}`}>
                      <skillStatus.icon className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-xs">{competitor.skillRequired}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Booking Rate</div>
                    <div className="font-bold text-sm mt-1">{competitor.booking}</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Uptime</div>
                    <div className={`closerx-status-badge mt-1 ${uptimeStatus.colorClass}`}>
                      {uptimeStatus.icon && <uptimeStatus.icon className="w-4 h-4 mr-2" />}
                      <span className="font-semibold text-xs">{competitor.uptime}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Support</div>
                    <div className="text-slate-600 font-medium text-sm mt-1 break-words">{competitor.support}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Table Layout */}
        <div className="closerx-card overflow-hidden border-2 border-slate-200 hidden md:block">
          <div className="w-full">
            <table className="w-full table-auto text-[11px] sm:text-xs md:text-sm">
              {/* Table Header */}
              <thead className="relative bg-white">
                <tr>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words align-bottom">
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-600" />
                      Platform
                    </div>
                  </th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Setup Time</th>
                                      <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Monthly Cost</th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">White Label</th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Templates</th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Skill Level</th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Booking Rate</th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Uptime</th>
                  <th className="text-left p-2 sm:p-3 md:p-4 font-bold text-slate-900 break-words">Support</th>
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
                        closerx-table-row relative whitespace-normal align-top
                        ${competitor.isRecommended ? 'closerx-table-winner' : 'hover:bg-slate-50'}
                      `}
                    >
                      {/* Platform Name */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                          <div className="font-bold text-slate-900 text-[12px] md:text-sm flex items-center break-words">
                            {competitor.name}
                            {competitor.isRecommended && (
                              <div className="ml-2 md:ml-3 inline-flex items-center">
                                <Award className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                                <span className="closerx-winner-badge ml-2 whitespace-nowrap">
                                  WINNER
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Setup Time */}
                      <td className="p-2 sm:p-3 md:p-4 align-middle">
                        <div className="inline-flex items-center">
                          <span className={`inline-flex items-center justify-center font-semibold text-xs sm:text-sm md:text-base h-8 md:h-9 px-3 md:px-4 rounded-full border whitespace-nowrap leading-none ${
                            competitor.isRecommended 
                              ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                              : 'text-slate-700 bg-slate-100 border-slate-300'
                          }`}>
                            {competitor.setup}
                          </span>
                        </div>
                      </td>

                      {/* Monthly Cost */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <span className={`font-bold text-sm md:text-base break-words ${
                          competitor.isRecommended ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {competitor.cost}
                        </span>
                      </td>

                      {/* White Label */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <div className={`closerx-status-badge ${whiteLabelStatus.colorClass}`}>
                          <whiteLabelStatus.icon className="w-4 h-4 mr-2" />
                          <span className="font-semibold break-words">{competitor.whiteLabel}</span>
                        </div>
                      </td>

                      {/* Templates */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <span className={`font-semibold text-sm md:text-base break-words ${
                          competitor.isRecommended ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {competitor.templates}
                        </span>
                      </td>

                      {/* Skill Level */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <div className={`closerx-status-badge ${skillStatus.colorClass}`}>
                          <skillStatus.icon className="w-4 h-4 mr-2" />
                          <span className="font-semibold break-words">{competitor.skillRequired}</span>
                        </div>
                      </td>

                      {/* Booking Rate */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <span className={`font-bold text-sm md:text-base ${
                          competitor.isRecommended ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {competitor.booking}
                        </span>
                      </td>

                      {/* Uptime */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <div className={`closerx-status-badge ${uptimeStatus.colorClass}`}>
                          {uptimeStatus.icon && <uptimeStatus.icon className="w-4 h-4 mr-2" />}
                          <span className="font-semibold break-words">{competitor.uptime}</span>
                        </div>
                      </td>

                      {/* Support */}
                      <td className="p-2 sm:p-3 md:p-4">
                        <span className="text-slate-600 font-medium text-sm md:text-base break-words">{competitor.support}</span>
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
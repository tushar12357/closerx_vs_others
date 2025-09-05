import React, { useEffect, useState } from 'react';
import ComparisonHeader from './ComparisonHeader';
import FeatureHighlights from './FeatureHighlights';
import ComparisonTable from './ComparisonTable';
import CostComparison from './CostComparison';
import KeyAdvantages from './KeyAdvantages';
import ComparisonCTA from './ComparisonCTA';

const CompetitorComparison = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 opacity-5">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"
          style={{ animation: 'drift 60s ease-in-out infinite alternate' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
          style={{ animation: 'float 50s ease-in-out infinite reverse' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full"
          style={{ animation: 'orbFloat 40s ease-in-out infinite' }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ComparisonHeader />
        <FeatureHighlights />
        <ComparisonTable />
        <CostComparison />
        <KeyAdvantages />
        <ComparisonCTA />
      </div>
    </div>
  );
};

export default CompetitorComparison;
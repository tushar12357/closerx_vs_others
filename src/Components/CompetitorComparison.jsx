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
    <div className="min-h-screen bg-[#483D8B] relative overflow-hidden">
      {/* Main Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ComparisonHeader />
        <FeatureHighlights />
        <ComparisonTable />
        <CostComparison />
        <KeyAdvantages />
      </div>
    </div>
  );
};

export default CompetitorComparison;
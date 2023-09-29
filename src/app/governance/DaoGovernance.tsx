'use client';

import { governanceApiGateway } from '@/api/governance';
import { LineChartMetric } from '@/components/metrics-charts';
import { TimePeriod } from '@/utils/types';

export const DaoGovernance = () => {
  const { useGetDAOGovernance } = governanceApiGateway;
  const { isLoading, isError, data } = useGetDAOGovernance({
    timePeriod: TimePeriod.LAST_YEAR, // todo;
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="text-title-large">DAO Governance</div>
      <div className="flex flex-row flex-wrap justify-between gap-5 lg:flex-nowrap">
        <LineChartMetric
          title="DAO Governance Asset Value"
          color="primary"
          description="DAO Treasury x Voter Participation Ratio x (1 - Voter Power Concentration Index)"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.DAO_governance_asset_value.values}
        />
        <LineChartMetric
          title="Value ($) of DAO Treasury"
          color="secondary"
          isLoading={isLoading}
          isError={isError}
          data={data?.metrics.DAO_treasury.values}
        />
      </div>
    </div>
  );
};

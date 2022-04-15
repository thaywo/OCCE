import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import TrafficCard from 'components/TrafficCard';

export default function Dashboard() {
  
 
  

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };


 return (
        <>
            <div className="bg-light-white-500 px-3 md:px-8 h-40" />


            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                    <StatusCard
                            color="purple"
                            icon="paid"
                            title="TOTAL ESCROWED"
                            amount="N1.187B"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="TOTAL VENDED"
                            amount="N603M"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="TOTAL AVAILABLE"
                            amount="N584M"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="TOTALCOLLECTED"
                            amount="N456M"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                        <TrafficCard />
                        </div>
                    </div>
                </div>
            </div> </>
    );
}

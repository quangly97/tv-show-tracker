import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context'
import Chart from "react-google-charts";

const Statistics = () => {

    const { state: { watchlist }}= useGlobalContext();
    const [totals, setTotals] = useState({ seenEpisodes: 0, unseenEpisodes: 0, totalEpisodes: 0 })

    const calculateTotals = () => {
      var total = 0, unseen = 0, seen = 0;

        for(var i = 0; i < watchlist.length; i++){
            total += watchlist[i].episodes.length;
            unseen += watchlist[i].unseenEpisodes;
        }

        seen = total - unseen;

        setTotals({
            seenEpisodes: seen,
            unseenEpisodes: unseen,
            totalEpisodes: total
        })
    }

    useEffect(() => {
        calculateTotals();
    }, [])

    return (
      <div>
        <Chart
          width={"1000px"}
          height={"1000px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Watched", "Number of Episodes"],
            ["Episodes seen", totals.seenEpisodes],
            ["Episodes unseen", totals.unseenEpisodes],
          ]}
          options={{
            title: `Number of shows: ${watchlist.length}`,
            // Just add this option
            pieHole: 0.65,
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
    );
}

export default Statistics

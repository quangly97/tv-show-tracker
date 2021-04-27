import React from 'react'
import { useGlobalContext } from '../../context'
import Chart from "react-google-charts";

const Statistics = () => {

    const { state: {watchlist, episodelist} } = useGlobalContext();

    var seen = episodelist.filter((episode) => episode.watched === true).length;
    var unseen = episodelist.length - seen;

    return (
      <div>
        <Chart
          width={"1000px"}
          height={"1000px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Watched", "Number of Episodes"],
            ["Episodes seen", seen],
            ["Episodes unseen", unseen],
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

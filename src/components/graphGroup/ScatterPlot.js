import React, {useEffect} from 'react'
import * as d3 from "d3";
import { transition } from "d3-transition";
import * as ss from 'simple-statistics'

export default function ScatterPlot({filteredPlayers, filter_one, filter_two}) {

    useEffect(() =>{
        d3.selectAll('svg').remove()
        let height = window.innerHeight *.9;
        let width = window.innerWidth *.8;
        let spacing = window.innerWidth * (2/12)

        let x_min = d3.min(filteredPlayers, (d) => d[filter_one.org][filter_one.type]);
        let x_max = d3.max(filteredPlayers, (d) => d[filter_one.org][filter_one.type]);
        let y_min = d3.min(filteredPlayers, (d) => d[filter_two.org][filter_two.type]);
        let y_max = d3.max(filteredPlayers, (d) => d[filter_two.org][filter_two.type]);

        let combined_min=Math.floor(Math.min(x_min, y_min)/100)*100;
        let combined_max=Math.ceil(Math.max(x_max, y_max)/100)*100;

        console.log(combined_max, combined_min)

        var svg = d3.select('#graph')
        .append("svg")
        .attr("width", width).attr("height", height)
        .style("background", 'blue')
        .append("g")
        .attr("transform", `translate(${spacing/2}, ${spacing/2})`)


     
        var xScale= d3.scaleLinear()
        .domain([combined_min, combined_max])
        .range([0, width-spacing])

        var yScale= d3.scaleLinear()
        .domain([combined_min,combined_max])
        .range([height-spacing,0])

        var xAxis = d3.axisBottom(xScale)
            .ticks(5);
        var yAxis = d3.axisLeft(yScale)
            .ticks(5);

        svg.append("g").attr("transform", `translate(0,${height-spacing})`).call(xAxis);
        svg.append("g").call(yAxis);

        var points = svg.append("g")
            .selectAll("dot").data(filteredPlayers)
        
        points.enter().append("circle")
            .attr("cx", (d) => xScale(d[filter_one.org][filter_one.type]))
            .attr("cy", (d)=>yScale(d[filter_two.org][filter_two.type]))
            .attr("r",2.5)
            .style('fill', 'red')

        // add line of fit

       let linearRegression = ss.linearRegression(filteredPlayers.map(player => [player[filter_one.org][filter_one.type] , player[filter_two.org][filter_two.type]]))

       console.log('linearRegression: ', linearRegression)

       let linearRegressionLine = ss.linearRegressionLine(linearRegression)

        let regressionPoints = [
            {x:combined_min,y: linearRegressionLine(combined_min)},
            {x:combined_max,y:linearRegressionLine(combined_max)}]

        console.log(regressionPoints)

        let line=d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))

        svg.append('path')
            .classed('regressionLine', true)
            .datum(regressionPoints)
            .attr('d', line)
            .attr('fill',"none")
            .attr('stroke', 'red')
            .attr("stroke-width", "2")
        

    }, [filteredPlayers])


    return (
            <div id='graph' className='fade-in'></div>
    )
}

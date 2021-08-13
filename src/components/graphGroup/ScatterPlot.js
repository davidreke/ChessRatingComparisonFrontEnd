import React, {useEffect} from 'react'
import * as d3 from "d3";
import * as ss from 'simple-statistics'





export default function ScatterPlot({filteredPlayers, filter_one, filter_two, setCurrentLinearRegression}) {

    useEffect(() =>{
       
        d3.selectAll('#graph>*').remove()
 
        let height = window.innerHeight *.9;
        let width = document.getElementById("graph").clientWidth
        let spacing = 160
        // let spacing = window.innerWidth * (3/24)

        let x_min = d3.min(filteredPlayers, (d) => d[filter_one.org][filter_one.type]);
        let x_max = d3.max(filteredPlayers, (d) => d[filter_one.org][filter_one.type]);
        let y_min = d3.min(filteredPlayers, (d) => d[filter_two.org][filter_two.type]);
        let y_max = d3.max(filteredPlayers, (d) => d[filter_two.org][filter_two.type]);

        let combined_min=Math.floor(Math.min(x_min, y_min)/100)*100;
        let combined_max=Math.ceil(Math.max(x_max, y_max)/100)*100;


        var svg = d3.select('#graph')
        .append("svg")
        .attr("width", width).attr("height", height)
        .style("background", 'white')
        .append("g")
        .attr("transform", `translate(${spacing/2}, ${spacing/2})`)
        .attr("style", "outlide: solid black")
        .classed("svgScatterPlot", true);

     
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

        svg.append("g").attr("transform", `translate(0,${height-spacing})`).call(xAxis).classed("svgScatterPlot", true);;
        svg.append("g").call(yAxis).classed("svgScatterPlot", true);;

        var points = svg.append("g")
            .selectAll("dot").data(filteredPlayers).classed("svgScatterPlot", true);
        
        points.enter().append("circle")
            .attr("cx", (d) => xScale(d[filter_one.org][filter_one.type]))
            .attr("cy", (d)=>yScale(d[filter_two.org][filter_two.type]))
            .attr("r",3.5)
            .style('fill', '#0b5ed7')
            .classed("svgScatterPlot", true);

        // add line of fit

       let linearRegression = ss.linearRegression(filteredPlayers.map(player => [player[filter_one.org][filter_one.type] , player[filter_two.org][filter_two.type]]))

       setCurrentLinearRegression(linearRegression)


       let linearRegressionLine = ss.linearRegressionLine(linearRegression)

       let finalPointX = Math.min(combined_max, (combined_max - linearRegression.b)/linearRegression.m)
       let startPointX = Math.max(combined_min, (combined_min - linearRegression.b)/linearRegression.m)

        let regressionPoints = [
            {x:startPointX,y: linearRegressionLine(startPointX)},
            {x:finalPointX,y:linearRegressionLine(finalPointX)}]



        let line=d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))

        var theRegressionLine=svg.append('path')
            .classed('regressionLine', true)
            .datum(regressionPoints)
            .attr('d', line)
            .attr('fill',"none")
            .attr('stroke', '#0b5ed7')
            .attr("stroke-width", "3")
            .classed("svgScatterPlot", true);
        

        // add axis titles
        svg.append("text")
            .attr('transform', `translate(${(width/2)-spacing} , ${height - (spacing *.7 )})`)
            .style("rext-anchor", "middle")
            .text(`${filter_one.org}-${filter_one.type} rating:`)
            .classed("svgScatterPlot", true);

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr('y', (0-spacing)*(2/5))
            .attr('x', 0 - height/2 + (spacing/2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(`${filter_two.org}-${filter_two.type} rating:`)
            .classed("svgScatterPlot", true);


        // add toolip
        const tip =d3.select("body")
            .append("div")
            .attr("class","card")
            .style("padding", "8px")
            .style("position", "absolute")
            .style("left", 0)
            .style("top", 0)
            .style("visibility", "hidden");

            svg.selectAll('circle')
                .on("mouseover", (e, d) => {
                    let content = `<div class='tooltip-label'>
                     ${filter_one.org}-${filter_one.type}: ${d[filter_one.org][filter_one.type]} <br/>
                     ${filter_two.org}-${filter_two.type}: ${d[filter_two.org][filter_two.type]}
                    </div>`;
                    tip.html(content).style("visibility", "visible")
                    handleMouseOver(e, d)
                }).on("mouseout", (e, d) => {
                    tip.style("visibility", "hidden");
                    handleMouseOut(e, d);
                  })
                  .on("mousemove", (e, d) => {
                    tip.style("transform", `translate(${e.pageX}px,${e.pageY}px)`);
                  });
                
                  theRegressionLine
                  .on("mouseover", (e, d) => {
                      console.log(svg.node().getBoundingClientRect())
                      let x_value = Math.round(xScale.invert(e.pageX-svg.node().getBoundingClientRect().x)-(spacing));
                      let y_value = Math.round(linearRegressionLine(x_value));
                      let content = `<div class='tooltip-label'>
                      ${filter_one.org}-${filter_one.type}: ${x_value}
                    <br/>
                    ${filter_two.org}-${filter_two.type}: ${y_value}
                      </div>`;
                      tip.html(content).style("visibility", "visible")
                      console.log(d)
                      handleMouseOver(e, d)
                  }).on("mouseout", (e, d) => {
                      tip.style("visibility", "hidden");
                      handleMouseOut(e, d);
                    })
                    .on("mousemove", (e, d) => {
                      tip.style("transform", `translate(${e.pageX}px,${e.pageY}px)`);
                    });
                  
        
            const handleMouseOver = (e, d) =>{
                d3.select(e.currentTarget)
                  .transition()
                  .duration(200)
                  .style("fill", "red");
            }
          
             const handleMouseOut = (e, d) => {
            d3.select(e.currentTarget)
              .transition()
              .duration(300)
              .style("fill", "#0b5ed7");
          };

        // end tooltip

    }, [filteredPlayers, filter_one.type, filter_one.org, filter_two.org, filter_two.type,setCurrentLinearRegression ])


    return (
            <div id='graph' className='fade-in'></div>
    )
}

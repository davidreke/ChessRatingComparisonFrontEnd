import React, { useCallback, useState, useEffect } from 'react'
import RatingDifference from './RatingDifference'
import RatingSelection from './RatingSelection'
import ScatterPlot from './ScatterPlot'
import NoComparison from '../noData/NoComparison'
import NoGraph from '../noData/NoGraph'
const findKey = (rating_text) => {
    switch (rating_text) {
        case 'Chess.com: Bullet':
            return { org: 'ChessCom', type: 'bullet' };
        case 'Chess.com: Blitz':
            return { org: 'ChessCom', type: 'blitz' };
        case 'Chess.com: Rapid':
            return { org: 'ChessCom', type: 'rapid' };
        case 'Chess.com: Daily':
            return { org: 'ChessCom', type: 'daily' };
        case 'Chess.com: Puzzle':
            return { org: 'ChessCom', type: 'puzzle' };
        case 'LiChess.org: Bullet':
            return { org: 'LiChess', type: 'bullet' };
        case 'LiChess.org: Blitz':
            return { org: 'LiChess', type: 'blitz' };
        case 'LiChess.org: Rapid':
            return { org: 'LiChess', type: 'rapid' };
        case 'LiChess.org: Classical':
            return { org: 'LiChess', type: 'classical' };
        case 'LiChess.org: Correspondence':
            return { org: 'LiChess', type: 'correspondence' };
        case 'LiChess.org: Puzzle':
            return { org: 'LiChess', type: 'puzzle' };
        case 'FIDE: Standard':
            return { org: 'FIDE', type: 'standard' };
        case 'FIDE: Rapid':
            return { org: 'FIDE', type: 'rapid' };
        case 'USCF: Regular':
            return { org: 'USCF', type: 'regular' };
        case 'USCF: Quick':
            return { org: 'USCF', type: 'quick' };
        case 'USCF: Blitz':
            return { org: 'USCF', type: 'blitz' };
        default:
            return { org: null, type: null }
    }
}
export default function Graphs({ players }) {
    const [comparisons, setComparisons] = useState({ firstComparison: null, secondComparison: null })
    const [filteredPlayers, setFilteredPlayers] = useState([])
    const [label_one, setlabel_one] = useState(null)
    const [label_two, setlabel_two] = useState(null)
    const [filter_one, setFilter_one] = useState({})
    const [filter_two, setFilter_two] = useState({})
    const [standard_deviation, setStandard_deviation]=useState(0)
    const [currentLinearRegression, setCurrentLinearRegression] =useState({})


    const filterPlayers = useCallback((rating_text_one, rating_text_two) => {
        setlabel_one(rating_text_one)
        setlabel_two(rating_text_two)
        let first_filter = findKey(rating_text_one)
        let second_Filter = findKey(rating_text_two)
        setFilter_one(first_filter)
        setFilter_two(second_Filter)
        let newPlayers = players.filter(player => (player[first_filter.org][first_filter.type] && player[second_Filter.org][second_Filter.type]))
        setFilteredPlayers(newPlayers)
        console.log('new players: ', newPlayers);

        // find average difference
        // let first_total = 0
        // let second_total = 0
        // for (let i = 0; i < newPlayers.length; i++) {
        //     first_total += newPlayers[i][filter_one.org][filter_one.type]
        //     second_total += newPlayers[i][filter_two.org][filter_two.type]
        // }
        // let first_avg = first_total / newPlayers.length;
        // let second_avg = second_total / newPlayers.length;
        // let difference = first_avg - second_avg

    }, [players])

    useEffect(()=>{
        
         // find standard variation
         let total_variance = 0
         for(let j = 0; j < filteredPlayers.length; j++) {
             console.log(currentLinearRegression )
             let calcuated_number =  (filteredPlayers[j][filter_one.org][filter_one.type]*currentLinearRegression.m) +currentLinearRegression.b
             let actual_number=filteredPlayers[j][filter_two.org][filter_two.type]
             console.log('calculated: ', calcuated_number, 'actual: ', actual_number)
             total_variance += Math.abs(calcuated_number-actual_number)
         }
         console.log("total variance:",total_variance)
         let average_variance = total_variance/filteredPlayers.length
         console.log('avg variance: ',average_variance)

         setStandard_deviation(average_variance)
    }, [filterPlayers, currentLinearRegression])

    return (
        <div>
            <RatingSelection comparisons={comparisons} setComparisons={setComparisons} filterPlayers={filterPlayers}  />
            {(filteredPlayers.length <= 0) && label_one && label_one && <NoComparison />}
            {label_one && label_two && (filteredPlayers.length > 0) &&
                <RatingDifference label_one={label_one} label_two={label_two}  standard_deviation={standard_deviation} currentLinearRegression={currentLinearRegression} />
            }
            {(filteredPlayers.length <= 1) && label_one && label_two && <NoGraph />}
            {label_one && label_two && (filteredPlayers.length > 1) &&
                <ScatterPlot filteredPlayers={filteredPlayers} filter_one={filter_one} filter_two={filter_two} setCurrentLinearRegression={setCurrentLinearRegression}  />
            }
        </div>
    )
}

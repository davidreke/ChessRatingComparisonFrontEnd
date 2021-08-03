import React, {  useState } from 'react'
import RatingDifference from './RatingDifference'
import RatingSelection from './RatingSelection'
import ScatterPlot from './ScatterPlot'
import NoComparison from '../noData/NoComparison'
import NoGraph from '../noData/NoGraph'

export default function Graphs({players}) {
   const [comparisons, setComparisons] =useState({firstComparison:null, secondComparison:null})
   const [filteredPlayers, setFilteredPlayers] = useState([])
   const [label_one, setlabel_one]=useState(null)
   const [label_two, setlabel_two]=useState(null)
   const [avg_difference, setAvg_difference]=useState(0)
   const [filter_one, setFilter_one] = useState({})
   const [filter_two, setFilter_two] = useState({})

   const filterPlayers = (rating_text_one, rating_text_two) => {
        setlabel_one(rating_text_one)
        setlabel_two(rating_text_two)
    
        let first_filter =findKey(rating_text_one)
        let second_Filter = findKey(rating_text_two)

        setFilter_one(first_filter)
        setFilter_two(second_Filter)

        let newPlayers = players.filter(player => (player[first_filter.org][first_filter.type] && player[second_Filter.org][second_Filter.type]))
        setFilteredPlayers(newPlayers)
        console.log('new players: ',newPlayers);
        let first_total = 0
        let second_total = 0
        for(let i = 0; i <newPlayers.length; i++){
            first_total+=newPlayers[i][first_filter.org][first_filter.type]
            second_total += newPlayers[i][second_Filter.org][second_Filter.type]
        }
        let first_avg = first_total / newPlayers.length;
        let second_avg = second_total / newPlayers.length;
        let difference = first_avg - second_avg
        setAvg_difference(difference)
   }

   const findKey = (rating_text) =>{
        switch(rating_text){
            case 'Chess.com: Bullet':
                return {org: 'ChessCom', type:'bullet'};
                break;
            case 'Chess.com: Blitz':
                return {org: 'ChessCom', type:'blitz'};
                break;
            case 'Chess.com: Rapid':
                return {org: 'ChessCom', type:'rapid'};
                break;
            case 'Chess.com: Daily':
                return {org: 'ChessCom', type:'daily'};
                break;
            case 'Chess.com: Puzzle':
                return {org: 'ChessCom', type:'blitz'};
                break;
            case 'LiChess.org: Bullet':
                return {org:'LiChess', type:'bullet'};
                break;
            case 'LiChess.org: Blitz':
                return {org:'LiChess', type:'blitz'};
                break;
            case 'LiChess.org: Rapid':
                return {org:'LiChess', type:'rapid'};
                break;
            case 'LiChess.org: Classical':
                return {org:'LiChess', type:'classical'};
                break;
            case 'LiChess.org: Correspondence':
                return {org:'LiChess', type:'correspondence'};
                break;
            case 'LiChess.org: Puzzle':
                return {org:'LiChess', type:'puzzle'};
                break;
            case 'FIDE: Standard':
                return {org:'FIDE', type:'standard'};
                break;
            case 'FIDE: Rapid':
                return {org:'FIDE', type:'rapid'};
                break;
            case 'USCF: Regular':
                return {org:'USCF', type:'regular'};
                break;
            case 'USCF: Quick':
                return {org:'USCF', type:'quick'};
                break;
            case 'USCF: Blitz':
                return {org:'USCF', type:'blitz'};
                break;
            default:
                return {org: null, type: null}
        
        }
   }

        return (
            <div>
                <RatingSelection  comparisons={comparisons} setComparisons={setComparisons} filterPlayers={filterPlayers} />

                {(filteredPlayers.length <= 1) && label_one && label_two &&  <NoGraph/>}

                
                {label_one && label_two && (filteredPlayers.length > 1 ) &&
                    <ScatterPlot filteredPlayers={filteredPlayers} filter_one={filter_one} filter_two={filter_two} />
                }

                {(filteredPlayers.length <= 0) && label_one && label_one &&  <NoComparison/>}

                
                {label_one && label_two && (filteredPlayers.length > 0 ) &&
                    <RatingDifference label_one={label_one} label_two={label_two} avg_difference={avg_difference}  />
                }
                

            </div>
        )

}

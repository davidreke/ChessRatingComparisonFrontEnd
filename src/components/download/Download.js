import React, { useEffect, useState } from 'react'

export default function Download({players}) {

    const [csv, setCSV] = useState('')

    useEffect(() => {
        if(players.length > 0){
            // console.log(players)
            
            var str = "Chess.com - Bullet, Chess.com - Blitz, Chess.com - Rapid, Chess.com - Daily, Chess.com - Puzzle,Lichess - Bullet, Lichess - Blitz, Lichess - Rapid, Lichess - Classical, Lichess - Correspondence, Lichess - Puzzle, FIDE - Blitz, FIDE - Rapid, FIDE - Standard, USCF - Blitz, USCF - Quick, USCF - Regular\r\n"
            for(const player of players){
                console.log(player)
                str +=`${player.ChessCom.bullet?player.ChessCom.bullet:""},${player.ChessCom.blitz?player.ChessCom.blitz:""},${player.ChessCom.rapid?player.ChessCom.rapid:""},${player.ChessCom.daily?player.ChessCom.daily:""},${player.ChessCom.Puzzle?player.ChessCom.Puzzle:""},${player.LiChess.bullet?player.LiChess.bullet:""},${player.LiChess.blitz?player.LiChess.blitz:""},${player.LiChess.rapid?player.LiChess.rapid:""},${player.LiChess.classical?player.LiChess.classical:""},${player.LiChess.correspondence?player.LiChess.correspondence:""},${player.LiChess.puzzle?player.LiChess.puzzle:""},${player.FIDE.blitz?player.FIDE.blitz:""},${player.FIDE.rapid?player.FIDE.rapid:""},${player.FIDE.standard?player.FIDE.standard:""},${player.USCF.blitz?player.USCF.blitz:""},${player.USCF.quick?player.USCF.quick:""},${player.USCF.regular?player.USCF.regular:""}\r\n`
            }
            console.log(str)
            console.log("this is"+null+" a test")
            setCSV(str);

        }
        
    }, [players])

    const downloadCSV = () => {
        console.log('download CSV called')

        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, "Chess Rating Comparison");
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "Chess Rating Comparison");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    } 
    return (
        <div>
            <h2>Click <a href='#' onClick={downloadCSV}>here</a> to download a csv file of all player data.</h2>
        </div>
    )
}

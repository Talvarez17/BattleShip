import React, { useEffect } from "react";
import useGame from "../hooks/useGame";
import Board from "./Display/Board";

export const Vista = () => {
    const { opponentState, myState } = useGame(true);

    useEffect(() => {
        // Modify useGame to include a "viewOnly" mode or filter socket events
        // Set up connection to view a random game without playing
    }, []);

    return (
        <div>
            <h1>Viewing Game</h1>
            <div>
                <div className="display">
                    <Board state={myState} />
                    <Board state={opponentState} />
                </div>
                {/* Render the boards using opponentState and myState */}
                {/* Disallow interaction or input */}
            </div>
        </div>
    );
};

export default Vista;
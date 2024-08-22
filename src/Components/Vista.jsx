import React from "react";
import useGame from "../hooks/useGame";

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
                {/* Render the boards using opponentState and myState */}
                {/* Disallow interaction or input */}
            </div>
        </div>
    );
};

export default Vista;
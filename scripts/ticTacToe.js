const gameBoard = (() => {
    let _board = [[null, null, null], [null, null, null], [null, null, null]];

    const setTile = (loc, token) => {
        _board[loc] = _board[loc.row][loc.col] || token;
    };

    const resetBoard = () => {
        _board = [[null, null, null], [null, null, null], [null, null, null]];
    };

    const getBoardState = () => {
        return _board;
    };

    return {
        setTile,
        resetBoard,
        getBoardState,
    };
})();
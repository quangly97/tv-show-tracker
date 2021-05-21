import React, { useState, useCallback } from 'react';

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState(!state);
    });

    return [state, toggle];
}
export const CATEGORIES = {
    'alkali-metal': { name: 'Alkali Metals', color: '#ff6b6b' },
    'alkaline-earth': { name: 'Alkaline Earth', color: '#ffa94d' },
    'transition-metal': { name: 'Transition Metals', color: '#69db7c' },
    'post-transition': { name: 'Post-Transition', color: '#4dabf7' },
    'metalloid': { name: 'Metalloids', color: '#da77f2' },
    'nonmetal': { name: 'Nonmetals', color: '#ffd43b' },
    'halogen': { name: 'Halogens', color: '#20c997' },
    'noble-gas': { name: 'Noble Gases', color: '#748ffc' },
    'lanthanide': { name: 'Lanthanides', color: '#f783ac' },
    'actinide': { name: 'Actinides', color: '#ff8787' }
}

export const GRID_POSITIONS = {
    1: { row: 1, col: 1 }, 2: { row: 1, col: 18 },
    3: { row: 2, col: 1 }, 4: { row: 2, col: 2 },
    5: { row: 2, col: 13 }, 6: { row: 2, col: 14 }, 7: { row: 2, col: 15 }, 8: { row: 2, col: 16 }, 9: { row: 2, col: 17 }, 10: { row: 2, col: 18 },
    11: { row: 3, col: 1 }, 12: { row: 3, col: 2 },
    13: { row: 3, col: 13 }, 14: { row: 3, col: 14 }, 15: { row: 3, col: 15 }, 16: { row: 3, col: 16 }, 17: { row: 3, col: 17 }, 18: { row: 3, col: 18 },
    19: { row: 4, col: 1 }, 20: { row: 4, col: 2 },
    21: { row: 4, col: 3 }, 22: { row: 4, col: 4 }, 23: { row: 4, col: 5 }, 24: { row: 4, col: 6 }, 25: { row: 4, col: 7 },
    26: { row: 4, col: 8 }, 27: { row: 4, col: 9 }, 28: { row: 4, col: 10 }, 29: { row: 4, col: 11 }, 30: { row: 4, col: 12 },
    31: { row: 4, col: 13 }, 32: { row: 4, col: 14 }, 33: { row: 4, col: 15 }, 34: { row: 4, col: 16 }, 35: { row: 4, col: 17 }, 36: { row: 4, col: 18 },
    37: { row: 5, col: 1 }, 38: { row: 5, col: 2 },
    39: { row: 5, col: 3 }, 40: { row: 5, col: 4 }, 41: { row: 5, col: 5 }, 42: { row: 5, col: 6 }, 43: { row: 5, col: 7 },
    44: { row: 5, col: 8 }, 45: { row: 5, col: 9 }, 46: { row: 5, col: 10 }, 47: { row: 5, col: 11 }, 48: { row: 5, col: 12 },
    49: { row: 5, col: 13 }, 50: { row: 5, col: 14 }, 51: { row: 5, col: 15 }, 52: { row: 5, col: 16 }, 53: { row: 5, col: 17 }, 54: { row: 5, col: 18 },
    55: { row: 6, col: 1 }, 56: { row: 6, col: 2 },
    72: { row: 6, col: 4 }, 73: { row: 6, col: 5 }, 74: { row: 6, col: 6 }, 75: { row: 6, col: 7 },
    76: { row: 6, col: 8 }, 77: { row: 6, col: 9 }, 78: { row: 6, col: 10 }, 79: { row: 6, col: 11 }, 80: { row: 6, col: 12 },
    81: { row: 6, col: 13 }, 82: { row: 6, col: 14 }, 83: { row: 6, col: 15 }, 84: { row: 6, col: 16 }, 85: { row: 6, col: 17 }, 86: { row: 6, col: 18 },
    87: { row: 7, col: 1 }, 88: { row: 7, col: 2 },
    104: { row: 7, col: 4 }, 105: { row: 7, col: 5 }, 106: { row: 7, col: 6 }, 107: { row: 7, col: 7 },
    108: { row: 7, col: 8 }, 109: { row: 7, col: 9 }, 110: { row: 7, col: 10 }, 111: { row: 7, col: 11 }, 112: { row: 7, col: 12 },
    113: { row: 7, col: 13 }, 114: { row: 7, col: 14 }, 115: { row: 7, col: 15 }, 116: { row: 7, col: 16 }, 117: { row: 7, col: 17 }, 118: { row: 7, col: 18 }
}

// Lanthanides: 57-71, Actinides: 89-103
for (let i = 57; i <= 71; i++) {
    GRID_POSITIONS[i] = { row: 9, col: 4 + (i - 57) }
}
for (let i = 89; i <= 103; i++) {
    GRID_POSITIONS[i] = { row: 10, col: 4 + (i - 89) }
}

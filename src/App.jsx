import { useState, useMemo } from 'react'
import elementsData from '../data/elements.json'
import Element from './components/Element'
import Legend from './components/Legend'
import Modal from './components/Modal'
import { CATEGORIES, GRID_POSITIONS } from './utils/constants'

function App() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState(null)
    const [selectedElement, setSelectedElement] = useState(null)

    const mainGridElements = useMemo(() => {
        const grid = []
        for (let row = 1; row <= 7; row++) {
            for (let col = 1; col <= 18; col++) {
                grid.push({ row, col, element: null, placeholder: null })
            }
        }

        elementsData.forEach(el => {
            const pos = GRID_POSITIONS[el.number]
            if (pos && pos.row <= 7) {
                const idx = (pos.row - 1) * 18 + (pos.col - 1)
                grid[idx].element = el
            }
        })

        grid[(6 - 1) * 18 + 2].placeholder = 'La-Lu'
        grid[(7 - 1) * 18 + 2].placeholder = 'Ac-Lr'

        return grid
    }, [])

    const lanthanides = elementsData.filter(e => e.number >= 57 && e.number <= 71)
    const actinides = elementsData.filter(e => e.number >= 89 && e.number <= 103)

    const isElementVisible = (element) => {
        if (!element) return true

        const matchesSearch = !searchQuery ||
            element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.number.toString().includes(searchQuery)

        const matchesCategory = !activeCategory || element.category === activeCategory

        return matchesSearch && matchesCategory
    }

    const isHighlighted = (element) => {
        if (!element || !searchQuery) return false
        return element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.number.toString().includes(searchQuery)
    }

    return (
        <>
            <div className="bg-animation" />

            <div className="search-bar">
                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Rechercher un élément..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <main className="main-container">
                <div className="table-wrapper">
                    <div className="periodic-table">
                        {mainGridElements.map((cell, idx) => {
                            if (cell.placeholder) {
                                return (
                                    <div key={idx} className="lanthanide-placeholder">
                                        {cell.placeholder}
                                    </div>
                                )
                            }
                            if (cell.element) {
                                return (
                                    <Element
                                        key={cell.element.number}
                                        element={cell.element}
                                        isDimmed={!isElementVisible(cell.element)}
                                        isHighlighted={isHighlighted(cell.element)}
                                        onClick={() => setSelectedElement(cell.element)}
                                    />
                                )
                            }
                            return <div key={idx} className="element-spacer" />
                        })}
                    </div>

                    <div className="special-rows">
                        <div className="special-label">Lanthanides</div>
                        {lanthanides.map(el => (
                            <Element
                                key={el.number}
                                element={el}
                                isDimmed={!isElementVisible(el)}
                                isHighlighted={isHighlighted(el)}
                                onClick={() => setSelectedElement(el)}
                            />
                        ))}
                        <div className="special-label">Actinides</div>
                        {actinides.map(el => (
                            <Element
                                key={el.number}
                                element={el}
                                isDimmed={!isElementVisible(el)}
                                isHighlighted={isHighlighted(el)}
                                onClick={() => setSelectedElement(el)}
                            />
                        ))}
                    </div>
                </div>

                <Legend
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    onCategoryClick={(cat) => setActiveCategory(activeCategory === cat ? null : cat)}
                />
            </main>

            {selectedElement && (
                <Modal
                    element={selectedElement}
                    categories={CATEGORIES}
                    onClose={() => setSelectedElement(null)}
                    onNext={() => {
                        const idx = elementsData.findIndex(e => e.number === selectedElement.number)
                        if (idx < elementsData.length - 1) setSelectedElement(elementsData[idx + 1])
                    }}
                    onPrev={() => {
                        const idx = elementsData.findIndex(e => e.number === selectedElement.number)
                        if (idx > 0) setSelectedElement(elementsData[idx - 1])
                    }}
                    hasNext={selectedElement.number < 118}
                    hasPrev={selectedElement.number > 1}
                />
            )}
        </>
    )
}

export default App

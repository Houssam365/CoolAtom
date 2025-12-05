function Legend({ categories, activeCategory, onCategoryClick }) {
    return (
        <div className="legend">
            {Object.entries(categories).map(([key, value]) => (
                <div
                    key={key}
                    className={`legend-item ${activeCategory === key ? 'active' : ''}`}
                    onClick={() => onCategoryClick(key)}
                >
                    <div className="legend-color" style={{ background: value.color }} />
                    <span className="legend-text">{value.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Legend

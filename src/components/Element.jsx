import './Element.css'

function Element({ element, isDimmed, isHighlighted, onClick }) {
    const mass = typeof element.atomicMass === 'number'
        ? element.atomicMass.toFixed(2)
        : element.atomicMass

    const classNames = [
        'element',
        element.category,
        isDimmed ? 'dimmed' : '',
        isHighlighted ? 'highlighted' : ''
    ].filter(Boolean).join(' ')

    return (
        <div className={classNames} onClick={onClick}>
            <span className="number">{element.number}</span>
            <span className="symbol">{element.symbol}</span>
            <span className="name">{element.name}</span>
            <span className="mass">{mass}</span>
        </div>
    )
}

export default Element

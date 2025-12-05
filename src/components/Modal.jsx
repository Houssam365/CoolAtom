import { useEffect } from 'react'
import AtomVisualization from './AtomVisualization'
import './Modal.css'

function Modal({ element, categories, onClose, onNext, onPrev, hasNext, hasPrev }) {
    const categoryColor = categories[element.category]?.color || '#6366f1'
    const protons = element.number
    const neutrons = Math.round(element.atomicMass) - protons

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowRight' && hasNext) onNext()
            if (e.key === 'ArrowLeft' && hasPrev) onPrev()
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [onClose, onNext, onPrev, hasNext, hasPrev])

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose()
        }
    }

    // Helper component to hide empty stats
    const StatItem = ({ label, value, unit = '', color, className = '' }) => {
        if (!value || value === 'N/A' || value === 'Unknown') return null
        return (
            <div className={`stat-item ${className}`}>
                <span className="stat-label">{label}</span>
                <span className="stat-value" style={{ color }}>
                    {value} {unit}
                </span>
            </div>
        )
    }

    return (
        <div className="modal-overlay active" onClick={handleOverlayClick}>
            <div className="modal modal-large">
                <button className="modal-close" onClick={onClose}>✕</button>

                {/* Navigation Buttons */}
                {hasPrev && (
                    <button className="nav-btn prev" onClick={onPrev} title="Élément précédent (Flèche Gauche)">
                        ‹
                    </button>
                )}
                {hasNext && (
                    <button className="nav-btn next" onClick={onNext} title="Élément suivant (Flèche Droite)">
                        ›
                    </button>
                )}

                <div className="modal-content">
                    {/* Left side - 3D Atom */}
                    <div className="modal-atom-section">
                        <AtomVisualization element={element} color={categoryColor} />

                        <a
                            href={`https://en.wikipedia.org/wiki/${element.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-btn"
                            style={{ '--btn-color': categoryColor }}
                        >
                            <span>Voir sur Wikipedia</span>
                            <span className="icon">↗</span>
                        </a>
                    </div>

                    {/* Right side - Info */}
                    <div className="modal-info-section">
                        <div className="modal-header-compact">
                            <div className="modal-symbol-small" style={{ borderColor: categoryColor }}>
                                <span className="symbol" style={{ color: categoryColor }}>{element.symbol}</span>
                            </div>
                            <div>
                                <h2>{element.name}</h2>
                                <span
                                    className="modal-category"
                                    style={{ background: `${categoryColor}22`, color: categoryColor }}
                                >
                                    {element.category.replace(/-/g, ' ')}
                                </span>
                            </div>
                        </div>

                        <div className="modal-stats">
                            {/* Section: Propriétés Atomiques */}
                            <h3 className="section-title">Propriétés Atomiques</h3>
                            <div className="stat-row">
                                <StatItem label="Numéro Atomique" value={element.number} color={categoryColor} />
                                <StatItem label="Masse Atomique" value={element.atomicMass} unit="u" />
                            </div>

                            <div className="stat-row">
                                <StatItem label="Configuration" value={element.electronConfig} className="config" />
                                <StatItem label="Électronégativité" value={element.electronegativity} />
                            </div>

                            {/* Section: Propriétés Physiques */}
                            <h3 className="section-title">Propriétés Physiques</h3>
                            <div className="stat-row three-cols">
                                <StatItem label="État Standard" value={element.phase || 'Solide'} />
                                <StatItem label="Densité" value={element.density} unit="g/cm³" />
                                <StatItem label="Fusion" value={element.melt} unit="K" />
                            </div>

                            {/* Section: Composition */}
                            <h3 className="section-title">Composition</h3>
                            <div className="stat-row three-cols">
                                <StatItem label="Protons" value={protons} color="#ff6b6b" />
                                <StatItem label="Neutrons" value={neutrons} unit="(approx)" color="#4ecdc4" />
                                <StatItem label="Électrons" value={element.number} color={categoryColor} />
                            </div>

                            {/* Section: Histoire */}
                            {(element.discovered_by || element.year) && (
                                <>
                                    <h3 className="section-title">Histoire</h3>
                                    <div className="stat-full">
                                        <div className="history-grid">
                                            <StatItem label="Découvert par" value={element.discovered_by} className="small" />
                                            <StatItem label="Année" value={element.year} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

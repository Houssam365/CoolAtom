import { useState, useMemo } from 'react'
import './AtomVisualization.css'

// Electron shell configuration
const getElectronShells = (atomicNumber) => {
    const shells = []
    let remaining = atomicNumber
    const maxPerShell = [2, 8, 18, 32, 32, 18, 8]

    for (let i = 0; i < maxPerShell.length && remaining > 0; i++) {
        const electrons = Math.min(remaining, maxPerShell[i])
        shells.push(electrons)
        remaining -= electrons
    }

    return shells
}

function AtomVisualization({ element, color }) {
    const shells = useMemo(() => getElectronShells(element.number), [element.number])
    const [activeShell, setActiveShell] = useState(null)

    // Calculate protons and neutrons
    const protons = element.number
    const neutrons = Math.round(element.atomicMass) - protons

    const handleShellClick = (index) => {
        setActiveShell(activeShell === index ? null : index)
    }

    return (
        <div className="atom-container">
            <div className="atom-3d">
                {/* 3D Nucleus */}
                <div
                    className="nucleus-3d"
                    style={{ '--nucleus-color': color }}
                >
                    <div className="nucleus-core" />
                </div>

                {/* Electron shells */}
                {shells.map((electronCount, shellIndex) => {
                    const radius = 50 + shellIndex * 20; // Rayon de l'orbite

                    return (
                        <div
                            key={shellIndex}
                            className={`orbit ${activeShell !== null && activeShell !== shellIndex ? 'dimmed' : ''} ${activeShell === shellIndex ? 'highlighted' : ''}`}
                            style={{
                                '--orbit-size': `${radius * 2}px`,
                                '--electron-color': color,
                                zIndex: 20 - shellIndex
                            }}
                        >
                            {/* Rotating ring container */}
                            <div
                                className="electron-ring"
                                style={{
                                    animationDuration: `${10 + shellIndex * 5}s`,
                                    animationDirection: shellIndex % 2 === 0 ? 'normal' : 'reverse'
                                }}
                            >
                                {/* Electrons distributed on the ring */}
                                {Array.from({ length: Math.min(electronCount, 8) }).map((_, eIndex) => {
                                    const angle = (360 / Math.min(electronCount, 8)) * eIndex;
                                    return (
                                        <div
                                            key={eIndex}
                                            className="electron-3d"
                                            style={{
                                                transform: `rotateZ(${angle}deg) translateX(${radius}px)`
                                            }}
                                        >
                                            <div className="electron-sphere" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Shell filter buttons */}
            <div className="shells-filter">
                <span className="filter-label">Couches</span>
                {shells.map((count, i) => (
                    <button
                        key={i}
                        className={`shell-btn ${activeShell === i ? 'active' : ''}`}
                        style={{ '--btn-color': color }}
                        onClick={() => handleShellClick(i)}
                    >
                        <span className="shell-number">{i + 1}</span>
                        <span className="shell-electrons">{count}e⁻</span>
                    </button>
                ))}
                {activeShell !== null && (
                    <button
                        className="shell-btn reset"
                        onClick={() => setActiveShell(null)}
                        title="Réinitialiser la vue"
                    >
                        ↺
                    </button>
                )}
            </div>
        </div>
    )
}

export default AtomVisualization

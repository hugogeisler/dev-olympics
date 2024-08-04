import { ContinentCode, ContinentMedal } from "@models/ContinentMedlas";

type OlympicRingsProps = {
    ringRadius?: number;
    ringStrokeWidth?: number;
    ringSpacing?: number;
    ringRanks?: Record<ContinentCode, ContinentMedal>;
};

export const OlympicRings: React.FC<OlympicRingsProps> = ({
    ringRadius = 60,
    ringStrokeWidth = 2,
    ringSpacing = 5,
    ringRanks,
} = {}) => {
    // Default props for the rings
    const getRingProps = (x: number, y: number, rank: number = 0) => {
        const radiusRatio = rank * ringStrokeWidth * 2;

        return {
            cx: x,
            cy: y,
            r: ringRadius - radiusRatio,
            strokeWidth: ringStrokeWidth,
            fill: "none",
        };
    };

    /**
     * Calculate the position of the ring in the SVG
     */
    const getCenteredRingPosition = (position: number) => {
        return position + ringRadius + ringStrokeWidth / 2;
    };

    /**
     * Calculate the viewBox of the SVG
     */
    const getViewBox = () => {
        const viewBox = {
            x: 0,
            y: 0,
            width: ringRadius * 2 * 3 + ringSpacing * 2 + ringStrokeWidth,
            height: ringRadius * 3 + ringSpacing / 2,
        };

        return `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
    };

    const getRingCount = (rank = 1) => {
        return 5 - rank + 1;
    };

    // Render the SVG
    return (
        <svg viewBox={getViewBox()} width="100%" height="100%">
            {/* EUROPE */}
            {Array.from({ length: getRingCount(ringRanks?.EU.rank) }).map(
                (_, index) => (
                    <circle
                        key={`europe-${index}`}
                        stroke="#0096E6"
                        {...getRingProps(
                            getCenteredRingPosition(0),
                            getCenteredRingPosition(0),
                            index
                        )}
                        className={`ring ${index === 0 ? "master" : ""}`}
                    />
                )
            )}

            {/* AFRICA */}
            {Array.from({ length: getRingCount(ringRanks?.AF.rank) }).map(
                (_, index) => (
                    <circle
                        key={`africa-${index}`}
                        stroke="#38454F"
                        {...getRingProps(
                            getCenteredRingPosition(
                                ringRadius * 2 + ringSpacing
                            ),
                            getCenteredRingPosition(0),
                            index
                        )}
                        className={`ring ${index === 0 ? "master" : ""}`}
                    />
                )
            )}

            {/* AMERICA */}
            {Array.from({ length: getRingCount(ringRanks?.AM.rank) }).map(
                (_, index) => (
                    <circle
                        key={`america-${index}`}
                        stroke="#E64C3C"
                        {...getRingProps(
                            getCenteredRingPosition(
                                ringRadius * 4 + ringSpacing * 2
                            ),
                            getCenteredRingPosition(0),
                            index
                        )}
                        className={`ring ${index === 0 ? "master" : ""}`}
                    />
                )
            )}

            {/* ASIA */}
            {Array.from({ length: getRingCount(ringRanks?.AS.rank) }).map(
                (_, index) => (
                    <circle
                        key={`asia-${index}`}
                        stroke="#F3D55B"
                        {...getRingProps(
                            getCenteredRingPosition(
                                ringRadius + ringSpacing / 2
                            ),
                            getCenteredRingPosition(
                                ringRadius + ringSpacing / 2 - ringStrokeWidth
                            ),
                            index
                        )}
                        className={`ring ${index === 0 ? "master" : ""}`}
                    />
                )
            )}

            {/* OCEANIA */}
            {Array.from({ length: getRingCount(ringRanks?.OC.rank) }).map(
                (_, index) => (
                    <circle
                        key={`oceania-${index}`}
                        stroke="#24AE5F"
                        {...getRingProps(
                            getCenteredRingPosition(
                                ringRadius * 3 + ringSpacing * 1.5
                            ),
                            getCenteredRingPosition(
                                ringRadius + ringSpacing / 2 - ringStrokeWidth
                            ),
                            index
                        )}
                        className={`ring ${index === 0 ? "master" : ""}`}
                    />
                )
            )}
        </svg>
    );
};

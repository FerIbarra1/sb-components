import './MyLabel.css';


interface Props {
    /**
     * The text to display
     */
    label: string;

    /**
     * The size of the label
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Whether to make the text all caps
     */
    allCaps?: boolean;

    /**
     * The color of the text
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * font color
     */
    fontColor?: string;
}

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor
}: Props) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor }}>{allCaps ? label.toUpperCase() : label}</span>
    )
}

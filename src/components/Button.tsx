import {ReactElement} from 'react';
import './Button.less'

export type TButtonColor = 'primary' | 'secondary'
export type TButtonSize = 'm' | 'l'

export interface IButtonProps {
    size?: TButtonSize;
    color?: TButtonColor;
    className?: string;
    children?: ReactElement | ReactElement[];
}

function Button({size, color, className, children}: IButtonProps): ReactElement {
    return (
        <button className={`button button_color_${color} button_size_${size} ${className || ''}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    size: 'm',
    color: 'primary'
}

export default Button
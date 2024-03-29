import { CircleButtonStyled } from "./Circle-Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CircleButtonProps {
    children: React.ReactNode;
    iconName: IconProp;
    color?: string;
}

export default function CircleButton({ children, iconName, color }: CircleButtonProps) {
    return (
        <CircleButtonStyled color={color}>
            <div className="circle-button">
                <FontAwesomeIcon icon={iconName} size="2xl" />
            </div>
            <p>{children}</p>
        </CircleButtonStyled>
    );
} 
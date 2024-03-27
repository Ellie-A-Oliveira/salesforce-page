import { CircleButtonStyled } from "./Circle-Button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CircleButtonProps {
    children: React.ReactNode;
    iconName: IconProp;
}

export default function CircleButton({ children, iconName }: CircleButtonProps) {
    return (
        <CircleButtonStyled>
            <div className="circle-button">
                <FontAwesomeIcon icon={iconName} size="xl" />
            </div>
            <p>{children}</p>
        </CircleButtonStyled>
    );
} 
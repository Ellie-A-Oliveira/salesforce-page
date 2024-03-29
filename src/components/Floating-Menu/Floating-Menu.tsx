import { MouseEventHandler, useRef, useState } from "react";
import { Button } from "..";
import { FloatingMenuStyled } from "./Floating-Menu.style";

interface MenuItem {
    columnTitle: string;
    options: {
        type: 'link' | 'button';
        title: string;
        link?: string;
        onClick?: MouseEventHandler;
    }[];
}

interface FloatingMenuProps {
    children: React.ReactNode;
    title: string;
    menuItems: MenuItem[];
}

export default function FloatingMenu({ children, title, menuItems }: FloatingMenuProps) {
    const menu = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const handleFocus = () => {
        setHeight(menu.current!.getBoundingClientRect().height);
    }
    
    return (
        <FloatingMenuStyled onFocus={handleFocus} height={height}>
            <div className='floating-menu' ref={menu}>
                <p className="title">{title}</p>
                <div className="menu">
                    {menuItems.map(({ columnTitle, options }) => (
                        <div key={columnTitle} className="column">
                            <p>{columnTitle}</p>
                            {options.map(({ type, title, link, onClick }) => (
                                type === 'button' ? (
                                    <Button
                                        key={title}
                                        onClick={onClick}
                                    >
                                        {title}
                                    </Button>
                                ) :
                                <a
                                    href={link}
                                    key={title}
                                    className="link"
                                >
                                    {title}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Button>
                {children}
            </Button>
        </FloatingMenuStyled>
    );
}
import { useNavigate } from "react-router-dom";
import { CardStyled } from "./Card.style";

interface CardProps {
    imgProps: { imgsrc: string; objectfit?: string; aspectRatio?: string; };
    title: string;
    linkTitle?: string;
    link?: string;
    linkStyle?: string;
    description?: string;
    subtext?: string;
    borders?: boolean;
    centered?: boolean;
    horizontal?: boolean;
}

export default function Card(
    {
        imgProps,
        title,
        description,
        linkTitle,
        link,
        borders,
        centered,
        subtext,
        horizontal,
        linkStyle,
    }: CardProps) {
        const navigate = useNavigate();

        const handleNavigate = (path: string) => {
            navigate(path);
        };
    return (
        <CardStyled
            borders={borders}
            centered={centered}
            objectfit={imgProps.objectfit}
            aspectRatio={imgProps.aspectRatio}
            horizontal={horizontal}
            linkStyle={linkStyle}
        >
            <a className="img" onClick={() => handleNavigate(link!)}
            ><img src={imgProps.imgsrc} alt={title} /></a>
            <div className="content">
                <h3 className="title">{title}</h3>
                <div className="text-content">
                    {description ? <p>{description}</p> : null}
                    {subtext ? <p className="subtext">{subtext}</p> : null}
                </div>
                {link ? <a className="link" onClick={() => handleNavigate(link!)}
                >{linkTitle}</a> : null}
            </div>
        </CardStyled>
    );
}
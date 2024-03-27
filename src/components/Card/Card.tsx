import { CardStyled } from "./Card.style";

interface CardProps {
    imgProps: { imgsrc: string; objectfit?: string; aspectRatio?: string; };
    title: string;
    linkTitle?: string;
    link?: string;
    description?: string;
    subtext?: string;
    borders?: boolean;
    centered?: boolean;
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
    }: CardProps) {
    return (
        <CardStyled borders={borders} centered={centered} objectfit={imgProps.objectfit} aspectRatio={imgProps.aspectRatio}>
            <a className="img" href={link}><img src={imgProps.imgsrc} alt={title} /></a>
            <h4>{title}</h4>
            <div className="content">
                {description ? <p>{description}</p> : null}
                {subtext ? <p className="subtext">{subtext}</p> : null}
            </div>
            {link ? <a className="link" href={link}>{linkTitle}</a> : null}
        </CardStyled>
    );
}
import { CardStyled } from "./Card.style";

interface CardProps {
    imgsrc: string;
    imgwidth: string;
    imgheight: string;
    title: string;
    linkTitle?: string;
    link?: string;
    description?: string;
    borders?: boolean;
}

export default function Card({ imgsrc, imgwidth, imgheight, title, description, linkTitle, link, borders }: CardProps) {
    return (
        <CardStyled borders={borders} imgheight={imgheight} imgwidth={imgwidth}>
            <img src={imgsrc} alt={title} />
            <h4>{title}</h4>
            {description ? <p>{description}</p> : null}
            {link ? <a href={link}>{linkTitle}</a> : null}
        </CardStyled>
    );
}
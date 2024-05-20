import Card from "../../components/Card/Card";
import { IntegrantesStyled } from "./Integrantes.style";

export default function Integrantes() {
    return (
        <IntegrantesStyled className="main-padding text-center">
            <h1>Integrantes</h1>
            <p className="mb-3">Desenvolvido com excelência por:</p>
            <div className="flex justify-center gap-5">
                <Card 
                    title="Ellie de Oliveira"
                    subtext="RM: 552824"
                    description="E-mail: ellie.a.oliveira@gmail.com"
                    externalLink={true}
                    linkTitle="Linkedin"
                    link="https://www.linkedin.com/in/ellie-a-b-de-oliveira/"
                    imgProps={{ imgsrc: "https://media.licdn.com/dms/image/C4D03AQHFyaz_6-D9wg/profile-displayphoto-shrink_400_400/0/1627657920695?e=1717632000&v=beta&t=-GTet6ELELtzwFsQOACM_Asxs7os9IXe7GPPihr5ItY" }}
                    borders={true}
                />
                <Card 
                    title="Ives Jundi Chiba"
                    subtext="RM: 553243"
                    description="E-mail: ivesjundi@gmail.com"
                    externalLink={true}
                    linkTitle="Linkedin"
                    link="https://www.linkedin.com/in/iveschiba/"
                    imgProps={{ imgsrc: "https://media.licdn.com/dms/image/D4D03AQH68hEnHaoYiQ/profile-displayphoto-shrink_400_400/0/1705707734828?e=1717632000&v=beta&t=gb9_Th_ulKXRNOXrb3Ac-TW58kjkI4bA8oy69tMV-6o" }}
                    borders={true}
                />
            </div>
            <a className="block mt-3" href="https://github.com/Ellie-A-Oliveira/salesforce-page" target="_blank">Repositório Github</a>
        </IntegrantesStyled>
    );
}
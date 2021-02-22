import image from "../images"
import { LogoFerris, Opcoes} from "../styles/HeaderStyle"
import { Corpo, LogoCorpo} from "../styles/BodyStyle"

export default function HeaderFerris(){
    return(
        <LogoFerris>
            src ="../images/logo150.png"
            alt = "logo ferris"
            width = {280}
            height = {210}
        </LogoFerris>
        <Opcoes>
            <h3> Menu </h3>
            <h3> Cardápio </h3>
            <h3> Contato </h3>
            <h3> Redes Sociais </h3>
        </Opcoes>
        <Corpo>
            <h2> Redes Sociais </h2>
            <h2> burguer de Verdade @hamburgueriaferris </h2>
            <LogoCorpo>
                src="../images/logo1.png"
            </LogoCorpo>
        </Corpo>
    )
}
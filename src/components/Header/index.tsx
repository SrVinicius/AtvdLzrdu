import {useRouter} from "next/router";
import {CgAdidas} from "react-icons/cg";

const Header = () => {
    const router = useRouter();


    return(
        <div className="container">
            <CgAdidas onClick={() => router.push('/')}/>
        </div>
    )
}

export default Header;
import Registr from "./registr"
import { Link } from "react-router"

const Registrat = () => {
    return(
        <div>
            <div className="header">
              <Link to="/" className="link">Назад</Link>
            </div>
            <Registr/>
        </div>
    )
}

export default Registrat
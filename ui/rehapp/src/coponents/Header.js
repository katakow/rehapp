import { fontSize, shadows } from "@mui/system"


const Header = ({title}) => {
    return (
        <header>
            <h1 style = {headingStyle} > 
                WITAMY!
            </h1>
        </header>
    )
}

const headingStyle = {
    marginLeft: 60,
    color: 'rgba(106, 144, 100, 0.6)',
    fontSize: 64
}

export default Header;
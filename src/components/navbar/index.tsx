import logoIcon from "../../assets/logo.svg"
const Navbar = () =>{
    return(
        <nav>
            <div>
                <div>
                    <img src={logoIcon} alt="" />
                    <h4 className="text-3xl">Design Daily</h4>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
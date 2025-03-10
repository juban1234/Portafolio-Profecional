import { ItemNav } from "../../UI/ItemNav/ItemNav"
import { FaFacebook } from "react-icons/fa";


export const Footer = () => {
    return (
        <>
            <footer className="bg-blue-950  w-full h-25 flex flex-row justify-center items-center relative bottom-0 left-0">
                <p className="text-amber-50">
                    Desarrollado por:  Juan esteban grajales
                </p>
                <ItemNav
                    StyleLi={"list-none pl-5 fas fa-heart text-cyan-500"}
                    content={<FaFacebook />}
                />
                
                
            </footer>
        </>
    )
}

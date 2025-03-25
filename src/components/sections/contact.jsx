import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <main className="contact">
            <div>
                <h1>VITOR HUGO</h1>
                <h3>FrontEnd</h3>
                <h6 className="email">vitorhugoalvesmachado@hotmail.com</h6>
                <a
                    href="https://wa.me/+5551980560089"
                    target="_blank"
                    className="phone-number"
                >
                    <FaWhatsapp className="whatsapp" /> (51) 9 8056 0089
                </a>
            </div>
        </main>
    )
}

export { Contact }
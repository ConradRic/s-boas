import "./Header.css"

export default function Header (){
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>Só Boas</h1>
                    <span>Apenas Notícias Boas</span>
                </div>

                <nav className="nav">
                    <a className="nav-link" href="">Início</a>
                    <a className="nav-link" href="">Quem somos</a>
                    <a className="nav-link" href="">Política de privacidade</a>
                </nav>

                <div className="header-action">
                    <button>
                        Assine nossa NewsLetter
                    </button>
                </div>
            </div>
        </header>
    )
}
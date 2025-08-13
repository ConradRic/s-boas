import "./Footer.css"

export default function Footer () {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>So boas</h4>
                    <p>Sua fonte confiavel para notícias sustentáveis e conscientes. Informação que faz a diferença para um mundo melhor</p>
                    <div>
                        <a href="">📘</a>
                        <a href="">🐦</a>
                        <a href="">📷</a>
                        <a href="">💼</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Sobre</h4>
                    <ul>
                        <li>
                            <a href="">Nossa Missão</a>
                        </li>

                        <li>
                            <a href="">Equipe</a>
                        </li>

                        <li>
                            <a href="">Contato</a>
                        </li>

                        <li>
                            <a href="">Política de Privacidade</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>NewsLetter</h4>
                    <p>Receba as últimas notícias diretamente no seu e-mail</p>

                    <div className="newsletter-form">
                        <input type="email" placeholder="Seu e-mail" />
                        <button>Inscrever</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
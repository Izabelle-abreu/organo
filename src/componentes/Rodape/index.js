import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/izabelliita/'>
                            <img src='/imagens/instagram.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/izabelle-abreu-dev/'>
                            <img src='/imagens/linkedin.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/Izabelle-abreu'>
                            <img src='/imagens/github.png' alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/Logo (2).png' alt='Logo Organo'/>
            </section>
            <section>
                <p>Desenvolvido por Izabelle Abreu</p>
            </section>
        </footer>
    )
}

export default Rodape
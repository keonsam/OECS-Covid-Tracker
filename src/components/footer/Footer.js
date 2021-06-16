import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer" data-testid="footer">
            <p>Made with <span className="footer-heart">&#10084;</span> by{" "}
                <a target="_blank" href="http://https://github.com/keonsam/OECS-Covid-Tracker" rel="noreferrer">
                    Keon Samuel Github
                </a>
                <span className="removed">(opens in a new window)</span>
            </p>
        </footer>
    );
}

export default Footer;
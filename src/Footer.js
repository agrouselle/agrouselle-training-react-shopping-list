const Footer = ({ length }) => {
    const today = new Date()

    return (
        <footer>
            <p>{length} item(s)</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
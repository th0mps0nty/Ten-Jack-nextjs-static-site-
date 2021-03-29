import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Ten Jack</span> Home Inspections
            </h1>
            <p className={headerStyles.description}>
                Schedule an appointment today!
            </p>
        </div>
    )
}

export default Header

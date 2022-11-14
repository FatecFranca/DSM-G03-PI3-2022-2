import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Base = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Base
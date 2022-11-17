import Nav2 from "../../components/nav/nav";

const Base = ({ children }) => {
    return (
        <>
            <Nav2 />
            <main>
                {children}
            </main>
        </>
    )
}

export default Base
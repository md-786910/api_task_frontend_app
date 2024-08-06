import { Container } from 'react-bootstrap';
import NavbarTop from './Navbar'
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <NavbarTop />
            <Container fluid className="margin-top-container-body">
                <Outlet />
            </Container>

        </>
    )
}

export default Root

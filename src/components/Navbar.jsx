import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTaskContext } from './context/taskContext';
import { useEffect } from 'react';

function NavbarTop() {
    const navigate = useNavigate();
    const { handleShow, show, handleClose } = useTaskContext()
    const isUserLogin = true


    // if key press then show offcanvas 
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === ' ') {
                console.log({ event })
                if (show) {
                    handleClose()
                } else {
                    handleShow()
                }

            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])
    return (
        <>
            <Navbar className='bg-dark justify-content-center' data-bs-theme="dark" fixed='top'>
                <Container fluid>
                    <Navbar.Brand to="" className='fs-4 fw-bold text-success'>Task Overall</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/task">
                            Routine
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/target">
                            Target
                        </Nav.Link>
                    </Nav>
                    <Nav className='bg-danger rounded-2'>

                        {
                            !!isUserLogin &&
                            <Nav.Link onClick={() => {
                                handleShow()
                            }}>
                                Add Task
                            </Nav.Link>
                        }



                        {
                            !!isUserLogin &&
                            <Nav.Link onClick={() => {
                                // also remove from local storage
                                localStorage.removeItem("task_overall")
                                navigate("/login")
                                window.location.reload()

                            }}>
                                Logout
                            </Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarTop;
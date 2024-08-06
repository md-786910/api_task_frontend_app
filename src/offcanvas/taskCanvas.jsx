/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { createTask, updateTask } from '../axios/api';
import { alertError, alertMessage } from '../config/toast';
import { useTaskContext } from '../components/context/taskContext';

export default function TaskCanvas(props) {
    const titleRef = useRef(null);
    const summaryRef = useRef(null);
    const { show, handleClose, text, setRenderTask } = props;
    const { taskData } = useTaskContext()
    const [task, setTask] = useState({
        title: "",
        summary: "",
    })
    // handlechange
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTask({ ...task, [name]: value })
    }

    const handleSubmit = async (event) => {
        console.log("hit submit")
        event.preventDefault();
        if (!task.title.trim() || !task.summary.trim()) {
            return
        }
        try {
            let resp;
            if (text === "Update") {
                resp = await updateTask({ id: taskData?.id, ...taskData })
                if (resp.status === 200) {
                    setTask({
                        title: "",
                        summary: "",
                    })
                    alertMessage("Task updated successfully")
                }
            } else {
                resp = await createTask(task)
                if (resp.status === 201) {
                    setTask({
                        title: "",
                        summary: "",
                    })
                    alertMessage("Task created successfully")
                }
            }
            setRenderTask(Math.random())


        } catch (error) {
            alertError(error)
        }
    }


    useEffect(() => {
        if (text === "Update") {
            setTask({
                title: taskData?.title,
                summary: taskData?.summary,
            })
        }
        if (titleRef.current && summaryRef.current) {
            titleRef.current.focus();
            // summaryRef.current.focus();
        }

    }, [props])


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'Enter') {
                handleSubmit(event)
            }

        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [task])


    return (
        <>

            <Offcanvas show={show} onHide={handleClose} placement='end' key={text}
                className="bg-light-due"
                scrollable={true}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{text} Task </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task <span className='text-danger'>(Title)</span></Form.Label>
                            <Form.Control type="text" placeholder="com" name="title" value={task.title} onChange={(e) => handleChange(e)} ref={titleRef}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Task <span className='text-danger'>(Summary)</span></Form.Label>
                            <Form.Control as="textarea" rows={10} placeholder='Hii' name="summary" value={task.summary} onChange={(e) => handleChange(e)} ref={summaryRef}
                            />
                        </Form.Group>


                        <button className='btn btn-dark' >
                            {text} Task
                        </button>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



import React from "react";
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { logIn } from "../../rtk/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {


    const initialState = {
        name: "",
        password: '',
        image: '',
    }
    const [values, setValues] = useState(initialState);
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }
    const dispatch = useDispatch()
    return (
        <>
            <div className="grid grid-cols-1 items-center justify-items-center h-screen">
                <Card className="w-96 ">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Sign In
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Name" value={values.name} onChange={onChange} size="lg" type="text" name="name" />
                        <Input label="Password" size="lg" type="password" value={values.password} onChange={onChange} name="password" />
                        <Input label="image Url address" size="lg" type="text" value={values.image} onChange={onChange} name="image" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={() => { dispatch(logIn(values)) }} fullWidth>
                            Sign In
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don't have an account?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>

        </>
    )
}
export default Login;
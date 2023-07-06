import React from "react";
import { Alert } from "@material-tailwind/react";


const Error = () => {
    return (
        <>
            <div className="grid grid-cols-1 h-screen items-center justify-items-center ">
                <div className="w-[96]">
                    <Alert>
                        Sorry no Product math your filter search ... Clear the fiter and try again
                    </Alert>
                </div>
            </div>
        </>
    )
}
export default Error;


import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/fireBase";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Registration() {

    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegistration = e => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password)



        // reset error 
        setRegError('');
        setSuccess('')



        if (password.length < 6) {
            setRegError("Password should be at least 6 characters or longer ");
            return;
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                setSuccess('User Create successfully')


            })
            .catch((error) => {
                console.log('error', error)
                setRegError(error.message)
            })

    }

    return (
        <div>

            <div className="mx-auto md:w-1/2">
                <h2 className="text-xl mb-8">This Registration is Properly Not Working ! . Go to <Link to={'/heroRegistration'} className="text-rose-700">Hero Registration</Link></h2>

                <form onSubmit={handleRegistration}>

                    <input className="mb-4 w-3/4 py-2 px-4 rounded-md" placeholder="Email Address" type="email" name="email" id="" required />
                    <input className="mb-4 w-3/4 py-2 px-4 rounded-md" type="password" placeholder="Password" name="password" id="" required />
                    <input className=" btn btn-secondary  mb-4 w-3/4 py-2 px-4 cursor-pointer" type="submit" name="" id="" required />


                </form>

                {
                    regError && <p className="text-2xl text-red-700">{regError}</p>
                }
                {
                    success && <p className="text-2xl text-green-700">{success}</p>
                }
            </div>



        </div>
    )
}

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/fireBase";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HeroRegistration() {

    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleHeroRegistration = e => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value
        const accepted = e.target.terms.checked
        console.log(email, password, accepted)



        // reset error 
        setRegError('');
        setSuccess('')


        if (password.length < 6) {
            setRegError("Password should be at least 6 characters or longer ");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError("Your Password Should be Upper Case");
            return;
        }
        else if (!accepted) {
            setRegError("Please accept our terms & condition")
            return;
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                setSuccess('User Login successfully')


                // Send email Verification
                sendEmailVerification(result.user)
                .then( () => {
                    alert("Check Your Email Verification")
                })


            })
            .catch((error) => {
                console.log('error', error)
                setRegError(error.message)
            })



    }



    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Hero Registration</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleHeroRegistration}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <label className=" input input-bordered flex items-center gap-2">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        // className="input input-bordered"
                                        required

                                    />
                                    {/* <input type="password" className="grow" value="password" /> */}
                                    <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                        {
                                            showPassword ? <FaRegEye className="ml-20" /> : <FaRegEyeSlash className="ml-20" />
                                        }
                                    </span>
                                </label>

 

                                <div className="items-center">
                                    <input type="checkbox" name="terms" id="terms" className=" cursor-pointer " />
                                    <label className="ml-2" htmlFor="terms">Accept our <a href="" className="link-hover">Terms & Condition</a></label>

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>

                        {
                            regError && <p className="text-2xl text-red-700">{regError}</p>
                        }
                        {
                            success && <p className="text-2xl text-green-700">{success}</p>
                        }
                        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                            <Link to={'/login'} className="underline  text-rose-500">Log in</Link>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

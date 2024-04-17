import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)



    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email, name, photo, password);



        // create user
        createUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-10 font-poppins">Please Register</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                            type="text" 
                            placeholder="Your Name" 
                            name="name"
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input 
                            type="text" 
                            placeholder="Photo URL" 
                            name="photo"
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email" 
                            placeholder="Your Email" 
                            name="email"
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            className="input input-bordered" required />
                        </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    
                </div>
                <p>Already have an account please <Link className="text-blue-600" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
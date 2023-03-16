import "./Form.css"
import {useForm} from "react-hook-form"
export default function Form (){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", {required: true, maxLength:5})}
                    />
                    {errors.firstName && <p>Please, the firstName cannot pass 5 characters</p>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        placeholder='LastName'
                        type="text"
                        {...register("lastName", {required: true, maxLength: 5})}
                    />
                        {errors.LastName && <p>Please, the firstName cannot pass 5 characters</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        placeholder='email'
                        type="text"
                        {...register("email", {required:true,  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                    />
                        {errors.pasword && <p>Please check your email</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        placeholder='password'
                        type="text"
                        {...register("password", {required:true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })}
                    />
                        {errors.pasword && <p>Please check your password</p>}
                </div>
                <div>
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
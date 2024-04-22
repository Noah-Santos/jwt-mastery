import {redirect} from 'next/navigation';
import {register} from '../lib';
import styles from '../Styles/form.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import Link from 'next/link';

export default async function Login() {
    return (
        <section className={styles.cont}>
            <form className={styles.form} action={async (formdata)=>{
                'use server';
                if(!await register(formdata)){
                    redirect('/');
                }
            }}>
                <h1 className={styles.title}>Register</h1>
                <div className={styles.infoCont}>
                <label htmlFor="username" className={styles.label}>Username:</label>
                <input type="username" name="username" id='username' placeholder='Username' className={styles.input}/>
                <BsFillPersonFill className={styles.icon}></BsFillPersonFill>
                </div>
                <div className={styles.infoCont}>
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input type="password" name="password" id="password" placeholder='Password' className={styles.input}/>
                <BiSolidLockAlt className={styles.icon}></BiSolidLockAlt>
                </div>
                <button type="submit" className={styles.button}>Register</button>
                <p className={styles.switchText}>Already have an account? <Link href='/' className={styles.switch}>Login here</Link></p>
            </form>
        </section>
    );
}

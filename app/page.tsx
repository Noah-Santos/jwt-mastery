import {redirect} from 'next/navigation';
import {login} from './lib';
import styles from './Styles/form.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import Link from 'next/link';

export default async function Login() {
  return (
    <section className={styles.cont}>
      <form className={styles.form} action={async (formdata)=>{
        'use server';
        if(await login(formdata)){
          redirect('/home');
        }
      }}>
        <h1 className={styles.title}>Login</h1>
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
        <button type="submit" className={styles.button}>Login</button>
        <p className={styles.switchText}>Don't have an account? <Link href='/register' className={styles.switch}>Register here</Link></p>
      </form>
    </section>
  );
}

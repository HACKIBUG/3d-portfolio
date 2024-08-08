import React, { useState,useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Mamma  from '../Models/Mamma';
import  Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef (null);
  const [form,setForm]=useState({name:'',email:'',message:''})
  const [isLoading,setIsLoading]=useState(false);
  const [currentAnimation,setCurrentAnimation]=useState("idle");
  const {alert,showAlert,hideAlert} = useAlert();
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Surekha",
        from_email:form.email,
        message:form.message,
        to_email:'sakthivelsurekha@gmail.com',
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      showAlert({
        show:true,
        text:'The message was sent successfully👍',
        type:'success',
      });

      setTimeout(()=>{
      hideAlert();
        setCurrentAnimation("idle");
        setForm({name:'',email:'',message:''});
      },[3000]);
      
    }).catch((error) =>{
      setIsLoading(false);
      setCurrentAnimation("idle");
      console.log(error);
      setIsLoading(false);
      showAlert({
        show:true,
        text:'The message did not reach me🤔',
        type:'danger',
      });

    })
  };
  const handleFocus=()=> setCurrentAnimation("walk");
  const handleBlur=()=>setCurrentAnimation("idle");
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
     {alert.show && <Alert {...alert}/>}
    

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'> Get In Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} action="">
          <label className='text-black-600 font-semibold'>Name
            <input className='input' name="name" placeholder='Maya' required type="text" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
          </label>
          <label className='text-black-600 font-semibold'>Email
            <input className='input' name="email" placeholder='Maya123@gmail.com' required type="email" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
          </label>
          <label className='text-black-600 font-semibold'>Your Message
            <textarea className='input' name="message" placeholder='Tell me How may I assist You' required type="text" value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></textarea>
          </label>
          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur}>{isLoading ? 'Sending....':'Send Message'}</button>

        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={6} />
          <ambientLight intensity={1} />
          <pointLight position={[5,13,0.6]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Mamma
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact


import React, { useEffect,useRef, useState } from "react";
import Input from "./Components/input";
import {AiFillFacebook} from "react-icons/ai"


function App() {

  const ref= useRef()

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
        total =  images.length,
        current = 0 
        const imageSlider = () => {
          if(current > 0){
            images[current - 1 ].classList.add('opacity-0') 
          }else{
            images[total-1].classList.add('opacity-0') 
          }
          images[current].classList.remove('opacity-0') 
          if( current === total -1){
            current = 0
          }
          else{
            current +=1
          }
        }
        imageSlider()
        let interval = setInterval(imageSlider,3000) 
        return () => {
          clearInterval(interval)
        }
  },[ref])

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
        <div className='h-full w-full flex items-center gap-x-8 justify-center flex-wrap overflow-auto'>

            <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32_634.15px] bg-[top_left_-46px]">
              <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
                <img alt="" className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear " src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"/>
                <img alt="" className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear " src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"/>
                <img alt="" className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear " src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"/>
                <img alt="" className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear " src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"/>
              </div>
          
            </div>
            <div className="w-[350px] grid gap-y-3">

              <div className=" bg-white border p-[40px] pb-2 ">
                <a href="/" className="flex justify-center mb-8">
                  <img alt="" className="h-[51px] " src="https://instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"/>
                </a>
                
                  <form className="grid gap-y-1.5">
                    <Input type="text" required={true} onChange={(event) => setUsername(event.target.value)} value={username} label="Telefon numarası, kullanıcı adı veya e-posta" />
                    <Input type="password" required={true} onChange={(event) => setPassword(event.target.value)} value={password}  label="Şifre"  />
                      <button type="submit" disabled={!username || !password} className="h-[30px] w-full my-[8px] rounded-sm text-white font-medium bg-brand disabled:opacity-50" >Giriş Yap</button>

                      <div className="flex items-center">
                        <div className="h-px bg-gray-300 flex-1"/>
                        <span className="px-4 text-[13px] text-gray-400 font-semibold " >YA DA</span>
                        <div className="h-px bg-gray-300 flex-1"/>
                      </div>
                      <a href="#" className="flex justify-center items-center gap-x-2 font-semibold text-facebook text-sm my-2">
                        <AiFillFacebook size={20} className="text-facebook"/>
                            Facebook ile Giriş Yap
                        
                      </a>
                      <a href="#" className="text-link flex justify-center text-xs my-3">Şifreni mi unuttun ?</a>
                      
                  </form>
                </div>
              <div className="bg-white border p-4 text-sm text-center">
                    Hesabın yok mu? <a href="#" className=" font-semibold text-brand ">Kaydol</a>
                </div>
            </div>
        </div>
  );
}

export default App;

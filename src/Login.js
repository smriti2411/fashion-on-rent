import React from 'react'
import "./index.css"
import image from "./Image/b.PNG"
import logo from "./Image/logo.PNG"
import Signup from './Signup'
const Login = () => {
    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-blue-light box-border">
        <div>
        <img src={image} alt="abc" className="max-h-full w-96 rounded-bl-2xl rounded-tl-2xl shadow-2xl m" />
        </div>
  
  <div className="bg-white-light rounded-br-2xl rounded-tr-2xl w-96 shadow-2xl ">
  <form className="h-auto" action="#" method="POST">
  <img className=" max-h-16 mx-auto mt-6 "
            src={logo}
            alt="Workflow"
          />
    <h2 className="mt-6 text-center text-3xl text-gray-900 font-normal mb-6">Login</h2>
    <input type="hidden" name="remember" defaultValue="true" />
          <div>
          <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <label htmlFor="email-address" className="sr-only">
                    Username or Phone Number
                    </label>
                    <img src="https://s3-alpha-sig.figma.com/img/1c76/0f4c/ff78e00997fa01e06a4a7fdbba86cbc8?Expires=1633910400&Signature=EMekby7rxKLw9~y57i4zV9kOKzRUU5yLUJlbtTPc4Qmd6BKWXWSeE2cIeAuGF3CfHfk-C37mtOuK3kOCww3ErculqXj7ahYcjykS4gVyY~JtTNzfo36gBwJgYINbhG6pTyPIAgLMmV4DGQEgtsYmijpt5MtBwRJvcSRRmK17a6DgicDlhC5T1GkdUYZunO8LbUlPXJ888FCegKSzrPLuWGucPtgKWBn71kuzFbxjVNb1C7bXMsgNKTfkD4GvSehbJrwwhuZoyqhAJx7eXuj2-ehCY5f66O1GpMzpUJHY2rrYkwyN5u0lYq2fng~tC9Ng4LRTB-j7iiTX4uYKaidiaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                        
                        <input  id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                      
                        placeholder="Username or Phone Number"
                            class="-mx-6 bg-blue-light appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                    </div>
                </div>
            <div className="mt-7 space-y-4">
            
            <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/a900/5091/9948fcf7aa3aa2f8bfe6410181f01a4f?Expires=1633910400&Signature=X5whOdqpAeM8l3NMtQSK32Psh~sE9KGW6r~UxliEi37U5mP32w~SXM5mBBOH32MrHndfh8NDYLiVzhPj01kvzSzw-Du0spgCSr9i11FFpPLAnBty2TPNfzWxTc6QvL7tTo6erI1zq55Y3YPTXjuwIIj0dfwoE3yACIt34Fs52iD~9kCOUCFqPeIDhPZQquaKrJCKe-ZyF9~7tNYkz-FfVryfVpCOWOhs9GftJBUgx0jWvPALpn2TzaDDRwfc3BlBVrCloc8dasZfZiXRIiz9tTJoS3gC5VAzBJjxsARKefSL-EcsRhb0sQgIIOyusmtSzmmuwBLQd0GJSy4jKYWdyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="password" className="sr-only">
                Password
              </label>
                        <input id="password"
                name="password"
                type="password"
                autoComplete="current-password"
              
                placeholder="Password"
                class="-mx-6 bg-blue-light appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                    </div>
                </div>
            </div>
          </div> 
          <div className="flex items-center justify-between">
            
            <div className="mt-3 ml-24 mb-8 text-xs">
              <a href="#" className="font-normal text-gray-lightest">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-red-light m-auto group relative flex justify-center py-1.5 px-14 border border-transparent text-sm font-normal rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
            Login
            </button>
          </div>
          <div class="flex justify-between items-center mt-6">
            <hr class="w-24 ml-auto border-gray-light" /> <span class="p-2 text-gray-440 text-xs">OR</span>
            <hr class="w-24 mr-auto border-gray-light" />
        </div>
        
        <div class="w-3/5  mx-24 mt-5">
                  <div class="flex items-center">
                  <img src="https://s3-alpha-sig.figma.com/img/1ea2/e220/39c5118f1714336fda778b1d9ff4b439?Expires=1633910400&Signature=MKRx3VnqJ8E6xkna7Ok7pBBu4Yl2EV2VwhGVYLs1tw2UtA-15k91NwE9s~Pg9LBkjdVp2CRX7EyAw01wIdkGu6JnkYot6Kx7sPlEJjH0ERGdP-qkvoyW~AQiSUbcapwSJVc5PNluxTg0E5m~nle9r2GoMVujcbU83S0ldrclIS06xKl2sKOGA6vrmTFLd6HGwAtkmCFgqQivTyIZ2yp~-wJuMC2VidqeqPnOzDnTHtRDXEChB0OV20dH-G5z8AUJgd9ecl~6FY1rxnfY5uWS33AHWgAj5DBrxuVoTO5jz1GJRtFhv6Q9Yfu3stjWgo-dqSUKdJ6GJr4e-kvR6Y8vew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class=' fill-current text-gray-500 text-xs z-10 h-7  rounded-2xl'/>
                    <a href="https://accounts.google.com/ServiceLogin/signinchooser?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&flowName=GlifWebSignIn&flowEntry=ServiceLogin"> 
                        <input  id="submit"
                        name="submit"
                        type="submit"
                        value="LOGIN WITH GOOGLE"
                        placeholder="LOGIN WITH GOOGLE"
                        class="cursor-pointer -mx-6 bg-red-dark appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-white-light focus:outline-none focus:z-8 text-xs" />
                    </a>   
                    </div>
       </div>
      
          <div className="pt-3 text-center my-7"> 
          <span className="text-gray-600 text-xs w-2/3">New Customer?
          </span>
          <button className="text-red-dark text-xs">Create a Account</button> 
          </div> 
          </form>   
  </div>
        </div>
        
        </>
    )
}

export default Login

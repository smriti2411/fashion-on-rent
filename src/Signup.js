import React, { useState } from 'react'
import "./index.css"
import image from "./Image/a.PNG"
import logo from "./Image/logo.PNG"
import validate from './valid';
const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    
  };



  return (
        <>
  <div className="min-h-screen flex items-center justify-center bg-red-bg box-border overflow-hidden sm:min-h-screen">
        <div>
        <img src={image} alt="abc" className="max-h-full w-96 rounded-bl-2xl rounded-tl-2xl shadow-2xl" />
        </div>
  
  <div className="bg-white-light rounded-br-2xl rounded-tr-2xl w-96 max-h-full shadow-2xl">
  <h2 className="mt-5 text-center text-2xl text-gray-900 font-normal mb-5">Sign Up</h2>
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
       <div class="flex justify-between items-center mt-4 mb-4">
            <hr class="w-24 ml-auto border-gray-light" /> <span class="p-2 text-gray-440 text-xs">OR</span>
            <hr class="w-24 mr-auto border-gray-light" />
        </div>
  <form className="h-auto" onSubmit={handleSubmit} >
    
    <input type="hidden" name="remember" defaultValue="true" />
          <div>
          <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <label htmlFor="name" className="sr-only">
            Name
            </label>
                    <img src="https://s3-alpha-sig.figma.com/img/1c76/0f4c/ff78e00997fa01e06a4a7fdbba86cbc8?Expires=1633910400&Signature=EMekby7rxKLw9~y57i4zV9kOKzRUU5yLUJlbtTPc4Qmd6BKWXWSeE2cIeAuGF3CfHfk-C37mtOuK3kOCww3ErculqXj7ahYcjykS4gVyY~JtTNzfo36gBwJgYINbhG6pTyPIAgLMmV4DGQEgtsYmijpt5MtBwRJvcSRRmK17a6DgicDlhC5T1GkdUYZunO8LbUlPXJ888FCegKSzrPLuWGucPtgKWBn71kuzFbxjVNb1C7bXMsgNKTfkD4GvSehbJrwwhuZoyqhAJx7eXuj2-ehCY5f66O1GpMzpUJHY2rrYkwyN5u0lYq2fng~tC9Ng4LRTB-j7iiTX4uYKaidiaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                        
                        <input  id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Name*"
                        value={values.name}
            onChange={handleChange}
                        class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" 
                        required 
                        />
                    </div>
                </div>
            <div className="mt-6 space-y-4">
            
            <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/1c76/0f4c/ff78e00997fa01e06a4a7fdbba86cbc8?Expires=1633910400&Signature=EMekby7rxKLw9~y57i4zV9kOKzRUU5yLUJlbtTPc4Qmd6BKWXWSeE2cIeAuGF3CfHfk-C37mtOuK3kOCww3ErculqXj7ahYcjykS4gVyY~JtTNzfo36gBwJgYINbhG6pTyPIAgLMmV4DGQEgtsYmijpt5MtBwRJvcSRRmK17a6DgicDlhC5T1GkdUYZunO8LbUlPXJ888FCegKSzrPLuWGucPtgKWBn71kuzFbxjVNb1C7bXMsgNKTfkD4GvSehbJrwwhuZoyqhAJx7eXuj2-ehCY5f66O1GpMzpUJHY2rrYkwyN5u0lYq2fng~tC9Ng4LRTB-j7iiTX4uYKaidiaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="username" className="sr-only">
                Username
              </label>
                        <input id="Username*"
                name="username"
                type="text"
                autoComplete="off"
                value={values.username}
            onChange={handleChange}
                placeholder="Username*"
                class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
               
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-4">
            
            <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/49ff/d358/8c341ea010f348b6c0352d736b580ffe?Expires=1633910400&Signature=RuIFkcYUGTJ12P2YLAsVBt6ao--wkYbIH8mzbWkun5W8PFYNAoGWMSvb-9lcwDGMeRLqCN1gyq376D2n5Yy9mdduutDQ~75gKRe2YnY73asYxVNt2ZlAEDU9NYz9LqshON4Ryt7Ba93TTy88Er-txfMdvvyBskfKpcsChay7HJcnlbn18DrfOGIcK5eMknLaKY~4n0n5hEc-GpFzT4Bh6m2~O8WNXAN63xp1FO2yo8DLgrmEr82QlJljFdjkP6KvRC0EtRbS8nCDrar2-6TitQUhBPySB3fsdFuGlsW4YF~FvHsd46PDydp-koeet4eVjLOYXmzCvyV6AKvW~ncEew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="email" className="sr-only">
                email
              </label>
                        <input id="email"
                name="email"
                type="email"
                autoComplete="off"
                value={values.email}
            onChange={handleChange}
              placeholder="Email (Optional)"
                class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
               
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-4">
            
            <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/0004/8206/7848f074646d703a6d22c090699db948?Expires=1633910400&Signature=NRmYt5Pq-TnotL1sXmwoucgBtYH07cUJnJ6UfWV0c7cYibsGrOCtlo0n8Buv6xQ7ROQYE~29hjk457r3LI9bxRZgLvXcLVz49CWV39QFSccf8-SBe9ibfkpju2mJZ62kAeHJQbTvtUBttCAsPxQXsAu2CayMfE0x8-gBSWre3Yiy2K9aZXTbQoCdLEGTkAMCgdFCN4O9vIYdqXhQGhJZx3RdYTCFCo5YZcGjuRZlgdreeGI6F-CLNQIBxTisZa1xUNbnNhR7mGmtw6tyaafDQPVEQ9A0WiogO~e7KXlSANclkRhObzMIwNB4t1zrSHzK47mGigbM4PsrTTmFbRX9xA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="phone" className="sr-only">
                phone
              </label>
                        <input id="phone"
                name="phone"
                type="tel"
                
                value={values.phone}
            onChange={handleChange}
                pattern="[0-9]{10}"
              placeholder="Phone Number*"
                class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                    </div>
                </div>
            </div>
            <div className="mt-6 space-y-4">
            
            <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/a900/5091/9948fcf7aa3aa2f8bfe6410181f01a4f?Expires=1633910400&Signature=X5whOdqpAeM8l3NMtQSK32Psh~sE9KGW6r~UxliEi37U5mP32w~SXM5mBBOH32MrHndfh8NDYLiVzhPj01kvzSzw-Du0spgCSr9i11FFpPLAnBty2TPNfzWxTc6QvL7tTo6erI1zq55Y3YPTXjuwIIj0dfwoE3yACIt34Fs52iD~9kCOUCFqPeIDhPZQquaKrJCKe-ZyF9~7tNYkz-FfVryfVpCOWOhs9GftJBUgx0jWvPALpn2TzaDDRwfc3BlBVrCloc8dasZfZiXRIiz9tTJoS3gC5VAzBJjxsARKefSL-EcsRhb0sQgIIOyusmtSzmmuwBLQd0GJSy4jKYWdyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="password" className="sr-only">
                Password
              </label>
                        <input id="password"
               type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
                placeholder="Password*"
                class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                     
                    </div>
                    
                </div>
            </div>
            <div className="mt-6 space-y-4">
            
            <div class="w-3/5 mx-auto">
                    <div class="flex items-center">
                    <img src="https://s3-alpha-sig.figma.com/img/a900/5091/9948fcf7aa3aa2f8bfe6410181f01a4f?Expires=1633910400&Signature=X5whOdqpAeM8l3NMtQSK32Psh~sE9KGW6r~UxliEi37U5mP32w~SXM5mBBOH32MrHndfh8NDYLiVzhPj01kvzSzw-Du0spgCSr9i11FFpPLAnBty2TPNfzWxTc6QvL7tTo6erI1zq55Y3YPTXjuwIIj0dfwoE3yACIt34Fs52iD~9kCOUCFqPeIDhPZQquaKrJCKe-ZyF9~7tNYkz-FfVryfVpCOWOhs9GftJBUgx0jWvPALpn2TzaDDRwfc3BlBVrCloc8dasZfZiXRIiz9tTJoS3gC5VAzBJjxsARKefSL-EcsRhb0sQgIIOyusmtSzmmuwBLQd0GJSy4jKYWdyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" class='ml-4 fill-current text-gray-500 text-xs z-10 h-4 opacity-60 '/>
                    <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input id="password"
               type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
                placeholder="Confirm Password*"
                class="-mx-6 bg-red-lightest appearance-none rounded-2xl relative block px-8 py-1.5 border border-none placeholder-gray-500 text-gray-light focus:outline-none focus:z-8 text-xs" />
                   
                    </div>
                    {errors.password2 && <alert className="text-xs text-gray-light ml-3 ">{errors.password2}</alert>}
                </div>
            </div>
          </div> 
        
          <div>
            <button
              type="submit"
              className="bg-blue-lightest my-6 m-auto group relative flex justify-center py-1.5 px-14 border border-transparent text-sm font-normal rounded-2xl text-red-txt focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
            Sign Up
            </button>
          </div>
         </form>   
  </div>
        </div>
        
        </>
    )
}

export default Signup

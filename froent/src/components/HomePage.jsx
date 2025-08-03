import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from "@emailjs/browser"

const HomePage = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_f15qb93', 'template_juq9ymd', form.current, 'Npg_Ev4WsAb01SfUo')
    .then(()=>{
      alert("Message sent successfully!")
      form.current.reset();
    }),
    (error) => {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    }
  }

  const timelineItemsList = [
 
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: 'chat-app',
    projectTitle: 'chat-app',
    description:
      'this application used to communication with friends and family.',
    imageUrl: 'https://i.ibb.co/JRm22Rrw/Screenshot-2025-07-16-160207.png',
    projectUrl: 'https://chat-app-2-a0dt.onrender.com',
  },{
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: 'chat-app',
    projectTitle: 'chat-app',
    description:
      'this application used to communication with friends and family.',
    imageUrl: 'https://i.ibb.co/JRm22Rrw/Screenshot-2025-07-16-160207.png',
    projectUrl: 'https://chat-app-2-a0dt.onrender.com',
  },{
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: '21 DECEMBER 2020',
    projectTitle: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    projectUrl: 'https://tourismapp.ccbp.tech/',
  },
  
  {
    id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
    categoryId: 'PROJECT',
    title: '7 JANUARY 2021',
    projectTitle: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',

    projectUrl: 'https://fm.ccbp.tech/',
  },
  
  {
    id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
    categoryId: 'PROJECT',
    title: '6 FEBRUARY 2021',
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',

    projectUrl: 'https://todossapp.ccbp.tech/',
  },
  {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: '15 FEBRUARY 2021',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',

    projectUrl: 'https://wikiseaarch.ccbp.tech/',
  },
  
  {
    id: '7bc3f006-f0f1-4574-924b-17c480556727',
    categoryId: 'PROJECT',
    title: '20 MARCH 2021',
    projectTitle: 'Move Messenger',
    description:
      'The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.',
    imageUrl:
      'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
          projectUrl: 'https://movemessengers.ccbp.tech/',
  },
  
  {
    id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
    categoryId: 'PROJECT',
    title: '26 MAY 2021',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',

    projectUrl: 'https://nxtz.ccbp.tech/',
  },
]
const navigate = useNavigate();
useEffect(()=>{
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login")
  }
})

  return (
    <div className='min-h-screen bg-black text-white flex flex-col'>
      <nav className='flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 w-full'>
        <h1 className='text-2xl'>Portfolio</h1>
        <ul className='flex gap-5 '>
          <li><a href="">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        <div className="p-8 px-12 flex flex-col lg:flex-row items-center justify-between min-h-screen bg-black text-white">
          <div className="mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <h1 className="leading-tight font-extrabold">
              Hello, it's me <span className="text-blue-500">Harish Adepu</span>
            </h1>
            <h2 className="mt-2 font-semibold">Full-stack Developer</h2>
            <p className="text-2xl sm:text-base text-gray-400">
              I am a full-stack developer with a <span className="text-white font-medium">MERN stack</span> skill set.
            </p>
          </div>

          <img
            src="https://www.bing.com/th/id/OIP.1AtdUWWuJRWpHhZCqjPKkwHaE8?w=194&h=180&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.5&pid=3.1&rm=2"
            alt="Portrait of Harish Adepu"
            className="h-[200px] w-[300px] object-cover rounded-xl sm:mt-6 shadow-lg"
          />
</div>

      <section className="min-h-screen text-center" id="skills">
        <h2 className='text-2xl font-bold p-3'>My <span>Skills</span></h2>
        <div className="flex flex-wrap items-center justify-center p-5 gap-5 text-center">
            <div className="flex flex-col rounded-xl m-3 text-center w-[300px] gap-3 hover:scale-105 transition-all duration-300 bg-gray-900">
                <h3 className='text-xl pt-2'>Frontend</h3>
                <div className="flex flex-wrap gap-2 text-gray-500 p-4">
                  <span className='border p-2 rounded'>React JS</span>
                    <span className="border p-2 rounded">HTML</span>
                    <span className="border p-2 rounded">CSS</span>
                    <span className="border p-2 rounded">JavaScript</span>
                    <span className="border p-2 rounded">Bootstrap</span>
                    <span className="border p-2 rounded">Redux</span>
                </div>
            </div>
            <div className="flex flex-col rounded-xl m-3 w-[300px] text-center gap-3 hover:scale-105 transition-all duration-300 bg-gray-900">
                <h3 className='text-xl pt-2'>Backend & Database</h3>
                <div className="flex flex-wrap gap-2 text-gray-500 p-4"><span className='border p-2 rounded'>Node JS</span>
                    <span className='border p-2 rounded'>Express JS</span>
                    <span className='border p-2 rounded'>Python</span>
                    <span className='border p-2 rounded'>MySQL</span>
                    <span className='border p-2 rounded'>MongoDB</span>
                    <span className='border p-2 rounded'>Postgresql</span>
                </div>
                
            </div>
            <div className="flex flex-col rounded-xl m-3 w-[300px] text-center gap-3 hover:scale-105 transition-all duration-300 bg-gray-900">
                <h3 className='text-xl pt-2'>Frame Works & Tools</h3>
                <div className="flex flex-wrap gap-2 text-gray-500 p-4"><span className='border p-2 rounded'>Git</span>
                    <span className='border p-2 rounded'>GitHub</span>
                    <span className='border p-2 rounded'>VS Code</span>
                    <span className='border p-2 rounded'>Postman</span>
                </div>
            </div>
        </div>
    </section>
    <div className='flex flex-col justify-center items-center p-5' id='projects'>
      <h1 className='text-2xl font-bold'>Projects</h1>
      <ul className='flex flex-wrap justify-center'>{timelineItemsList.map(item=>(
      <li key={item.id} className='w-[300px] m-3 p-3 bg-gray-800 rounded-lg hover:scale-105 transition-all duration-300'>
        <div>
          <img src={item.imageUrl} alt={item.title} className='w-[300px] h-[200px] object-cover rounded-lg' />
          <h2 className='text-lg font-bold'>{item.projectTitle}</h2>
          <p className='text-sm text-gray-500'>{item.description}</p>
          <a href={item.projectUrl} className='text-blue-500'>Project live</a>
        </div>
      </li>
    ))}

    </ul>
    </div>
    <section className="flex flex-col justify-around min-h-screen items-center" id="contact">
        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center p-5 gap-4 w-full">
                <h2 className='text-2xl font-bold'>Contact <span className='text-blue-500'>Me</span></h2>
                <p>Let's Work Together</p>
                <p>Feel free to reach out to me for any<br/> quetions or opportunities!</p>
                <p><strong>Email:</strong> adepuuharish@gmail.com</p>
                <p><strong>Phone:</strong> 8099913922</p>
                
            </div>
            <div className="flex flex-col justify-center items-center p-5 w-full">
                <form action="#" ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 w-full max-w-md'>
                    <input className='bg-gray-900 p-3 rounded-lg outline-none' type="text" name='user_name' placeholder="Enter Your Name" required/>
                    <input className='bg-gray-900 p-3 rounded-lg outline-none' type="email" name='user_email' placeholder="Enter Your Email" required/>
                    <input className='bg-gray-900 p-3 rounded-lg outline-none' type="text" name='subject' placeholder="Enter Your Subject" required/>
                    <textarea placeholder="Enter Your Message" className='bg-gray-900 p-3 rounded-lg outline-none' name='message' required></textarea>
                    <button type="submit" className="bg-blue-600 p-4 rounded-xl hover:bg-blue-400 cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    </section>

    </div>


  )
}

export default HomePage
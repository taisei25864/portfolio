import './App.css';
import SkillCircle from "./components/skillCircle.js"
import react from "./images/react.PNG"
import django from "./images/django.PNG"
import fastapi from "./images/fastapi.PNG"
import flask from "./images/flask.PNG"
import js from "./images/js.PNG"
import python from "./images/python.PNG"
import rails from "./images/rails.PNG"
import ruby from "./images/ruby.PNG"
import vue from "./images/vue.PNG"


function App() {
  return (
    <div className="w-96 md:w-[600px] mx-auto">
      <h1 className="text-7xl font-body">
        Taisei Isobe 
      </h1>
      <div>
        <div className='mt-16 bg-gray-700'>
          <p className='text-xl border-2 rounded-xl flex justify-center'>Hello, thank you for visiting my portfolio!</p>
        </div>
        <div className='mt-16'>
          <h2 className='text-3xl underline mb-4'>About me</h2>
          <p>I'm majoring in Information Technology at Kwansei Gakuin University. <br/>
            I'm interested in reinforcement learning, networks and full-stack technology.
          </p>
        </div>
        <div className='space-y-4 mt-16'>
          <h2 className='text-3xl underline'>Bio</h2>
          <p>2023&emsp;Born in Aichi, Japan.</p>
          <p>2021&emsp;Enroll at Kwansei Gakuin University(関西学院大学)</p>
          <p>2023.8&emsp;DMM Group intern</p>
          <p>2023.9&emsp;Sansan Intern </p>
          <p>2023.10~&emsp;I'm interning at COMSQUARE</p>
          <p>2023.11~&emsp;I'm interning at JBA(日本ビジネスアート)</p>
        </div>
        <div className='space-y-4 mt-16'>
          <h2 className='text-3xl underline'>Award</h2>
          <p>2023.2&emsp;関西ビギナーズハッカソン / 最優秀賞</p>
          <p>2023.9&emsp;Sansan Tech Internship SPARK / 2位</p>
        </div>
        <div className='space-y-4 mt-16'>
          <h2 className='text-3xl underline'>Skills</h2>
          <p>2023.2&emsp;関西ビギナーズハッカソン / 最優秀賞</p>
          <p>2023.9&emsp;Sansan Tech Internship SPARK / 2位</p>
        </div>

        <div className='mt-16'>
          <div className='text-xl'>
            <SkillCircle
              language={'frontend'}
              borderColor={'border-frontend'}
              bgColor={'bg-frontend'}
            />
          </div>
          <div className='flex flex-row flex-wrap items-end'>
            <div className='m-4'>
              <img src={react} className='w-24 mb-2'/>
              <SkillCircle
                language={'React'}
                borderColor={'border-frontend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={vue} className='w-24 mb-2'/>
              <SkillCircle
                language={'Vue'}
                borderColor={'border-frontend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={js} className='w-24 mb-2'/>
              <SkillCircle
                language={'JS'}
                borderColor={'border-frontend'}
                bgColor={'bg-black'}
              />
            </div>
          </div>

          <div className='text-xl mt-10'>
            <SkillCircle
              language={'backend'}
              borderColor={'border-backend'}
              bgColor={'bg-backend'}
            />
          </div>
          <div className='flex flex-row flex-wrap items-end'>          
            <div className='m-4'>
              <img src={python} className='w-24 mb-2'/>
              <SkillCircle
                language={'Python'}
                borderColor={'border-backend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={django} className='w-24 mb-2'/>
              <SkillCircle
                language={'Django'}
                borderColor={'border-backend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={flask} className='w-24 mb-2'/>
              <SkillCircle
                language={'Flask'}
                borderColor={'border-backend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={fastapi} className='w-24 mb-2'/>
              <SkillCircle
                language={'Fast API'}
                borderColor={'border-backend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={ruby} className='w-24 mb-2'/>
              <SkillCircle
                language={'Ruby'}
                borderColor={'border-backend'}
                bgColor={'bg-black'}
              />
            </div>
            <div className='m-4'>
              <img src={rails} className='w-24 mb-2'/>
              <SkillCircle
                language={'Rails'}
                borderColor={'border-backend'}
                bgColor={'bg-black'}
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 text-lg">
            <p>If you have any questions and offers, please contact via gmail</p>
          </div>
          <div className="flex justify-center mt-24 mb-10">
            <p>© 2023 Taisei Isobe. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
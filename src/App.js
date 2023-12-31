import './App.css';
import React from 'react';
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
import profile from "./images/profile.PNG"
import Particles from './components/Particles.js'


function App() {
  return (
    <div>
      <Particles className="absolute top-0 left-0 w-full h-full z-[-1]" />
      <div className="w-96 md:w-[600px] mx-auto font-bold">
        <div className="flex flex-row mt-10">
          <img src={profile} className='w-40 mr-10 ml-5'/>
          <h1 className="text-6xl font-body flex items-center font-georgia">
            Taisei Isobe 
          </h1>
        </div>
        <div className="flex flex-row animate-bounce mt-12">
          <a href="https://github.com/taisei25864">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 mr-10"
              fill="currentColor"
              viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 
                  11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                  1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 
                  1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 
                  3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 
                  1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
                />
              
            </svg>
          </a>
          <a href="https://twitter.com/taisei_0983">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 mr-10"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 
                1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
                0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 
                4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" 
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/taisei4419/">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="w-11 mr-10"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 
                1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 
                0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 
                1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 
                2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 
                1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 
                0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 
                2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 
                0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 
                1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
              />
            </svg>
          </a>
        </div>
        <div>
          <div className='mt-14 bg-gray-400 border-2 rounded-xl border-transparent p-3'>
            <p className='text-xl flex justify-center text-black'>Hello, thank you for visiting my portfolio!</p>
          </div>
          <div className='mt-16'>
            <h2 className='text-3xl underline mb-4'>About me</h2>
            <p>I'm majoring in Information Technology at Kwansei Gakuin University. <br/>
              I'm interested in reinforcement learning, networks and full-stack technology.
            </p>
          </div>
          <div className='space-y-4 mt-16'>
            <h2 className='text-3xl underline'>Bio</h2>
            <p>2003&emsp;Born in Aichi, Japan.</p>
            <p>2021&emsp;Enroll at Kwansei Gakuin University(関西学院大学)</p>
            <p>2023.8&emsp;DMM Group intern</p>
            <p>2023.9&emsp;Sansan intern </p>
            <p>2023.10&emsp;日本ビジネスアート intern</p>
          </div>
          <div className='space-y-4 mt-16'>
            <h2 className='text-3xl underline'>Award</h2>
            <p>2023.2&emsp;関西ビギナーズハッカソン / 最優秀賞</p>
            <p>2023.9&emsp;Sansan Tech Internship SPARK / 2位</p>
          </div>

          <div className='mt-16'>
            <h2 className='text-3xl underline mb-4'>Skills</h2>
            <div className='text-xl'>
              <SkillCircle
                language={'Frontend'}
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
                language={'Backend'}
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
            <div className="flex justify-center text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 
                01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 
                4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                />
              </svg>
              <p>taisei25864@gmail.com</p>
            </div>
            <div className="flex justify-center mt-24 mb-10">
              <p>© 2023 Taisei Isobe. All Rights Reserved.</p>
            </div>
            {/* <Envelope className="h-5 w-5 text-blue-500"/> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
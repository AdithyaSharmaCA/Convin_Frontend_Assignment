import React from "react"
import Card from './Card'
import Create from "./Create_Card"
import './Card.css'
import my_video_3 from './test_video_3.mp4'
import my_video_2 from './test_video_2.mp4'
import my_video_1 from './test_video_1.mp4'
function App() {
  return (
    <div className="App_wrapper">
      <div>
      <Create text="Enter to create card"></Create>
      </div>
      <Card name_of_card="Earth" video={my_video_3} category="Astronomy"/>
      <Card name_of_card="Neural Networks" video={my_video_1} category="Data Science"/>
      <Card name_of_card="Microscope" video={my_video_2} category="Biology"/>
      
    </div>
  )
}
export default App

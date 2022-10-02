import React from 'react'

const GameGallery = () => {
    function goRight() {
        document.querySelector(".allPages").scrollLeft += 240;
    }
    
    function goLeft() {
        document.querySelector(".allPages").scrollLeft -= 240;
    }
    
  return (
    <div className='flex justify-end'>
        <div className=''>
        <div className="Left">
            <button className=" bg-slate-600 w-1" onclick="goLeft()">
                
            </button>
            <div className="allPages mx-48 ">

                <div className="allpage" id="page1">
                    <h1 className=" bg-slate-300 p-40 w-96 ">
                        Hello
                    </h1>
                </div>

                
                {/* <div className="allpage"id="page2">
                    <h1 className=" p-40 bg-slate-300 w-60 ml-4">
                        World
                    </h1>
                </div> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default GameGallery
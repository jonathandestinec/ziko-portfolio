"use client"

import React from 'react'

import styles from './BgBlob.module.css'

const BackgroundBlob = () => {
    return (
        <div>

            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <svg
                    className={`absolute top-0 left-1/2 -translate-x-2/3 w-[150%] h-[150%] opacity-20 blur-[100px] animate-pulse`}
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g transform="translate(400,400)">
                        <path
                            d="M120,-150C150,-100,160,-50,170,0C180,50,190,100,160,130C130,160,70,170,20,160C-30,150,-60,120,-90,90C-120,60,-150,30,-160,-10C-170,-50,-160,-100,-130,-140C-100,-180,-50,-210,0,-210C50,-210,100,-200,120,-150Z"
                            fill="#e0d19f"
                        />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default BackgroundBlob
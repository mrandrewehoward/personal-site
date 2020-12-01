import React from "react"

export default function Header () {
    return (
        <div className="mb-4">
            <h1 className="text-5xl mb-5">Andrew Howard</h1>
            <div className="grid grid-cols-2 gap-4 w-1/4">
                <a href="index.html">About</a>
                <a href="index.html">Contact</a>
            </div>
        </div>
    )
}
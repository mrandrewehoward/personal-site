import React from "react"

export default function Layout ({ children }) {
    return (
        <div className="container mx-auto px-20 py-10 max-w-5xl font-mono">
            {children}
        </div>
    )
}
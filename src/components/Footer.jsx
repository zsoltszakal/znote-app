import React from "react"



function Footer (){

    var date = new Date()
    var year = date.getFullYear()

    return (
        <div>
            <p className="footer p-footer">Zsolt Szakal &#169; {year} </p>
        </div>
    )
}

export default Footer
export default function Header({darkmode}){

    return(
        <div className="header">
            <h1>Notes</h1>
            <button className="save" onClick={darkmode}>Toggle Mode</button>
        </div>
    )
}
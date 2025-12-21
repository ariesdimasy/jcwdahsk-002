
interface IMySection {
    count: number
}


export default function MySection(props:IMySection){


    const mySectionStyle = { border:"1px solid black", padding:10}

    return(<section className="my-section" style={mySectionStyle}>
        <h2> My Section </h2>
        <p> This is My Section </p>
        <div> This {props.count} is {props.count % 2 == 0 ? "Even" : "Odd"}</div>
    </section>)
}
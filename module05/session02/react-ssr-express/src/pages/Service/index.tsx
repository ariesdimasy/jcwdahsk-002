import { Helmet } from "react-helmet-async"

export default function Service(){
    return (
        <div>
            <Helmet>
                <title>Service - My Vite App</title>
                <meta name="description" content="This is the Service page of my Vite app." />
                <meta property="og:title" content="Service - My Vite App" />
                <meta property="og:description" content="This is the Service page of my Vite app." />
                <meta property="og:type" content="website" />
            </Helmet>
            <h1>Service</h1>
            <p>This is the Service page.</p>
        </div>
    )
}
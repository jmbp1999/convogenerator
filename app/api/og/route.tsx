import { ImageResponse } from "next/og";


export const runtime = "edge";


export async function GET(request: Request) {
    try {
        const data = await fetch("https://o7wc2ghhopwh7yac3an4sy6nma0ptyhu.lambda-url.us-east-1.on.aws");
        const bot = await data.json();
        const botImageUri = bot.liveVersion.profileUrl; // Replace 'imageUri' with the actual property name for the image URI
        return new ImageResponse(
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    backgroundColor: 'white',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={botImageUri} alt="Bot" style={{ height: '500px', margin: '0 75px' }} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontSize: 40,
                        fontStyle: 'normal',
                        color: 'black',
                        marginTop: 30,
                        lineHeight: 1.8,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    <b>Vercel Edge Network</b>
                </div>
            </div>
        );

    } catch (e: any) {
        return new Response("Error: " + e.message, { status: 500 });
    }
}
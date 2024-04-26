import { ImageResponse } from "next/og";


export const runtime = "edge";


export async function GET(request:Request){
    try {
        return new ImageResponse(<div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
              fontSize: 60,
              letterSpacing: -2,
              fontWeight: 700,
              textAlign: 'center',
            }}
            >
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Develop
            </div>
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Preview
            </div>
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
              }}
            >
              Ship
            </div>
          </div>
          )
        
    } catch (e:any) {
        return new Response("Error: " + e.message, {status: 500})
    }
}
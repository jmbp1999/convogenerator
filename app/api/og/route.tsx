import ImageGenerator from "@/app/components/Image";
import { ImageResponse } from "next/og";


export const runtime = "edge";


export async function GET(request: Request) {
    try {
        const data = await fetch("https://o7wc2ghhopwh7yac3an4sy6nma0ptyhu.lambda-url.us-east-1.on.aws");
        const bot = await data.json();
        const botImageUri = bot.liveVersion.profileUrl; // Replace 'imageUri' with the actual property name for the image URI
        return new ImageResponse(<ImageGenerator profileUrl={botImageUri} />);

    } catch (e: any) {
        return new Response("Error: " + e.message, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";



// GET COMMENT BY STORYID
export async function GET(req: Request,{params}:{params: {storyId: any}}) {
  console.log(params)
  try {
    const story = await prismadb.story.findUnique({
      where: {
        id : parseInt(params.storyId),
      },
      include: {
        comments: {
          include: {user: true}
        }, 
        user: true
      }
    });
    return NextResponse.json(story);
  } catch (error:any) {
    console.log("error gettign comment ", error.message);
    return new NextResponse("GET-COMMENT", { status: 500 });
  }
}

export async function POST(req: Request,{ params }: { params: { companionId: string } }) {
  try {
    const body = await req.json();
    const user = await  currentUser();
    const {content, user_id} = body;

    if (!user_id || !user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!content ) {
        return new NextResponse("Missing content", {status: 400})
    }

    const newComment = await prismadb.comment.create({
        data: {
            story_id: parseInt(params.companionId as string),
            user_id, 
            content
        }
    })

    return NextResponse.json(newComment);
  } catch (error) {
    console.log("comment-post ", error);
    return new NextResponse("Interal error ", { status: 500 });
  }
}

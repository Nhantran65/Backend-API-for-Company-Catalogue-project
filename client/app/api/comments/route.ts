import prismadb from "@/lib/prismadb";

import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await currentUser();
    const { content, storyId, username } = body;
    if (!user || !user.id ) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (
      !content || !storyId
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    
    
    const userInfo = await prismadb.user.findUnique({
      where : {
        email: username || user.emailAddresses
      }
    })

    if (
      !userInfo || !userInfo.id
    ) {
      return new NextResponse("Missing user fields", { status: 400 });
    }


    const comment = await prismadb.comment.create({
      data: {
        user_id: userInfo.id,
        content: content,
        story_id: storyId
      },
    });

    return NextResponse.json(comment)
  } catch (error) {
    console.log("companion-post ", error);
    return new NextResponse("Interal error ", { status: 500 });
  }
}
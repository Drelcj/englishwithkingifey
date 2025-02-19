import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";
import PostContent from "../../../components/PostContent";
import CommentSection from "@/src/components/CommentSection";
// Removed invalid import for PageProps
// Define PageProps interface manually
interface PageProps {
    params: Params;
}

// 1. Define interface for params (correctly defined already)
interface Params {
    postId: string;
}

// 2. Define PageProps interface extending Next.js PageProps
interface PostPageProps extends PageProps {
    params: Params; // Use the Params interface for params
}

// 3. Async component with correctly typed props (using PostPageProps)
export default async function PostPage({ params }: PostPageProps) { // Use PostPageProps here
    const { postId } = params; // params is directly available, no need to await if correctly typed

    const post = await prisma.post.findUnique({
        where: { id: postId },
        include: { author: true, comments: true },
    });

    if (!post || !post.published) return notFound();

    return (
        <article className="max-w-3xl mx-auto p-4 prose lg:prose-xl">
            <h1 className="text-5xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm mb-8">
                <span>By {post.author?.name || "Admin"}</span>
                <span>•</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            <PostContent content={post.content} />

            <div className="mt-8 flex items-center justify-between">
                <section className="mt-16">
                    <CommentSection postId={postId} /> {/* Use postId directly from params */}
                </section>
            </div>
        </article>
    );
}

// 4. Add this type declaration for generateMetadata (using PostPageProps)
export async function generateMetadata({ params }: PostPageProps) { // Use PostPageProps here as well
    const { postId } = params; // params is directly available
    return {
        title: `Post ${postId}`,
        description: "Blog post details",
    };
}
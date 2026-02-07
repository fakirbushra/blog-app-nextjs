
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/convex/_generated/api'
import { fetchQuery } from 'convex/nextjs';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export const dynamic = 'force-static'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 30
// false | 0 | number

export const metadata: Metadata = {
    title: "Blog | DevBlog - The Developer Blog",
    description: "Read latest Dev articles and insights",
    category: "Web Development",
    authors: [{name: "Fakir Bushra"}]
}

export default function BlogPage() {
  
  return (
    <div className='py-12'>
        <div className="text-center pb-12">
            <h1 className='text-3xl font-extrabold tracking-tight sm:text-5xl'>Developers Blog</h1>
            <p className='pt-4 max-w-2xl mx-auto text-xl text-muted-foreground'>Insights, thoughts and trends from over the world</p>
        </div>

        <Suspense fallback={<SkeletonLoadingUi />}>
            <LoadBlogPosts />
        </Suspense>
    </div>
  )
}

async function LoadBlogPosts() {
    // await new Promise((resolve) => setTimeout(resolve, 2000)) 
    const data = await fetchQuery(api.posts.getPost)

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
            <Card key={post._id} className='pt-0'>
                <div className="relative h-48 w-full overflow-hidden">
                    <Image src={post.imageUrl ?? "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt="image"
                    fill
                    unoptimized
                    className='rounded-t-lg object-cover' />
                </div>

                <CardContent>
                    <Link href={`/blog/${post._id}`}>
                        <h1 className='text-2xl font-bold hover:text-primary'>{post.title}</h1>
                    </Link>
                    <p className='text-muted-foreground line-clamp-3 pt-2'>{post.body}</p>
                </CardContent>

                <CardFooter>
                    <Link className={buttonVariants({className: "w-full"})} href={`/blog/${post._id}`}>
                    Read More
                    </Link>
                </CardFooter>
            </Card>
        ))}
        </div>
    )
}

function SkeletonLoadingUi() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col space-y-6">
                    <Skeleton className='h-48 w-full rounded-lg' />
                    <div className="flex flex-col space-y-4 px-4">
                        <Skeleton className='h-6 w-3/4' />
                        <Skeleton className='h-3 w-full' />
                        <Skeleton className='h-3 w-2/3' />
                    </div>
                </div>
            ))}
        </div>
    )
}
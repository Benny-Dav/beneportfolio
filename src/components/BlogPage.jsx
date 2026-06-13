
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import webdev from "../assets/images/blog1.jpg"
import { db } from "../firebase";
import { getDocs, where, query, collection } from "firebase/firestore";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";


const BlogPage = () => {
    const { slug } = useParams();

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postsRef = collection(db, "posts");
                const q = query(postsRef, where("slug", "==", slug));
                
                const snapshot = await getDocs(q);

                if (!snapshot.empty) {
                    setPost({
                        id: snapshot.docs[0].id,
                        ...snapshot.docs[0].data(),
                    });

                    
                } else {
                    setPost(null);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <section className="px-8 py-12">
                <Navbar />
                <p className="text-center mt-20">Loading blog...</p>
            </section>
        )
    }
    if (!post) {
        return (
            <section className="px-8 py-12">
                <Navbar />
                <p className="text-center mt-20">Blog not found</p>
            </section>
        )
    }
    const formattedPostDate = post.createdAt?
    post.createdAt.toDate().toLocaleDateString("en-US", {
        year:"numeric",
        month:"long",
        day:"numeric",
    }):"";
   
    return (
        <section className="h-auto lg:px-[8%] lg:pt-10 lg:w-full lg:h-auto mt-0 header max-w-full overflow-x-hidden">
            <Navbar />


            <main className="lg:h-40 my-[8vh] lg:mt-[20%] pt-16 ml-auto mr-auto w-[90%] lg:w-full text-center animate-fade-in md:mt-[-6%]">
                <article className="h-auto flex flex-col gap-4">
                    {/* post date */}
                    <p className="text-left text-semibold text-gray-400">{formattedPostDate}</p>
                    {/* category badge */}
                    <p className="w-[20%] p-1 rounded-xl bg-emerald-300 text-lime-600">{post.category}</p>
                    {/* post title */}
                    <h1 className="text-left text-2xl font-semibold"> {post.title}</h1>
                    {/* post thumbnail */}
                    <img src={webdev} alt="" className="h-[20%] border" />
                    {/* post content */}
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}
                    children={post.content}
                    components={{
      h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 text-left" {...props} />,
      h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-4 text-left" {...props} />,
      p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-4 text-left" {...props} />,
      a: ({node, ...props}) => <a className="text-blue-600 underline text-left" {...props} target="_blank" rel="noreferrer" />,
      img: ({node, ...props}) => <img className="rounded-lg my-4 text-left" {...props} />,
      li: ({node, ...props}) => <li className="ml-6 list-disc mb-2 text-left" {...props} />,}}
                    />
                    

                </article></main>


        </section>

    )
}

export default BlogPage;
import { MoveRight } from "lucide-react"
import webdev from "../assets/images/blog1.jpg"
import { db } from "../firebase"
import { query, collection, getDocs, where, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const blogs = [
        {
            id: 1,
            title: "How to create a functional blog for your website",
            thumbnail: webdev,
            
        },
        {
            id: 2,
            title: "How to create a functional blog for your website",
            thumbnail: webdev,
        },
        {
            id: 3,
            title: "How to create a functional blog for your website",
            thumbnail: webdev,
        }

    ]

   useEffect(()=>{
    const fetchPosts = async()=>{
        try{
            const postsRef = collection(db, "posts");
            const q = query(
                postsRef
            );

            const querySnapshot = await getDocs(q);
            const blogData = querySnapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }));

            setPosts(blogData);
        }catch(error){
            console.error("Error fetching blogs:", error);
        }finally{
            setLoading(false);
        }
    };
    fetchPosts();
    
   },[])
    return (
        <section className="h-auto lg:h-[70vh] lg:px-[8%] px-8 py-12 text-black md:h-[80vh] mb-12 bg-gradient-to-b from-[#DC143C]/5 via-white to-[#DC143C]/5">
            <h3 className="text-4xl lg:text-4xl font-bold leading-tight text-center">My Latest Blogs</h3>
            {/* blog cards */}
            {loading && <p>Loading blog posts...</p>}
            
            <div className=" h-[90%] mx-auto lg:h-[85%] w-[90%] grid grid-cols-1 sm:overflow-x-visible lg:grid-cols-3 ">
                {
                    posts.map((post) => (
                        <div key={post.id} className="flex flex-col justify-between gap-x-6 gap-y-2 p-6 shadow-sm hover:scale-105 transition cursor-pointer">
                            <img src={webdev} alt={post.title} className="object-cover rounded-md " />
                            <div className=" flex flex-col gap-2">
                                <h4 className="text-base lg:text-lg leading-tight ">{post.title}</h4>
                                <Link to={`/blog/${post.slug}`} className=" flex text-gray-600 gap-2"> Read article<MoveRight className="text-gray-600 " /> </Link>

                            </div>

                        </div>
                    ))}
            </div>
        </section>
    )
}
export default BlogSection
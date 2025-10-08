import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaClock, FaArrowLeft } from "react-icons/fa";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setLoading(true);
    // Replace with your backend fetch
    const dummyBlogs = [
      {
        slug: "built-my-portfolio",
        title: "How I Built My Portfolio",
        date: "2025-10-08",
        readTime: "5 min read",
        author: "John Doe",
        content: `
          
        `,
        tags: ["React", "Portfolio", "Web Development"],
      },
      {
        slug: "react-tips-tricks",
        title: "React Tips & Tricks",
        date: "2025-09-25",
        readTime: "8 min read",
        author: "John Doe",
        content: "<p>Full content here...</p>",
        tags: ["React", "JavaScript", "Programming"],
      },
    ];

    const foundBlog = dummyBlogs.find((b) => b.slug === slug);
    setBlog(foundBlog);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog not found!</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">
          Return to blog list
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <FaArrowLeft className="mr-2" /> Back to Blogs
      </Link>

      {/* Blog Header */}
      <header className="mb-8">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100"
        >
          {blog.title}
        </motion.h1>

        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <span className="flex items-center">
            <FaCalendar className="mr-2" />
            {new Date(blog.date).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <FaClock className="mr-2" />
            {blog.readTime}
          </span>
          <span>By {blog.author}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Blog Content */}
      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4">Share this article</h3>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Share on Twitter
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Share on LinkedIn
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogDetails;

import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Dummy blog data
const dummyBlogs = [
  {
    id: 1,
    title: "How I Built My Portfolio",
    slug: "built-my-portfolio",
    excerpt:
      "Learn how I designed and developed my personal portfolio from scratch...",
    content: "<p>This is the full content of the blog.</p>",
    date: "2025-10-08",
  },
  {
    id: 2,
    title: "React Tips & Tricks",
    slug: "react-tips-tricks",
    excerpt:
      "Some useful tips and tricks to become more productive with React.js...",
    content: "<p>This is the full content of the blog.</p>",
    date: "2025-09-25",
  },
  {
    id: 3,
    title: "Learning Node.js Efficiently",
    slug: "learning-nodejs",
    excerpt:
      "My approach to mastering Node.js and backend development quickly...",
    content: "<p>This is the full content of the blog.</p>",
    date: "2025-09-15",
  },
];

// Separate BlogCard component for better code organization
const BlogCard = ({ blog }) => {
  const formattedDate = useMemo(() => {
    return new Date(blog.date).toLocaleDateString();
  }, [blog.date]);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {blog.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {formattedDate}
      </p>
      <NavLink
        to={`/blog/${blog.slug}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
      >
        Read More
      </NavLink>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Blogs
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

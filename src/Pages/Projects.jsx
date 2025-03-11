import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown for rendering markdown
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

function Projects() {
    const [project_data, setProjectData] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(15);
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const response = await fetch('https://server-01-v2cx.onrender.com/getmainBlog');
                const data = await response.json();
                setProjectData(data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchProjects();
    }, []);

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 15);
    };

    const showLessProjects = () => {
        setVisibleProjects(15);
    };

    return (
        <div className='w-full min-h-dvh p-1'>
            <h1 className='w-full text-3xl text-center font-medium uppercase py-5'>Projects</h1>
            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5'>
                {loading ? ( // Conditional rendering for loading state
                    <div className='text-blue-500'>Loading projects...</div>
                ) : (
                    <>
                        {project_data.slice(0, visibleProjects).map(project => (
                            <NavLink key={project.id} to={`/projects/${project._id}`} className='w-full border active:scale-[0.95] transition-all border-blue-400/20 rounded-2xl overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-64 object-cover' />
                                <p className='p-2 font-medium'>{project.title.split(' ').slice(0, 4).join(' ')} . . .</p>
                            </NavLink>
                        ))}
                        {visibleProjects < project_data.length ? (
                            <button onClick={loadMoreProjects} className='mt-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
                                Load More
                            </button>
                        ) : (
                            <button onClick={showLessProjects} className='mt-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
                                Show Less
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Projects
import { useState, useEffect } from 'react';

const Projects = ({ URL }) => {
	const [projects, setProjects] = useState(null);

	const getProjectsData = async () => {
		const response = await fetch(URL + 'projects');
		const data = await response.json();
		setProjects(data);
	};

	useEffect(() => {
		getProjectsData();
	}, []);

	const loaded = () => {
		return projects.map((project, index) => (
			<div key={index}>
				<h1>{project.name}</h1>
				<img src={project.img} alt={project.name} />
				<a href={project.git}>
					<button>Github</button>
				</a>
				<a href={project.live}>
					<button>Live Website</button>
				</a>
			</div>
		));
	};
	return projects ? loaded() : <h2>Loading...</h2>;
};

export default Projects;

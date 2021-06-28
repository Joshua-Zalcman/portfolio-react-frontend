import { useState, useEffect } from 'react';

const About = ({ URL }) => {
	const [about, setAbout] = useState(null);

	useEffect(() => {
		const getAboutData = async () => {
			const response = await fetch(URL + 'about');
			const data = await response.json();
			setAbout(data);
		};
		getAboutData();
	}, [URL]);

	return (
		<div>
			{about ? (
				<>
					<h2>{about.name}</h2>
					<h3>{about.email}</h3>
					<p>{about.bio}</p>
				</>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export default About;

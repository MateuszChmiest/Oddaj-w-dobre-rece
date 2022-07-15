import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { getDocs, collection, query, doc } from "firebase/firestore";
import HomeWhoWeHelpPagination from "./HomeWhoWeHelpPagination";

const HomeWhoWeHelp = () => {
	const [foundation, setFoundation] = useState([]);
	const [clickedButton, setClickedButton] = useState("foundations");
	const [currentPage, setCurrentPage] = useState(1);
	const [foundationsPerPage] = useState(3);

	const getData = async () => {
		const firebaseData = [];
		try {
			const querySnapshot = await getDocs(collection(db, clickedButton));
			querySnapshot.forEach((doc) => {
				firebaseData.push({ ...doc.data() });
			});
			setFoundation(firebaseData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		setCurrentPage(1);
		getData();
	}, [clickedButton]);

	// Get current foundations
	const indexOfLastFoundation = currentPage * foundationsPerPage;
	const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
	const currentFoundation = foundation.slice(
		indexOfFirstFoundation,
		indexOfLastFoundation
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<section className='whoWeHelp'>
			<div className='whoWeHelp__container'>
				<h2>Komu pomagamy?</h2>
				<div className='decoration'></div>
				<div className='whoWeHelp__steps'>
					<a
						className='whoWeHelp__step'
						onClick={() => setClickedButton("foundations")}>
						Fundacjom
					</a>
					<a
						className='whoWeHelp__step'
						onClick={() => setClickedButton("organizations")}>
						Organizacjom pozarządowym
					</a>
					<a
						className='whoWeHelp__step'
						onClick={() => setClickedButton("local")}>
						Lokalnym zbiórkom
					</a>
				</div>
				<p className='whoWeHelp__text'>
					W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
					współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
					czego potrzebują.
				</p>
				{currentFoundation.map((data, index) => (
					<div className='whoWeHelp__list' key={index}>
						<div className='whoWeHelp__content'>
							<h2>{data.foundation}</h2>
							<p>Cel i misja: {data.mission}</p>
						</div>
						<div className='whoWeHelp__items'>
							<p>{data.items}</p>
						</div>
					</div>
				))}
				<HomeWhoWeHelpPagination
					foundation={foundationsPerPage}
					paginate={paginate}
					totalFoundations={foundation.length}
				/>
			</div>
		</section>
	);
};

export default HomeWhoWeHelp;

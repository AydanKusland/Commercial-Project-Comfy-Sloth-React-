import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
	return (
		<main>
			<PageHero title='about' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='about us' />
				<article>
					<div className='title'>
						<h2>our story</h2>
						<div className='underline'></div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non,
						facilis animi ad temporibus tempora provident minus consequatur
						nobis! Molestiae assumenda ea, ipsa nostrum, voluptas aliquid
						voluptate distinctio, exercitationem corporis repellat praesentium
						eos non. Beatae cumque quas ipsa dolorum distinctio possimus
						accusamus, quidem enim itaque deleniti culpa recusandae. Error atque
						ipsam quasi rem? Repellendus possimus architecto vitae optio
						perspiciatis, eum facere? Modi expedita unde temporibus molestias.
						Autem nobis voluptas placeat dolorem minima quod, ipsa fugiat quo
						mollitia accusantium reiciendis rem!
					</p>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`
export default AboutPage

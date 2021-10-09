import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	const emojiArr = ['🏃', '🧘', '🤸', '🚶'];
	const [randomEmoji, setRandomEmoji] = useState(0);

	return (
		<div className={styles.container}>
			<Head>
				<title>Sit/Stand Timer</title>
				<meta
					name='description'
					content='This PWA can be installed on any device and used to help remind yourself to get up out of your chair and move your body.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Sit/Stand Timer{' '}
					<span
						role='img'
						aria-hidden='true'
						onMouseEnter={() =>
							setRandomEmoji(Math.floor(Math.random() * 4))
						}
					>
						{emojiArr[randomEmoji]}
					</span>
				</h1>

				<p className={styles.description}>
					Stay active to stay healthy.
				</p>

				<div className={styles.card}>
					<h2 className={styles.code}>00:00</h2>
					<div className={styles.buttons}>
						<button>Start</button>
						<button>Reset</button>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<p>
					Made with 💖 by{' '}
					<a
						href='https://www.ellyloel.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						&lt;e//y&gt;
					</a>
				</p>
			</footer>
		</div>
	);
}

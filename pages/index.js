import Head from 'next/head'
import Sidebar from './../components/Sidebar';

export default function Home() {
  return (
		<>
			<Head>
				<title>Spotify</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=5'
				/>
				<meta name='description' content='Spotify clone' />
				<meta
					name='keywords'
					content='Spotify, music, online, listen, streamen, play, digital, album, artist, playlist'
				></meta>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='bg-black h-screen overflow-hidden'>
				<main className=''>
					<Sidebar />
					{/* Center  */}
				</main>
				<div>{/* Player  */}</div>
			</div>
		</>
	);
}

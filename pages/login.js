import { getProviders, signIn } from 'next-auth/react';


const Login = ({ providers }) => {
	return (
		<div className='flex flex-col items-center justify-center w-full min-h-screen bg-black' >
			{/* <Image
				width={208}
				height={208}
				src='https://links.papareact.com/9xl'
				alt='Spotify logo'
				className='mb-5 w-52'
			/> */}
			<img src="https://links.papareact.com/9xl" alt='Spotify logo' className='mb-5 w-52'/>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						className='bg-[#18D860] text-white p-5 rounded-full cursor-pointer'
						onClick={() =>  signIn(provider.id, {callbackUrl: '/'})}
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
};

export const getServerSideProps = async () => {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
};

export default Login;
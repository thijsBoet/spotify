import { getProviders, SignIn } from 'next-auth/react';
import Image from 'next/image';

const Login = ({ providers }) => {
	return (
		<div className='flex flex-col items-center justify-center w-full min-h-screen bg-black' >
			<Image
				width={768}
				height={768}
				src='https://links.papareact.com/9xl'
				alt='Spotify logo'
				className='mb-5 w-52'
			/>
			{Object.values(providers).map((provider) => {
				<div key={provider.name}>
					<button
						className='bg-[#18D860] text-white p-5 rounded-full'
						onClick={() => { SignIn(provider.id, {callbackUrl: '/'}) }}
					>
						Login with {provider.name}
						{console.log(provider)}
					</button>
				</div>;
			})}
		</div>
	);
};

export default Login;

export const getServerSideProps = async () => {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
};

import {
	HomeIcon,
	SearchIcon,
	LibraryIcon,
	PlusCircleIcon,
	HeartIcon,
	RssIcon,
	LogoutIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';

const Sidebar = () => {
	const { data: session, status } = useSession();
	
	return (
		<div className='p-5 space-y-4 text-sm text-gray-500 border-r border-gray-900'>
			<button
				className='flex items-center space-x-2 hover:text-white '
				onClick={() => signOut()}
			>
				<LogoutIcon className='w-5 h-w' />
				<p>Logout</p>
			</button>
			<button className='flex items-center space-x-2 hover:text-white '>
				<HomeIcon className='w-5 h-w' />
				<p>Home</p>
			</button>
			<button className='flex items-center space-x-2 hover:text-white '>
				<SearchIcon className='w-5 h-w' />
				<p>Search</p>
			</button>
			<button className='flex items-center space-x-2 hover:text-white '>
				<LibraryIcon className='w-5 h-w' />
				<p>Your Library</p>
			</button>
			<hr className='border-t-[0.1px] border-gray-900' />
			<button className='flex items-center space-x-2 hover:text-white '>
				<PlusCircleIcon className='w-5 h-w' />
				<p>Create Playlist</p>
			</button>
			<button className='flex items-center space-x-2 hover:text-white '>
				<HeartIcon className='w-5 h-w' />
				<p>Likes Songs</p>
			</button>
			<button className='flex items-center space-x-2 hover:text-white '>
				<RssIcon className='w-5 h-w' />
				<p>Your Episodes</p>
			</button>
			<hr className='border-t-[0.1px] border-gray-900' />

			{/* Playlist  */}
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
			<p className='cursor-pointer hover:text-white'>Playlist name...</p>
		</div>
	);
};

export default Sidebar;

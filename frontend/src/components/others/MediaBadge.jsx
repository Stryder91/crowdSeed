import twitter_logo from '../../assets/img/twitter.svg';
import discord_logo from  '../../assets/img/discord.svg';
import instagram_logo from  '../../assets/img/instagram.svg';

export const MediaBadge = ({ frame_class }) => {
	const _medias = [
		{
			name: "Discord",
			src: discord_logo,
			url: "https://discord.com"
		},
		{
			name: "Twitter",
			src: twitter_logo,
			url: "https://twitter.com"
		},
		{
			name: "Instagram",
			src: instagram_logo,
			url: "https://www.instagram.com/"
		},
	];

	return (
		<div className={`flex ${frame_class}`}>
			{_medias.map((m, i) => {
				return <a key={i} href={m.url} target="_blank" rel="noopenner noreferrer">
					<div className="">
						<img
							className='cursor-pointer'
							src={m.src}
							alt={`${m.name} logo`}
						/>
					</div>
				</a>
			})}
		</div>
	);
}
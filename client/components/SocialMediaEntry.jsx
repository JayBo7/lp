const SocialMediaEntry = ({brand, abbr, color, rating}) => (
	<div class="goog-social-metadata">
		<img src={`/images/icons/${brand}-logo@2x.png`} class={`goog-social-${abbr}-img`}/>
		<p class={`goog-social-${abbr}-${color}`}>AVERAGE RATING</p>
		<div class="goog-social-stars">
			<img src="/images/icons/yellow-star-icon@2x.png" class="goog-social-star" />
			<img src="/images/icons/yellow-star-icon@2x.png" class="goog-social-star" />
			<img src="/images/icons/yellow-star-icon@2x.png" class="goog-social-star" />
			<img src="/images/icons/yellow-star-icon@2x.png" class="goog-social-star" />
			{rating === 4.5 ? (<img src="/images/icons/yellow-half-star-icon@2x.png" class="goog-social-star" />) : (<img src="images/icons/9-yellow-star-icon@2x.png" class="goog-social-star" />)}
		</div>
	</div>
)

export default SocialMediaEntry;

const perk = ({ image, title, paragraph }) => (
	<div class="perk-col">
		<img src={`/images/icons/${image}@2x.png`} class="perk-image"/>
		<a class="perk-title">{title}</a>
		<p class="perk-paragraph">{paragraph}</p>
	</div>
)

export default perk;
import SocialMediaEntry from "./SocialMediaEntry"

const SocialMedia = () => (
	<div class="row goog-social">
	  <div class="col-12 goog-social-text">
	    <h3>Fuzzy Members Love Us</h3>
	  </div>
	  <div class="col-12">
	    <div class="row d-flex justify-content-md-center">
		    <div class="col-sm-12 col-md-5 d-flex justify-content-center justify-content-md-end">
	    	  <div class="goog-social-box">
		        <div class="goog-social-inner-box">
		          <div class="goog-social-rating fb">4.9</div>
		         	<SocialMediaEntry brand={'facebook'} abbr={'fb'} color={'blue'} rating={4.9} />
		        </div>
		      </div>
		    </div>
		    <div class="col-sm-12 col-md-5 d-flex justify-content-center justify-content-md-start">
		      <div class="goog-social-box">
		          <div class="goog-social-inner-box">
		            <div class="goog-social-rating yelp">4.5</div>
		            <SocialMediaEntry brand={'yelp'} abbr={'yelp'} color={'red'} rating={4.5} />
		          </div>
		      </div>
		    </div>
	    </div>
	  </div>
</div>
)

export default SocialMedia;

import React from 'react'
import Navigator from '../components/Navigator'

function Blog() {
  return (
    <div>
      <Navigator/>  
      <div className='blogouter'>
     
<div class="container">
	<div class="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
		<div class="h-100 tofront">
			<div class="row justify-content-between">
				<div class="col-md-6 pt-6 pb-6 pr-6 align-self-center">
					<p class="text-uppercase font-weight-bold">
						<a class="text-danger" href="./category.html">Stories</a>
					</p>
					<h1 class="display-4 secondfont mb-3 font-weight-bold">Empowering Healthy Living: Lifestyle, Diet, and Fitness Advice from the Experts</h1>
				
				</div>
				<div class="col-md-6 pr-0">
					<img src="image.jpg "></img>
				</div>
			</div>
		</div>
	</div>
</div>

	<div class="row justify-content-center">
		<div class="col-lg-2 pr-4 mb-4 col-md-12">
			<div class="sticky-top text-center">
				<div class="text-muted">
					Share this
				</div>
				<div class="share d-inline-block">
					
					<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
						<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
						<a class="a2a_button_facebook"></a>
						<a class="a2a_button_twitter"></a>
					</div>
					<script async src="https://static.addtoany.com/menu/page.js"></script>
					
				</div>
			</div>
		</div>
		<div class="col-md-12 col-lg-8">
			<article class="article-post">
			<p>
        Maintaining a healthy lifestyle is crucial in preventing diseases and ensuring overall well-being. A healthy lifestyle encompasses various aspects, including a balanced diet, regular physical activity, and stress management. By adopting healthy habits, individuals can significantly reduce the risk of chronic diseases, such as heart disease, diabetes, and obesity.

			</p>
			<p>
        Our team of health professionals is here to share their expertise and provide actionable tips on maintaining a healthy lifestyle. Here's what they have to say:
        <ul>
          <li>Fitness Expert, Dr. Jane Smith: "Start small and set achievable goals. Aim to incorporate 30 minutes of physical activity into your daily routine, and gradually increase the duration and intensity over time."
          </li><li>Nutritionist, Dr. John Doe: "Focus on whole, unprocessed foods, such as fruits, vegetables, whole grains, and lean proteins. Aim to limit your intake of sugary drinks and saturated fats."
        </li><li> Wellness Coach, Dr. Sarah Johnson: "Prioritize sleep and aim for 7-8 hours of restful sleep each night. Establish a relaxing bedtime routine and avoid screens for at least an hour before bedtime."
        </li></ul>
			</p>
			<p>
        By following these expert tips and utilizing the resources available on our platform, you can take the first step towards empowering healthy living and reducing the risk of chronic diseases. Remember, small changes can add up over time, so start your journey today!

			</p>
			<p>
        Stay tuned for more health and wellness tips, and don't forget to subscribe to the community.
			</p>
			</article>
			<div class="border p-5 bg-lightblue">
				<div class="row justify-content-between">
					<div class="col-md-5 mb-2 mb-md-0">
						<h5 class="font-weight-bold secondfont">Become a member</h5>
						 Get the latest news!!!
					</div>
					<div class="col-md-7">
						<div class="row">
							<div class="col-md-12">
								<input type="text" class="form-control" placeholder="Enter your e-mail address"></input>
							</div>
							<div class="col-md-12 mt-2">
								<button type="submit" class="btn btn-success btn-block">Subscribe</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    


    

<div class="container mt-5">
	<footer class="bg-white border-top p-3 text-muted small">
	<div class="row align-items-center justify-content-between">
		<div>
			<span class="navbar-brand mr-2"><strong>CareConnect</strong></span> Copyright &copy;
			<script>document.write(new Date().getFullYear())</script>
			 . All rights reserved.
		</div>
		
	</div>
	</footer>
</div>
      </div>
    
  )
}

export default Blog

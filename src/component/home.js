import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import l1 from './image/box1.jpeg'
import l2 from './image/box2.jpeg'
import l3 from './image/box3.jpeg'
import l4 from './image/box4.jpeg'
import logo1 from './image/logo1.png'
import logo2 from './image/logo2.png'
import logo3 from './image/logo3.png'
import logo4 from './image/logo4.png'
import law from './image/law.jpg'
import law1 from './image/law-1.jpg'
import law2 from './image/law-2.jpg'    
import law3 from './image/law-3.jpg'
import './header.css';



class Home extends Component {

    render(props) {
        return (
            <div>
            <div>  
                <div class='slider'>
                    <input name='input-slider' id='input-slide-0' type='radio' class='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-1' type='radio' class='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-2' type='radio' class='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-3' type='radio' class='input-slide input-slide-num' />
                    <input name='input-slider' id='input-slide-autoplay' type='radio' class='input-slide' checked />
                    <ul>
                    <li class='slide-0'></li>
                    <li class='slide-1'></li>
                    <li class='slide-2'></li> 
                    <li class='slide-3'></li>        
                    </ul>
                    <div class='slide-description'>
                    <label class='slide-0'>
                        <img src={law} />
                        <div class='scontent'>
                            <h3>Right Way</h3>
                            <h5>to get legal help!</h5>
                        </div>
                    </label>
                    <label class='slide-1'>
                    <img src={law1} />
                    <div class='scontent'>
                            <h3>Free Legal Consultancy </h3>
                            <h5>Sources of help for people who qualify as low-income</h5>
                        </div>
                    </label>
                    <label class='slide-2'>
                    <img src={law2} />
                    <div class='scontent'>
                            <h3>Online Legal Help</h3>
                            <h5>We connect consumers and lawyers across the World</h5>
                        </div>
                    </label>
                    <label class='slide-3'>
                    <img src={law3} />
                    <div class='scontent'>
                            <h3>Legal Advice in Minutes</h3>
                            <h5>Real Lawyers. Real Answers. Right Now.</h5>
                        </div>
                    </label>
                    </div>
                    <div class='slider-arrow-prev'>
                    <label class='slide-0' for='input-slide-0'></label>
                    <label class='slide-1' for='input-slide-1'></label>
                    <label class='slide-2' for='input-slide-2'></label>
                    <label class='slide-3' for='input-slide-3'></label>
                    </div>
                    <div class='slider-arrow-next'>
                    <label class='slide-0' for='input-slide-0'></label>
                    <label class='slide-1' for='input-slide-1'></label>
                    <label class='slide-2' for='input-slide-2'></label>
                    <label class='slide-3' for='input-slide-3'></label>
                    </div>        
                    <div class='slider-dot'>
                    <label class='slide-0' for='input-slide-0'></label>
                    <label class='slide-1' for='input-slide-1'></label>
                    <label class='slide-2' for='input-slide-2'></label>
                    <label class='slide-3' for='input-slide-3'></label>
                    </div>        
                </div>
            </div>
            <div>
                <main class='container' >
                    <section class='sec-1' >
                        <div class='columns sec-1-first' >
                            <div class='column'><i class="fa fa-edit iconc"></i>
                            <h2>WYSIWYG Editor</h2>
                                <p>A real-time WYSIWYG editor: you are able to customize the look of your website directly on page and see your changes right away!</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-book iconc"></i>
                            <h2> Solid Law Practic</h2>
                                <p>Custom admin panel significantly extends original Wordpress functionality, turning it into an all-in-one tool for content management.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-briefcase iconc"></i> 
                            <h2>Special Design</h2>
                            <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                            <div class='column'><i class="fa fa-anchor iconc"></i> 
                            <h2>Powerful Admin</h2>
                                <p>Theme offers super flexibility for color editing and easily turns from a minimalistic style theme into a juicy website with great animation effects.</p>
                                <h6 style={{ color: 'red' }} >Read more <i class="fa fa-chevron-right"></i></h6>
                            </div>
                        </div>
                    </section>

                    {/* 2nd section */}

                    <section class='sec-2'  >

                        <div class="columns first">
                            <div class="column is-four-fifths" >
                                <h1>All people are equal before the law. A good attorney is what makes a difference.</h1>
                            </div>
                            <div class="column ver-align-center">
                                <a class="button sec-2-btn is-large">Download</a>
                            </div>
                        </div>
                        <div>
                            <h4 class='heading'>Solid law practise</h4>
                        </div>
                        {/* 2nd part */}
                        <div class='columns' >
                            <div class='column' >
                            <div class="box box1">
                                <div class="box__right">
                                    <div>Bussiness, Legal<br/>
                                    <a href=''>With Smile to Work</a></div>
                                </div>
                                <div class="box__left">
                                    <div>Bussiness, Legal</div>
                                </div>
                                <div class="box__top">
                                    <div>Bussiness, Legal</div>
                                </div>
                                <div class="box__bottom">
                                    <div>Bussiness, Legal</div>
                                </div>
                                <div class="box__center">
                                    <div>Bussiness, Legal</div>
                                </div>
                            </div>
                            </div>
                            <div class='column' >
                            <div class="box box2">
                                <div class="box__right">Right → Left</div>
                                <div class="box__left">Left → Right</div>
                                <div class="box__top">Top → Bottom</div>
                                <div class="box__bottom">Bottom → Top</div>
                                <div class="box__center">
                                Hover from any side  
                                </div>
                            </div>
                            </div>
                            <div class='column' >
                            <div class="box box3">
                                <div class="box__right">Right → Left</div>
                                <div class="box__left">Left → Right</div>
                                <div class="box__top">Top → Bottom</div>
                                <div class="box__bottom">Bottom → Top</div>
                                <div class="box__center">
                                Hover from any side  
                                </div>
                            </div>
                            </div>
                            <div class='column' >
                            <div class="box box4">
                                <div class="box__right">Right → Left</div>
                                <div class="box__left">Left → Right</div>
                                <div class="box__top">Top → Bottom</div>
                                <div class="box__bottom">Bottom → Top</div>
                                <div class="box__center">
                                Hover from any side  
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    {/* 3rd */}
                    <br /><br />
                    <section>
                        <div class='columns'>
                            <div class='column' >
                                <h3>Latest News</h3>

                                <div class='columns '>
                                <article class="one_first post-5707 post type-post status-publish format-standard hentry category-uncategorized"><div class="post_inner">
<abbr class="published post-date updated" title="March 23, 2014"><span class="cmsms_post_day">23</span><span class="cmsms_post_month">Mar</span></abbr>
		<div class="cmsms_timeline_inner_wrap cmsms_animated"><div class="cmsms_timeline_inner"><h4 class="entry-title"><a href="http://lawbusiness.cmsmasters.net/our-team-members/" title="Our Team Members">Our Team Members</a></h4><div class="meta_wrap"> <span class="vcard author"><span class="fn"><a href="http://lawbusiness.cmsmasters.net/author/backdoor/" title="cmsmasters">cmsmasters</a></span></span>&nbsp;&nbsp;Comments (<a class="post_comments" href="http://lawbusiness.cmsmasters.net/our-team-members/#respond" title="Comments Our Team Members">0</a>)</div><div class="entry-content">
We enjoy&nbsp; the process of creating a theme from its start to its end – from a sparkling design idea, to the very release..</div>
<div class="cl"></div>
</div>
</div>
</div>
</article>
                                    {/* <div class='column date' > 23 <span class='inside-date'>  March  </span></div>

                                    <div class='column is-four-fifths' > <h3>Our Team Members</h3>
                                        <p> <spnan style={{ color: 'red' }} > cmsmmasters </spnan> comments (0)</p>
                                        <br /><br />
                                        <p style={{ color: 'rgb(156, 154, 154);' }} > We enjoy  the process of creating a theme from its start to its end – from a sparkling design idea, to the very release..</p>
                                    </div> */}
                                </div>
                                <div class='columns'>
                                    <div class='column' > 21 March </div>

                                    <div class='column is-four-fifths' > <h3>How We Can Help You</h3>
                                        <p> <spnan style={{ color: 'red' }} > cmsmmasters </spnan> comments (0)</p>
                                        <br /><br />
                                        <p style={{ color: 'rgb(156, 154, 154);' }} >CMSMasters Studio is a team of professionals. Every member of our team has spent many hours polishing professional skills and earning a unique experience in the spheres of website design, wordpress development.</p>
                                    </div>
                                </div>

                            </div>
                            <div class='column' >
                                <h3>Testinomials</h3>
                                <br />
                                <div class='coulmns testinomials' >
                                    <blockquote> "    Never expected to get such a powerful theme for this little money! It's a pleasure to work with, seems it just guesses my thoughts! I was looking for a really powerful corporate theme for my website, that would allow profound formatting and very Diverse content representation. Now I've found it!</blockquote>
                                </div>

                                <div>
                                    <h5>Jeff Blake</h5>
                                    <h6>Company 2</h6>
                                </div>
                            </div>
                        </div>

                        {/* part 2 */}
                        <br />
                        <div>
                            <h3>Our Team</h3>

                            <div class='columns' >
                                <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l1} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='column' >
                                    <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l2} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class='column' >
                                    <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l3} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class='column' >
                                    <div class='column' >
                                    <div class="card">
                                        <div class="card-image">
                                            <figure class="image is-4by3">
                                                <img src={l4} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            
                                            <div class="content">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                <a class="button sec-2-btn is-large">Download</a>
                                                
                                               
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>

                            {/* #3rd */}

                            <div>
                                <div class='columns' >
                                    <div class='column' > <img src={logo1} /> </div>
                                    <div class='column' > <img src={logo2} /> </div>
                                    <div class='column' > <img src={logo3} /> </div>
                                    <div class='column' > <img src={logo4} /> </div>
                                </div>
                            </div>
                </section>
         </main> 
          </div></div>
                );
            }
        }
        
        
        
export default Home
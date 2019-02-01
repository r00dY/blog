import Page  from "../src/Page/Page";
import Article from "../src/Article/Article";
import ReactPlayer from 'react-player'
import CodeBlock from "../src/CodeBlock/CodeBlock";

function Index() {
    return (
        <Page>
            <Article>
                <h1>Why do we need another swiper library?</h1>
                <h2>The problem</h2>
                <p>There are so many implementations of swipers in Javascript, yet none of them is good enough. There are decent ones but if you look closer, none of them really excellent.</p>

                <p>Let me take you for a short tour showing what makes a great swiper.</p>

                <h2>UX</h2>

                <p>A lot is being said about mobile apps having better UX than web apps. That’s true. One of the primary reasons is that web libraries lack attention to detail that differentiates excellent from just usable.</p>
                <p>Okay, let’s hit it.</p>

                <h3>Swipers should linearly respond to touch gestures</h3>
                <p>When you touch your screen and move your finger left / right (or other direction), the swiper should always be responsive and show intermediate state. No matter what kind of transition is used. Users feel they are in control of UI, it’s just natural. iOS Photos gallery had this feature from day 1.</p>

                <p>Short video explainer:</p>

                <div className={"video"}>
                    <ReactPlayer url='https://vimeo.com/299612182'  />
                </div>

                <p><a href={"#"}>Try it yourself</a></p>

                <p>This would probably dismiss over half of the available swiper libraries.</p>

                <h3>Gestures and other actions can’t be blocked during animation</h3>

                <p>Good swiper shouldn’t block interaction when transition is in progress. Yet, sadly, most of the swipers in the Internet do this.</p>

                <p>Short video explainer:</p>

                <div className={"video"}>
                    <ReactPlayer url='https://vimeo.com/299612182'  />
                </div>
                <p><a href={"#"}>Try it yourself</a></p>

                <h3>Swiping horizontally should block window vertical scrolling and vice versa</h3>

                <p>You either swipe your window up/down or swipe the swiper left/right. Good swiper library should:</p>
                <ul>
                    <li>Detect if user is panning swiper, and if he is -> disable panning window up/down.</li>
                    <li>The other way round. If user is clearly moving his finger to scroll the window (up/down), panning left / right should be disabled.</li>
                </ul>

                <p>Short video explainer:</p>

                <div className={"video"}>
                    <ReactPlayer url='https://vimeo.com/299612182'  />
                </div>
                <p><a href={"#"}>Try it yourself</a></p>

                <p>(Implementation note. None of the available swipers do this properly. If this is implemented then it’s done by listening to touch events on closest window which is not reliable as such events might be prevented. swiper-modules solves this problem).</p>


                    {/*<h2>Let's get deeper</h2>*/}
                {/*<p>Lorem ipsum dolor sit amet, <code>consectetur</code> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                {/*<ul>*/}
                    {/*<li>Pies</li>*/}
                    {/*<li>Kot</li>*/}
                    {/*<li>Krowa</li>*/}
                {/*</ul>*/}
                {/*<p>*/}
                    {/*<strong>Important note, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</strong>*/}
                {/*</p>*/}
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                {/*<div className={"video"}>*/}
                    {/*<ReactPlayer url='https://vimeo.com/299612182'  />*/}
                {/*</div>*/}

                {/*<h2>Let's get deeper</h2>*/}
                {/*<p>Lorem ipsum dolor sit amet, <code>consectetur</code> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                {/*<CodeBlock code={`onSubmit(e) {*/}
    {/*e.preventDefault();*/}
    {/*const job = {*/}
        {/*title: 'Developer',*/}
        {/*company: 'Facebook'*/}
    {/*};*/}
{/*}`} />*/}

            </Article>
        </Page>
    );
}

export default Index;
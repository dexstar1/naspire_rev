import React, { Component } from "react";
import "../App.css";
// import Sidebar from "./Sidebar";
// import { Route, Switch } from "react-router-dom";

class MarketResearch extends Component {
  render() {
    return (
      <>
        <div>
          <h1 className="page-title-desc">MarketResearch</h1>
          <div className="article">
            <div className="featured">
              <div className="cat-box">
                <h1>
                  New guidance on SBA loans means most startups are still
                  excluded from $349 billion stimulus
                </h1>
                <div className="author">Oriade Adefolahan</div>
                <img src={require("../assets/image1.jpg")} alt="" />
              </div>
            </div>

            <div className="non-featured">
              <div className="cat-box">
                <h3>
                  This Week in Apps: Zoom has issues, Pinterest founder’s new
                  COVID-19 research app, record Q1 spending
                </h3>
                <div className="author">Tunji Adegbite</div>
              </div>
              <div className="cat-box">
                <h3>
                  Zoom admits some calls were routed through China by mistake
                </h3>
                <div className="author">Tunji Adegbite</div>
              </div>
              <div className="cat-box">
                <h3>
                  Startups Weekly: SaaS companies feel the churn but hope for a
                  brighter tomorrow
                </h3>
                <div className="author">Tunji Adegbite</div>
              </div>
            </div>

            <div className="latest">
              <h2 className="page-title-desc">The Latest</h2>
              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    Original Content podcast: ‘The Platform’ offers a gruesome
                    metaphor for capitalism
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    Original Content podcast: ‘The Platform’ offers a gruesome
                    metaphor for capitalism
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image2.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    Startups Weekly: SaaS companies feel the churn but hope for
                    a brighter tomorrow
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    [Editor’s note: Want to get this free weekly recap of
                    TechCrunch news that startups can use by email? Subscribe
                    here.] There are a few online productivity stocks booming,
                    and a few popular remote
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/saas.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    New guidance on SBA loans means most startups are still
                    excluded from $349 billion stimulus
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    New guidance on SBA loans means most startups are still
                    excluded from $349 billion stimulus
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image1.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    Why telehealth can’t significantly flatten the coronavirus
                    curve—yet
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    Eli Cahan Contributor Share on Twitter Eli Cahan is a
                    medical student at NYU on leave to complete a master’s in
                    health policy at Stanford as a Knight-Hennessy Scholar. His
                    research addresses the{" "}
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image4.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    Cultivating adaptability is a pandemic coping skill
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    It’s clear that the people who can let go of their past
                    plans and embrace the new environment{" "}
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image5.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    This Week in Apps: Zoom has issues, Pinterest founder’s new
                    COVID-19 research app, record Q1 spending
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    This week… how the COVID-19 outbreak is impacting apps and
                    the wider mobile app industry, more leaks about the new
                    version of iOS, Apple bought Dark Sky, and more.
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image6.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    Zoom admits some calls were routed through China by mistake
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    Hours after security researchers at Citizen Lab reported
                    that some Zoom calls were routed through China, the video
                    conferencing platform has offered an apology and a partial
                    explanation. To recap,{" "}
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image7.jpg")} alt="" />
                </div>
              </div>

              <div className="post">
                <div className="post-meta">
                  <h3 className="post-title">
                    Before suing NSO Group, Facebook allegedly sought their
                    software to better spy on users
                  </h3>
                  <div className="post-author">Eric Eldon</div>
                  <div className="post-time-date">
                    7:00 pm WAT • April 4, 2020
                  </div>
                </div>
                <div className="post-content">
                  <div>
                    Facebook’s WhatsApp is in the midst of a lawsuit against
                    Israeli mobile surveillance outfit NSO Group. But before
                    complaining about the company’s methods, Facebook seems to
                    have wanted to use
                  </div>
                </div>
                <div className="post-image">
                  <img src={require("../assets/image8.jpg")} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="ads">
            <div className="cat-box">
              <img src={require("../assets/image9.png")} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MarketResearch;

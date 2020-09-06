import React, { Component } from 'react'

export default class Academicprojects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="academicprojects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Academic Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Movie Recommendation System   <span>(May 2020)</span></h2>
<p>Designed and Developed a movie database system in PostgreSQL to recommend movies to a user based on similarities with other user’s preference list and subscription plans.                          
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>2048 Game Solver<span>(May 2020)</span></h2>
<p> Implemented an efficient adversarial search Agent to play 2048 game.Implemented principles of
expectiminimax, alpha beta pruning and necessary heuristics to generate each move in less than 0.2 secs. ​</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sudoku Game Solver <span>(May 2020)</span></h2>
                    <p>   Devised an efficient sudoku solver application to solve world's hardest sudokus in less than 20secs. Applied
backtracking technique with min remaining value and forward checking heuristics to reduce variable domains.</p>                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>8-puzzle solver ​ <span>(May 2020)</span></h2>
                    <p>    Built an agent to solve 8-puzzle combinatorial problem implementing BFS,DFS and A-Star algorithms with
necessary heuristics in less than a second. </p>                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Network Selection for Internet of Vehicles​ <span>(June 2016)</span></h2>
                    <p>   Designed an efficient vertical handoff decision method for
Internet of Vehicles by applying handoff probabilities,improving performance of existing systems by 96%. </p>                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

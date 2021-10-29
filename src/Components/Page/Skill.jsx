import React, {useEffect} from 'react';
import "../Css/Skill.css";

const Skill = () => {

        
  useEffect(() => {
    document.title = "Skills";
  })
    
    return (
        <>
            <section>
                <div className="skill_continer">
                    <div className="skill_row">
                        <div className="skill_col">
                            <div className="skill_Content">
                                HTML
                            </div>
                            <div className="skill_bar_Html"></div>
                        </div>
                        <div className="skill_col">
                            <div className="skill_Content">
                                CSS
                            </div>
                            <div className="skill_bar_Html css"></div>
                        </div>
                        <div className="skill_col">
                            <div className="skill_Content">
                            Bootstrap
                            </div>
                            <div className="skill_bar_Html Bootstrap"></div>
                        </div>
                        <div className="skill_col">
                            <div className="skill_Content">
                            React js
                            </div>
                            <div className="skill_bar_Html React"></div>
                        </div>
                        <div className="skill_col">
                            <div className="skill_Content">
                            Javascript
                            </div>
                            <div className="skill_bar_Html Javascript"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill;

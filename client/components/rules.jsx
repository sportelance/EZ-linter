import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rule from './rule.jsx'
import StyleGuides from './styleGuides.jsx';
import ApplyAll from './applyAll.jsx'

function Rules(props) {
  // destructuring properties passed down from props

  const { rules, allRules, updateRule, updateAllRules, loadPresets } = props;

  // for each rule/value pair, create a rule
  const rulesArray = [];
  const rulePairs = Object.entries(rules);
  for (let i = 0; i < rulePairs.length; i += 1) {
    rulesArray.push(
      <Rule
        key={`Rule-${i}`}
        updateRule={updateRule}
        ruleName={rulePairs[i][0]}
        ruleValue={rulePairs[i][1]}
      />
    );
  }

  // use hook to set visibility state of rules dropdown
  //creates state called 'visibility'
  // initializing function setVisiiblity to change visibikity
  // val of vis defaults to true because that's what was passed in
  const [visibility, setVisibility] = useState(true);

  // function to change visibility status on click
  const changeVis = () => {
    setVisibility(!visibility);
  };

  return (

    <div className="Container">
      <div className="Title" id="rulesTitle">
        <div id="row">
          <h2 onClick={changeVis}>
            {/* render icon based on visibility */}
            { visibility ? 'v' : '>' }
          </h2>
          <h2>Rules</h2>
        </div>
        <StyleGuides
            loadPresets = {loadPresets}
          />
      </div>
      {/* render section based on visibility */}
      {visibility ? (
        <>
          <div className="applyAll">
            <Rule
              key="Rule-Apply-All"
              updateRule={updateAllRules}
              ruleName="Apply All"
              ruleValue={allRules}
            />
          </div>
          <div className="Grid">
            {rulesArray}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Rules;

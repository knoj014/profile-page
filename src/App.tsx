import './App.css';

import bojLogo from './assets/boj.png';
import codeforcesLogo from './assets/codeforces.png'
import githubLogo from './assets/github.png'
import profile from './assets/profile.jpg';
import solveacLogo from './assets/solvedac.png'
import MyButton from './MyButton';

function App() {

  return (
    <div className="wrapper">

      <div
        style={{
          display:"flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <img src={profile} className="profileImage" />
      </div>
      
      <div className="introduction">
        <div> 공과대학 컴퓨터공학부 24학번 </div>
        <br />
        <div> 알고리즘 문제 풀이(PS) 좋아합니다 </div>
        <ul>
          <li> UCPC 2024 5등상(3인 팀 대회, 13등) </li>
          <li> LGCPC 2024 우수상(19등) </li>
        </ul>
        <br />
        <div> 와플스튜디오에서 개발 관련 지식을 쌓아나가고 싶습니다. </div>
        <br />
        <div className="buttonWrapper">
          <MyButton url='https://www.acmicpc.net/user/jk410' logoSrc={bojLogo} siteName='백준(BOJ)' />
          <MyButton url='https://solved.ac/profile/jk410' logoSrc={solveacLogo} siteName='solved.ac' />
          <MyButton url='https://codeforces.com/profile/DELTARUNE' logoSrc={codeforcesLogo} siteName='Codeforces' />
          <MyButton url='https://github.com/knoj014' logoSrc={githubLogo} siteName='Github' />
        </div>
      </div>
    </div>
  );
}

export default App;

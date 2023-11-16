document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("keypress", function (e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      disMark();
      e.preventDefault();
      console.log("work aaguthu");
      return false;
    }
  });
});

const dnoMarks = [
  {
    dno: "22ucs626",
    name: "TAMILARASAN N",
    m1: [77, 77],
    m2: [77, 77],
    m3: [77, 77],
    m4: [77, 77],
    m5: [77, 77],
    m6: [77, 77],
    m7: [77, 77],
    m8: [77, 77],
  },
  {
    dno: "22ucs627",
    name: "EZHILARASAN S",
    m1: [54, 60],
    m2: [59, 57],
    m3: [68, 65],
    m4: [54, 59],
    m5: [87, 95],
    m6: [45, 49],
    m7: [80, 90],
    m8: [54, 61],
  },
  {
    dno: "22ucs669",
    name: "PROMOTH KUMAR K",
    m1: [73, 56],
    m2: [68, 62],
    m3: [79, 67],
    m4: [71, 70],
    m5: [90, 93],
    m6: [55, 60],
    m7: [87, 90],
    m8: [65, 70],
  },
  {
    dno: "22ucs664",
    name: "JEEVA L",
    m1: [70, 61],
    m2: [86, 76],
    m3: [81, 77],
    m4: [96, 75],
    m5: [98, 95],
    m6: [72, 70],
    m7: [100, 100],
    m8: [70, 73],
  },
];
document.querySelector(".result-btn").addEventListener("click", disMark);
// document.querySelector(".result-btn").addEventListener("keyup", handleKeyUp);
function disMark() {
  const dNo = document.querySelector(".d-no");
  for (let i = 0; i < dnoMarks.length; i++) {
    if (dnoMarks[i].dno == dNo.value.toLowerCase()) {
      document.querySelector(".col-lg-12").innerHTML = `<br /><br /><br /><br />
      <table class="table" width="100%" border="1">
        <tbody>
          <tr>
            <td align="center">${dnoMarks[i].name}</td>
            <td align="center">${dnoMarks[i].dno.toUpperCase()}</td>
          </tr>
        </tbody>
      </table>
      
      <table class="table" width="100%" border="1">
        <tbody>
          <tr>
            <td align="center">Semester</td>
            <td align="center">Paper Code</td>
            <td align="center">Paper Name</td>
            <td align="center">CIA</td>
            <td align="center">SEM</td>
            <td align="center">Result</td>
            <td align="center">Remarks</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UTA31GL03</td>
            <td>GENERAL TAMIL-III</td>
            <td align="center">${dnoMarks[i].m1[0]}</td>
            <td align="center">${dnoMarks[i].m1[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UCS23CC06</td>
            <td>DATABASE SYSTEMS</td>
            <td align="center">${dnoMarks[i].m2[0]}</td>
            <td align="center">${dnoMarks[i].m2[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UEN32GE03</td>
            <td>GENERAL ENGLISH-III</td>
            <td align="center">${dnoMarks[i].m3[0]}</td>
            <td align="center">${dnoMarks[i].m3[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UCS33CC05</td>
            <td>DISCRETE MATHEMATICS</td>
            <td align="center">${dnoMarks[i].m4[0]}</td>
            <td align="center">${dnoMarks[i].m4[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UCS23CP03</td>
            <td>LAB 3:HARDWARE</td>
            <td align="center">${dnoMarks[i].m5[0]}</td>
            <td align="center">${dnoMarks[i].m5[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UCS33AO03A</td>
            <td>APPLIED PHYSICS-I</td>
            <td align="center">${dnoMarks[i].m6[0]}</td>
            <td align="center">${dnoMarks[i].m6[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UCS43SE01</td>
            <td>SEC -1 (WD): RDBMS</td>
            <td align="center">${dnoMarks[i].m7[0]}</td>
            <td align="center">${dnoMarks[i].m7[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
      
          <tr>
            <td align="center">3</td>
            <td>21UHE24VE03A</td>
            <td>PROFESSIONAL ETHICS-I: SOCIAL ETHICS</td>
            <td align="center">${dnoMarks[i].m8[0]}</td>
            <td align="center">${dnoMarks[i].m8[1]}</td>
            <td align="center">P</td>
            <td align="center">XX</td>
          </tr>
        </tbody>
      </table>`;
      console.log(dnoMarks[i]);
      break;
    } else {
      console.log(Math.random());
      document.querySelector(".col-lg-12").innerHTML = `<br><br><br><br>
      <table class="table" width="100%" border="1">  
      <tbody><tr>
          
      </tr>
      </tbody></table>
      
      <table class="table" width="100%" border="1">  
      <tbody><tr>            
      <td align="center">Semester</td>
      <td align="center">Paper Code</td>
      <td align="center">Paper Name</td>
      <td align="center">CIA</td>
      <td align="center">SEM</td>
      <td align="center">Result</td>
      <td align="center">Remarks</td>
      </tr>
      
      
      </tbody></table>`;
    }
  }
}

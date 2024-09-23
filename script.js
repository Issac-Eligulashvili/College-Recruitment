const lowIncomeBtn = document.getElementById('lowIncome');
const medIncomeBtn = document.getElementById('mediumIncome');
const medHighIncomeBtn = document.getElementById('mediumHighIncome');
const highIncomeBtn = document.getElementById('highIncome');
let currentState = '';
const pieChart = document.querySelector('.pie-chart');
let isAnimating = false;

let currentAngle = 0;

function shuffleText(value) {
     const priceText = document.querySelector('.priceNum');
     let priceTextArray = [];
     let iterations = 0;
     const interval = setInterval(function () {
          priceTextArray = priceText.innerText.split('');
          if (priceText[2] != value) {
               priceTextArray[2] = Math.floor(Math.random() * 10);
          } else {
               priceTextArray[2] = value;
               clearInterval(interval);
          }

          if (iterations >= 59) {
               clearInterval(interval);
               priceTextArray[2] = value;
          }

          priceText.innerText = priceTextArray.join('');

          iterations++;

     }, 30);
}


function removeClasses() {
     const classesToRemove = ['low', 'medium', 'medium-high', 'high'];
     classesToRemove.forEach(className => {
          if (pieChart.classList.contains(className)) {
               pieChart.classList.remove(className);
          }
     })
}

function changePieChart(income) {
     removeClasses();
     if (income === 'low') {
          pieChart.classList.add('low');
          currentAngle = 40;
          setTimeout(function () {
               currentState = 'low';
          }, 2000);
          isAnimating = true;
     } else if (income === 'medium') {
          pieChart.classList.add('medium')
          currentAngle = 126;
          setTimeout(function () {
               currentState = 'medium';
          }, 2000);
          isAnimating = true;
     } else if (income === 'mediumHigh') {
          pieChart.classList.add('medium-high');
          currentAngle = 208;
          setTimeout(function () {
               currentState = 'mediumHigh';
          }, 2000);
          isAnimating = true;
     } else {
          pieChart.classList.add('high');
          currentAngle = 295;
          setTimeout(function () {
               currentState = 'high';
          }, 2000);
          isAnimating = true;
     }

     setTimeout(function () {
          pieChart.style.setProperty('--angle', `${currentAngle}deg`);
          isAnimating = false;
     }, 2000)
}

// Dynamic Tables
const lowData = {
     tuition: "Mostly Covered by Financial Aid",
     fees: "Mostly Covered by Financial Aid",
     supplies: '~$300 - $500',
     housing: '~$3,000',
     personalExpenses: '~$1,000 - $2,500',
}

const medData = {
     tuition: "~$5,000 - $12,000 due to financial aid",
     fees: "~$500 - $1,000",
     supplies: '~$300 - $1000',
     housing: '~$3,000 - $8,000',
     personalExpenses: '~$1,000 - $2,000',
}

const medHighData = {
     tuition: "~$20,000 - $30,000",
     fees: "~$1,000 - $2,000",
     supplies: '~$500 - $1,200',
     housing: '~$10,000 - $15,000',
     personalExpenses: '~$2,000 - $3,000',
}

const highData = {
     tuition: "~$40,000 - $55,000",
     fees: "~$2,000 - $3,000",
     supplies: '~$1,000 - $1,400',
     housing: '~$15,000 - $19,000',
     personalExpenses: '~$3,000 - $5,000',
}

function buildTable(income) {
     const table = document.querySelector('.table');

     if (income === 'low') {
          table.innerHTML = `
               <tr>
                <th>Category</th>
                <th>On-Campus</th>
                <th>Off-Campus</th>
              </tr>
              <tr>
                <td>Tuition</td>
                <td>${lowData.tuition}</td>
                <td>${lowData.tuition}</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>${lowData.fees}</td>
                <td>${lowData.fees}</td>
              </tr>
              <tr>
                <td>Books, Course Materials, Supplies and Equipment (est.)</td>
                <td>${lowData.supplies}</td>
                <td>${lowData.supplies}</td>
              </tr>
              <tr>
                <td>Housing/Room</td>
                <td>${lowData.housing}</td>
                <td>${lowData.housing}</td>
              </tr>
              <tr>
                <td>Living Expenses</td>
                <td><i>N/A</i></td>
                <td><i>N/A</i></td>
              </tr>
              <tr>
                <td>Personal Expenses (est.)</td>
                <td>${lowData.personalExpenses}</td>
                <td>${lowData.personalExpenses}</td>
              </tr>
          `
     } else if (income === 'med') {
          table.innerHTML = `
               <tr>
                <th>Category</th>
                <th>On-Campus</th>
                <th>Off-Campus</th>
              </tr>
              <tr>
                <td>Tuition</td>
                <td>${medData.tuition}</td>
                <td>${medData.tuition}</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>${medData.fees}</td>
                <td>${medData.fees}</td>
              </tr>
              <tr>
                <td>Books, Course Materials, Supplies and Equipment (est.)</td>
                <td>${medData.supplies}</td>
                <td>${medData.supplies}</td>
              </tr>
              <tr>
                <td>Housing/Room</td>
                <td>${medData.housing}</td>
                <td>${medData.housing}</td>
              </tr>
              <tr>
                <td>Living Expenses</td>
                <td><i>N/A</i></td>
                <td><i>N/A</i></td>
              </tr>
              <tr>
                <td>Personal Expenses (est.)</td>
                <td>${medData.personalExpenses}</td>
                <td>${medData.personalExpenses}</td>
              </tr>
          `
     } else if (income === 'medHigh') {
          table.innerHTML = `
               <tr>
                <th>Category</th>
                <th>On-Campus</th>
                <th>Off-Campus</th>
              </tr>
              <tr>
                <td>Tuition</td>
                <td>${medHighData.tuition}</td>
                <td>${medHighData.tuition}</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>${medHighData.fees}</td>
                <td>${medHighData.fees}</td>
              </tr>
              <tr>
                <td>Books, Course Materials, Supplies and Equipment (est.)</td>
                <td>${medHighData.supplies}</td>
                <td>${medHighData.supplies}</td>
              </tr>
              <tr>
                <td>Housing/Room</td>
                <td>${medHighData.housing}</td>
                <td>${medHighData.housing}</td>
              </tr>
              <tr>
                <td>Living Expenses</td>
                <td><i>N/A</i></td>
                <td><i>N/A</i></td>
              </tr>
              <tr>
                <td>Personal Expenses (est.)</td>
                <td>${medHighData.personalExpenses}</td>
                <td>${medHighData.personalExpenses}</td>
              </tr>
          `
     } else {
          table.innerHTML = `
               <tr>
                <th>Category</th>
                <th>On-Campus</th>
                <th>Off-Campus</th>
              </tr>
              <tr>
                <td>Tuition</td>
                <td>${highData.tuition}</td>
                <td>${highData.tuition}</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>${highData.fees}</td>
                <td>${highData.fees}</td>
              </tr>
              <tr>
                <td>Books, Course Materials, Supplies and Equipment (est.)</td>
                <td>${highData.supplies}</td>
                <td>${highData.supplies}</td>
              </tr>
              <tr>
                <td>Housing/Room</td>
                <td>${highData.housing}</td>
                <td>${highData.housing}</td>
              </tr>
              <tr>
                <td>Living Expenses</td>
                <td><i>N/A</i></td>
                <td><i>N/A</i></td>
              </tr>
              <tr>
                <td>Personal Expenses (est.)</td>
                <td>${highData.personalExpenses}</td>
                <td>${highData.personalExpenses}</td>
              </tr>
          `
     }
}

lowIncomeBtn.addEventListener('click', function () {
     if (isAnimating === false) {
          changePieChart('low');
          if (currentState != 'low') {
               shuffleText(1);
          }
     }
     buildTable('low');
});

medIncomeBtn.addEventListener('click', function () {
     if (isAnimating === false) {
          changePieChart('medium');
          if (currentState != 'medium') {
               shuffleText(3);
          }
     }
     buildTable('med');
})

medHighIncomeBtn.addEventListener('click', function () {
     if (isAnimating === false) {
          changePieChart('mediumHigh');
          if (currentState != 'mediumHigh') {
               shuffleText(5);
          }
     }
     buildTable('medHigh');
})

highIncomeBtn.addEventListener('click', function () {
     if (isAnimating === false) {
          changePieChart('high');
          if (currentState != 'high') {
               shuffleText(7);
          }
     }
     buildTable('high');
})

// Creating the Objects for the Majors Page

const majorsData = {
     "Biology_and_Biological_Engineering": [
          {
               name: "Bioengineering",
               description: "Focuses on the application of engineering principles to biological systems.",
               department: "Division of Biology and Biological Engineering",
          },
          {
               name: "Biology",
               description: "Explores the fundamental mechanisms governing living organisms.",
               department: "Division of Biology and Biological Engineering",
          },
          {
               name: "Computational and Neural Systems",
               description: "Integrates computational techniques with neuroscience.",
               department: "Division of Biology and Biological Engineering",
          },
          {
               name: "Systems Biology",
               description: "Studies complex interactions within biological systems.",
               department: "Division of Biology and Biological Engineering",
          }
     ],
     "Chemistry_and_Chemical_Engineering": [
          {
               name: "Chemical Engineering",
               description: "Combines chemistry, biology, physics, and math to solve problems related to chemicals, fuels, and more.",
               department: "Division of Chemistry and Chemical Engineering",
          },
          {
               name: "Chemistry",
               description: "Investigates matter's properties, composition, and reactions.",
               department: "Division of Chemistry and Chemical Engineering",
          },
          {
               name: "Biochemistry and Molecular Biophysics",
               description: "Studies the structure and function of biomolecules.",
               department: "Division of Chemistry and Chemical Engineering",
          }
     ],
     "Engineering_and_Applied_Science": [
          {
               name: "Aerospace",
               description: "Focuses on the design, development, and testing of aircraft and spacecraft.",
               department: "Division of Engineering and Applied Science",
          },
          {
               name: "Applied Physics",
               description: "Applies the principles of physics to solve real-world problems.",
               department: "Division of Engineering and Applied Science"
          },
          {
               name: "Electrical Engineering",
               description: "Covers areas like electronics, circuits, and electromagnetism.",
               department: "Division of Engineering and Applied Science"
          },
          {
               name: "Mechanical Engineering",
               description: "Studies motion, energy, and force to solve mechanical problems.",
               department: "Division of Engineering and Applied Science"
          },
          {
               name: "Computer Science",
               description: "Explores computation, algorithms, and systems design.",
               department: "Division of Engineering and Applied Science"
          },
          {
               name: "Environmental Science and Engineering",
               description: "Focuses on environmental processes and sustainable solutions.",
               department: "Division of Engineering and Applied Science"
          },
          {
               name: "Materials Science",
               description: "Studies the properties and applications of materials.",
               department: "Division of Engineering and Applied Science"
          }
     ],
     "Geological_and_Planetary_Sciences": [
          {
               name: "Geology",
               description: "Examines Earth’s structure, materials, and processes.",
               department: "Division of Geological and Planetary Sciences"
          },
          {
               name: "Geobiology",
               description: "Studies the interaction between the biosphere and the geosphere.",
               department: "Division of Geological and Planetary Sciences"
          },
          {
               name: "Geochemistry",
               description: "Investigates the chemical composition of the Earth.",
               department: "Division of Geological and Planetary Sciences"
          },
          {
               name: "Geophysics",
               description: "Uses physical principles to study the Earth.",
               department: "Division of Geological and Planetary Sciences"
          },
          {
               name: "Planetary Science",
               description: "Studies the planets, moons, and other celestial bodies.",
               department: "Division of Geological and Planetary Sciences"
          }
     ],
     "Physics_Mathematics_and_Astronomy": [
          {
               name: "Astrophysics",
               description: "Explores the physics of the universe, including stars, galaxies, and black holes.",
               department: "Division of Physics, Mathematics, and Astronomy"
          },
          {
               name: "Applied and Computational Mathematics",
               description: "Focuses on applying mathematical methods to scientific and engineering problems.",
               department: "Division of Physics, Mathematics, and Astronomy"
          },
          {
               name: "Mathematics",
               description: "Covers pure and applied mathematical principles.",
               department: "Division of Physics, Mathematics, and Astronomy"
          },
          {
               name: "Physics",
               description: "Investigates the fundamental laws of nature, from particles to the universe.",
               department: "Division of Physics, Mathematics, and Astronomy"
          }
     ],
     "Humanities_and_Social_Sciences": [
          {
               name: "Business, Economics, and Management",
               description: "Focuses on the management of enterprises and the economics of industries.",
               department: "Division of Humanities and Social Sciences"
          },
          {
               name: "History",
               description: "Explores past events and their impact on the present.",
               department: "Division of Humanities and Social Sciences"
          },
          {
               name: "Philosophy",
               description: "Investigates fundamental questions about existence, knowledge, and ethics.",
               department: "Division of Humanities and Social Sciences"
          },
          {
               name: "Political Science",
               description: "Studies systems of governance and political behavior.",
               department: "Division of Humanities and Social Sciences"
          },
          {
               name: "English",
               description: "Examines literature and the English language.",
               department: "Division of Humanities and Social Sciences"
          }
     ]
};

const facultyData = {
     "Biology_and_Biological_Engineering": [
          'https://www.bbe.caltech.edu/academics/bioengineering/people/faculty',
          'https://www.bbe.caltech.edu/people/faculty',
     ],
     "Chemistry_and_Chemical_Engineering": [
          'https://www.cce.caltech.edu/research/faculty'
     ],
     "Engineering_and_Applied_Science": [
          'https://www.eas.caltech.edu/people/faculty'
     ],
     "Geological_and_Planetary_Sciences": [
          'https://www.gps.caltech.edu/people/faculty'
     ],
     "Physics_Mathematics_and_Astronomy": [
          'https://pma.caltech.edu/people/faculty'
     ],
     "Humanities_and_Social_Sciences": [
          'https://www.hss.caltech.edu/people/faculty'
     ]
};

function showCards() {
     const division = document.getElementById('divisionDropdown').value;
     const cardContainer = document.getElementById('cardContainer');
     const linksContainer = document.getElementById('linksContainer');

     // Clear existing cards
     cardContainer.innerHTML = '';


     if (division && majorsData[division]) {


          console.log(majorsData[division]);
          majorsData[division].forEach(major => {
               //Create the column for each card
               const col = document.createElement('div');
               col.classList.add('col-12', 'col-md-4');
               // Create a card for each major
               const card = document.createElement('div');
               card.classList.add('card', 'majorsCard');
               //create link based on name
               let linkEnd = major.name.toLowerCase();
               linkEnd = linkEnd.replaceAll(' ', '-');
               const link = `https://www.catalog.caltech.edu/current/areas-of-study-and-research/${linkEnd}/`
               // Add content to the card
               card.innerHTML = `
                 <h3>${major.name}</h3>
                 <p><strong>Description:</strong> ${major.description}</p>
                 <p><strong>Department:</strong> ${major.department}</p>
                 <a class="learnMoreButton" href="${link}">Learn More</a>
             `;


               col.appendChild(card);
               // Append col to the container
               cardContainer.appendChild(col);
          });
     }

     //clear existing links

     linksContainer.innerHTML = '';

     if (division && facultyData[division]) {
          console.log(facultyData[division]);


          facultyData[division].forEach(link => {
               const links = document.createElement('a');
               links.href = link;
               links.textContent = 'See our faculty';
               links.target = '_blank';
               links.classList.add('col-md-4', 'col-12')

               //append links
               linksContainer.appendChild(links);
          });
     }
}

// marquee animation
const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
     addAnimation();
}

function addAnimation() {
     scrollers.forEach(scroller => {
          scroller.setAttribute('data-animated', true);

          const scrollerInner = scroller.querySelector('.scroller-inner');
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach(logo => {
               const duplicatedItem = logo.cloneNode(true);
               duplicatedItem.setAttribute("aria-hidden", true);
               scrollerInner.appendChild(duplicatedItem)
          });
     })

}
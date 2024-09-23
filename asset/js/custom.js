// -----Skill set parameter for chart.js
  const options = {
    scales: {
      r: {
          max: 5,
          min: 0,
          ticks: {
              stepSize: 1
          }
      }
    }
  }
  // Front-end
  var ctx = document.getElementById('frontendSkillChart');

  var data = {
    labels: [
      'HTML/CSS',
      'JavaScript',
      'WordPress',
      'React.js',
      'Playwright',
      'backbone.js'
    ],
    datasets: [{
      label: 'Front-End',
      data: [2, 3, 2, 2, 2, 2],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };

  new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options,
  });

  // Back-end
  var ctx = document.getElementById('backendSkillChart');

  var data = {
    labels: [
      'Java/Spring Boot',
      'OracleDB',
      'MySQL',
      'PHP/Laravel',
      'Node.js',
      'python'
    ],
    datasets: [{
      label: 'Back-End/DB',
      data: [3, 3, 2, 1, 2, 2],
      fill: true,
      backgroundColor: 'rgba(121, 198, 182, 0.2)',
      borderColor: 'rgba(121, 198, 182, 1)',
        pointBackgroundColor: 'rgba(121, 198, 182, 1)',
        pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(121, 198, 182, 1)'
    }]
  };

  new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options,
  });

  // Others
  var ctx = document.getElementById('OtherSkillChart');

  var data = {
    labels: [
      'OpenShift',
      'Git/GitHub',
      'AWS',
      'Jenkins',
      'ArgoCD',
      'Agile'
    ],
    datasets: [{
      label: 'Operation/Project Management',
      data: [3, 3, 2, 2, 3, 4],
      fill: true,
      backgroundColor: 'rgba(255, 195, 93, 0.2)',
      borderColor: 'rgba(255, 195, 93, 1)',
      pointBackgroundColor: 'rgba(255, 195, 93, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 195, 93, 1)'
    }]
  };

  new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options,
  });

  // modals
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
});

function closeModal(modalId) {
  const modalInstance = M.Modal.getInstance(document.getElementById(modalId));
  modalInstance.close();
}
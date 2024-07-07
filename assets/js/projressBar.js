let configuration = {
    strokeWidth: 5,
    color: '#4628ba',
    trailColor: '#e7e7e7',
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false,
      
    },
    from: { color: '#4628ba', width: 5 },
    to: { color: '#4628ba', width: 5 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }
    }
  }
  
  var progressBar1 = new ProgressBar.Circle('#progressContainer1', configuration);
  var progressBar2 = new ProgressBar.Circle('#progressContainer2', configuration);
  
  progressBar1.animate(0.65);
  progressBar2.animate(0.85);
  
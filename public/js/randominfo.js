var waitingApp = new Vue({
  el: '#randomuserinfo',
  data: {
    person: [
        {
        }
    ]
  },
  methods: {
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => waitingApp.person = json.results[0]);

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchPatients();
  }
});
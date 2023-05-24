
      fetch('https://randomuser.me/api/?gender=female&nat=fr')
        .then((response) => response.json())
        .then((data)=>{
            console.log(data.results[0])
            let card = document.querySelector('.card')
            card.innerHTML = `
            <div class="card-header">
                <p>
                    <img src=${data.results[0].picture.large} alt="">
                </p>
            </div>
            <h5>Bonjour je m'appelle</h5>
            <h4>${data.results[0].login.username} </h4>
              <h6>
                - ${data.results[0].location.state} <br>
                - ${data.results[0].location.city} <br>
                - ${data.results[0].dob.age}
              </h6>
            `
        })
      
    


const NYSCData = [
  {
    "id": 1,
    "state": {
      "name": "Abia",
      "code": "AB"
    }
  },
  {
    "id": 2,
    "state": {
      "name": "Adamawa",
      "code": "AD"
    }
  },
  {
    "id": 3,
    "state": {
      "name": "Akwa Ibom",
      "code": "AK"
    }
  },
  {
    "id": 4,
    "state": {
      "name": "Anambra",
      "code": "AN"
    }
  },
  {
    "id": 5,
    "state": {
      "name": "Bauchi",
      "code": "BA"
    }
  },
  {
    "id": 6,
    "state": {
      "name": "Bayelsa",
      "code": "BY"
    }
  },
  {
    "id": 7,
    "state": {
      "name": "Benue",
      "code": "BN"
    }
  },
  {
    "id": 8,
    "state": {
      "name": "Borno",
      "code": "BO"
    }
  },
  {
    "id": 9,
    "state": {
      "name": "Cross River",
      "code": "CR"
    }
  },
  {
    "id": 10,
    "state": {
      "name": "Delta",
      "code": "DT"
    }
  },
  {
    "id": 11,
    "state": {
      "name": "Ebonyi",
      "code": "EB"
    }
  },
  {
    "id": 12,
    "state": {
      "name": "Edo",
      "code": "ED"
    }
  },
  {
    "id": 13,
    "state": {
      "name": "Ekiti",
      "code": "EK"
    }
  },
  {
    "id": 14,
    "state": {
      "name": "Enugu",
      "code": "EN"
    }
  },
  {
    "id": 15,
    "state": {
      "name": "FCT Abuja",
      "code": "FC"
    }
  },
  {
    "id": 16,
    "state": {
      "name": "Gombe",
      "code": "GM"
    }
  },
  {
    "id": 17,
    "state": {
      "name": "Imo",
      "code": "IM"
    }
  },
  {
    "id": 18,
    "state": {
      "name": "Jigawa",
      "code": "JG"
    }
  },
  {
    "id": 19,
    "state": {
      "name": "Kaduna",
      "code": "KD"
    }
  },
  {
    "id": 20,
    "state": {
      "name": "Kano",
      "code": "KN"
    }
  },
  {
    "id": 21,
    "state": {
      "name": "Katsina",
      "code": "KT"
    }
  },
  {
    "id": 22,
    "state": {
      "name": "Kebbi",
      "code": "KB"
    }
  },
  {
    "id": 23,
    "state": {
      "name": "Kogi",
      "code": "KG"
    }
  },
  {
    "id": 24,
    "state": {
      "name": "Kwara",
      "code": "KW"
    }
  },
  {
    "id": 25,
    "state": {
      "name": "Lagos",
      "code": "LA"
    }
  },
  {
    "id": 26,
    "state": {
      "name": "Nasarawa",
      "code": "NS"
    }
  },
  {
    "id": 27,
    "state": {
      "name": "Niger",
      "code": "NG"
    }
  },
  {
    "id": 28,
    "state": {
      "name": "Ogun",
      "code": "OG"
    }
  },
  {
    "id": 29,
    "state": {
      "name": "Ondo",
      "code": "ON"
    }
  },
  {
    "id": 30,
    "state": {
      "name": "Osun",
      "code": "OS"
    }
  },
  {
    "id": 31,
    "state": {
      "name": "Oyo",
      "code": "OY"
    }
  },
  {
    "id": 32,
    "state": {
      "name": "Plateau",
      "code": "PL"
    }
  },
  {
    "id": 33,
    "state": {
      "name": "Rivers",
      "code": "RV"
    }
  },
  {
    "id": 34,
    "state": {
      "name": "Sokoto",
      "code": "SO"
    }
  },
  {
    "id": 35,
    "state": {
      "name": "Taraba",
      "code": "TR"
    }
  },
  {
    "id": 36,
    "state": {
      "name": "Yobe",
      "code": "YO"
    }
  },
  {
    "id": 37,
    "state": {
      "name": "Zamfara",
      "code": "ZF"
    }
  }
]

class Corper {
  constructor(state, batch, platoon, year) {
    this.state = state;
    this.platoon = platoon;
    this.year = year;
    this.batch = batch;
  }

  fetchCorper() {
    return ` 
      <p class="data-p">State: ${this.state}</p> 
      <p>Batch: ${this.batch}</p> 
      <p>Year: ${this.year}</p> 
      <p>Platoon: ${this.platoon}</p> 
    `;
  }
}


const btn = document.getElementById('download-btn');
const fetch = document.getElementById("fetch");
const stateCode = document.getElementById("statecode");
const result = document.getElementById('res');
let found = false
let correctFormat = false
fetch.addEventListener('click', () => {
  const inputData = stateCode.value;
  const partinputData = inputData.split("/");
  const result = document.getElementById("res");
 
  if (inputData.length < 11) {
    result.style.display = "block";
    result.innerHTML += `Incorrect data entry, hence we could not confirm your deployment data`;
    const cls = document.getElementById('close');
    cls.style.display = "block";
      cls.addEventListener("click", () => {
        result.innerHTML = "";
        result.style.display = "none";
        cls.style.display = "none";
      });
    return;
  }
 
const btn = document.getElementById('download-btn');
  NYSCData.forEach(data => {
    if (data.state.code === partinputData[0] && inputData.length === 11) {
      const str = data.state.code === partinputData[0] && partinputData[1];
      const splitStr = str.split(/(\d+)/);
      const state = data.state.name;
      const year = `20${splitStr[1]}`;
      const batch = splitStr[2];
      const platoon = partinputData[2] % 10;
      
      const cls = document.getElementById('close');
      const myData = new Corper(state, batch, platoon, year);
      result.style.display = "block";
      btn.style.display = "block";
      cls.style.display = "block";
      cls.addEventListener("click", () => {
        result.innerHTML = "";
        result.style.display = "none";
        cls.style.display = "none";
      });
      console.log(myData.fetchCorper());
      result.innerHTML += `
        <div class="data">
          <div class="res-img">
            <img src="logo.jpg" class="logo2" />
          </div>
          <div class="p">
            ${myData.fetchCorper()}
          </div>
        </div>
      `;
    }
  });
});




const node =document.getElementById("res")
let options = {
    quality: 0.99,
    width: window.screen > 560 ? 1000: 500,
    height:window.screen > 560 ? 1000: 500,,
};
btn.onclick = function() {
  domtoimage.toBlob(node, options)
    .then(function(blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-certification.png';
      a.click();
      URL.revokeObjectURL(url);
    });
};
                           

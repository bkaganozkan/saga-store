let usEast = "us-east"
let usWest = "us-west"
let euCentral = "eu-Central"
let euWest = "eu-west"
let sa = "sa"
let ru = "ru"
let kr = "kr"
let jp = "jp"

const state = {
    serverInfo: [
        {
            name: "Azena",
            price: 0.5,
            server : usEast
        },
        {
            name: "Mari",
            price: 0.5,
            server : usWest
        },
        {
            name: "Waltan",
            price: 0.5,
            server : usWest
        },
        {
            name: "Una",
            price: 0.5,
            server : usEast
        },
        {
            name: "Karta",
            price: 0.5,
            server : usEast
        },
        {
            name: "Regulus",
            price: 0.5,
            server : usEast
        },
        {
            name: "Kadan",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Zinnervale",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Avesta",
            price: 0.5,
            server : usEast
        },
        {
            name: "Neria",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Enviska",
            price: 0.5,
            server : usWest
        },
        {
            name: "Asta",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Thirain",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Evergrace",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Trixion",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Armen",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Ladon",
            price: 0.5,
            server : usEast
        },
        {
            name: "Nia",
            price: 0.5,
            server : euWest
        },
        {
            name: "Bergstrom",
            price: 0.5,
            server : usWest
        },
        {
            name: "Mokoko",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Ezrebet",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Rohendel",
            price: 0.5,
            server : usWest
        },
        {
            name: "Lazenith",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Ealyn",
            price: 0.5,
            server : euWest
        },
        {
            name: "Antares",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Shandi",
            price: 0.5,
            server : usWest
        },
        {
            name: "Akkan",
            price: 0.5,
            server : usWest
        },
        {
            name: "Calvasus",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Galatur",
            price: 0.5,
            server : usEast
        },
        {
            name: "Slen",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Zosma",
            price: 0.5,
            server : usWest
        },
        {
            name: "Kharmine",
            price: 0.5,
            server : usEast
        },
        {
            name: "Danube",
            price: 0.5,
            server : usEast
        },
        {
            name: "Adrinne",
            price: 0.5,
            server : usEast
        },
        {
            name: "Wei",
            price: 0.5,
            server : euCentral
        },
        {
            name: "Vykas",
            price: 0.5,
            server : usEast
        },
        {
            name: "Sasha",
            price: 0.5,
            server : usEast
        },
        {
            name: "Kazeros",
            price: 0.5,
            server : sa
        },
        {
            name: "Elzowin",
            price: 0.5,
            server : usEast
        },
        {
            name: "Blackfang",
            price: 0.5,
            server : sa
        },
        {
            name: "Aldebaran",
            price: 0.5,
            server : usEast
        },
        {
            name: "Arthentine",
            price: 0.5,
            server : sa
        },
        {
            name: "Кратос",
            price: 0.5,
            server : ru
        },
        {
            name: "Альдеран",
            price: 0.5,
            server : ru
        },
        {
            name: "Main Server",
            price: 0.5,
            server : kr
        },
        {
            name: "Main Server",
            price: 0.5,
            server : jp
        },
    ],
    serverLocations : [
        {
            value : "all",
            label : "All"
        },
        {
            value : usEast,
            label : "US East"
        },
        {
            value : usWest,
            label : "US West"
        },
        {
            value : euCentral,
            label : "EU Central"
        },
        {
            value : euWest,
            label : "EU West"
        },
        {
            value : sa,
            label : "SA"
        },
        {
            value : ru,
            label : "RU"
        },
        {
            value : kr,
            label : "KR"
        },
        {
            value : jp,
            label : "JP"
        },

    ]
};
const getters = {
    getServerInfo :(state) => (serverLocation) => {
        if(serverLocation === "all"){
           return state.serverInfo; 
        }
        else{
            return state.serverInfo.filter(server => server.server == serverLocation);
        }
    },
    getServerLocations(state){
        return state.serverLocations
    }
};
const mutations = {};
const actions = {};

export default { state, getters, actions, mutations };
